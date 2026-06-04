# Сохранение Будильников - Документация

## Проблема
Будильники пропадали после перезагрузки сервера Home Assistant, так как хранились только в памяти и в конфиге без надежного резервного копирования.

## Решение
Реализовано сохранение состояния будильников в Redis с автоматическим восстановлением при запуске.

## Архитектура Решения

### Компоненты

#### 1. AlarmPersistence (`alarm_persistence.py`)
Новый класс для управления сохранением/восстановлением данных будильников в Redis:

```python
persistence = AlarmPersistence(redis_url, redis_password)
await persistence.connect()
await persistence.save_alarms(alarms, client_id)
loaded = await persistence.load_alarms(client_id)
```

**Ключи в Redis:**
- `timer_alarm:active_alarms:{client_id}` - JSON список активных будильников

**TTL:** 30 дней (автоматически обновляется при каждом сохранении)

#### 2. DialogAlarmManager (обновлен)
Интеграция с слоем персистентности:

- `async_restore_from_persistence()` - восстановление из Redis при старте
- `_save_alarms_to_persistence()` - сохранение в Redis после изменений
- Конструктор принимает `AlarmPersistence` объект

#### 3. DialogTimerAlarmManager (обновлен)
Управление инициализацией и жизненным циклом:

- Инициализирует `AlarmPersistence` с параметрами Redis
- `async_restore_from_options()` - подключается к Redis и восстанавливает состояние
- `_async_save_to_persistence()` - асинхронное сохранение (неблокирующее)
- `async_stop()` - отключается от Redis перед остановкой

#### 4. DialogCommandCoordinator (обновлен)
Передает конфигурацию Redis:

```python
options = _get_options(entry)
redis_url = options.get(CONF_REDIS_URL)
redis_password = options.get(CONF_REDIS_PASSWORD)

self.timer_alarm_manager = DialogTimerAlarmManager(
    hass,
    self._append_log,
    self._post_save_commands,
    redis_url=redis_url,
    redis_password=redis_password,
)
```

## Жизненный Цикл Данных

### При Старте Сервера
1. Coordinator инициализирует `DialogTimerAlarmManager` с параметрами Redis
2. `async_restore_from_options()` вызывает:
   - `persistence.connect()` - подключение к Redis
   - `alarm_manager.async_restore_from_persistence()` - загрузка из Redis
   - Затем загрузка конфига (конфиг может переопределить Redis данные)

### Во Время Работы
1. Пользователь устанавливает/изменяет будильник
2. `async_handle_alarm_start()` или другие методы обновляют состояние
3. `_mark_updated()` вызывается:
   - Сохраняет в конфиг entry
   - Опубликовывает runtime state
   - Асинхронно (неблокирующе) сохраняет в Redis

### При Остановке
1. `async_stop()` вызывает:
   - `alarm_manager._save_alarms_to_persistence()` - финальное сохранение
   - `persistence.disconnect()` - отключение от Redis

### При Перезагрузке Сервера
1. Redis сохранил все активные будильники с TTL
2. При следующем запуске - восстановление из Redis
3. Данные конфига используются как резервный источник

## Обработка Ошибок

- **Redis недоступен:** Система падает обратно на config-only хранилище
- **Ошибка при сохранении:** Логируется warning, но система продолжает работать
- **Ошибка при загрузке:** Логируется warning, используются данные конфига

## Примеры Использования

### Восстановление после перезагрузки
```
До:  Будильник на 08:00 установлен -> Перезагрузка -> Будильник ПОТЕРЯН ❌
После: Будильник на 08:00 установлен -> Redis: сохранено -> Перезагрузка -> Будильник восстановлен ✅
```

### Сохранение во время работы
```
Пользователь: "установи будильник на 08:00"
1. DialogAlarmManager добавляет в _alarms
2. _mark_updated() вызывает сохранение
3. Config entry обновлена
4. Redis обновлена асинхронно (в фоне)
```

## Конфигурация

Параметры Redis должны быть установлены в config_flow/options:
- `redis_url`: "redis://localhost:6379/0" (или из const.py DEFAULT_REDIS_URL)
- `redis_password`: пароль (может быть пустым)

Если параметры не установлены - система продолжит работать без Redis.

## Миграция

Для существующих установок:
1. Нет требуемых действий - система автоматически перейдет на Redis сохранение
2. При первом сохранении будильников - они будут сохранены в Redis
3. Если Redis недоступен - система будет работать как раньше (config-only)

## Тестирование

### Вручную протестировать:
1. Установить будильник: "установи будильник на 10:00"
2. Проверить в Redis CLI: `redis-cli GET "timer_alarm:active_alarms:client_id"`
3. Перезагрузить сервер Home Assistant
4. Проверить, что будильник восстановился

### Проверить логи:
- "Restored X alarms from Redis persistence"
- "Saved X alarms to Redis"
- Любые ошибки при подключении к Redis
