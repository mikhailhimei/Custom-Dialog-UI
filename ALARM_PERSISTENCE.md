# Персистентность будильников через Home Assistant storage

## Что изменилось

Состояние будильников больше не хранится в Redis. Интеграция использует штатный механизм Home Assistant `homeassistant.helpers.storage.Store`, поэтому активные будильники и пресеты сохраняются в `.storage` Home Assistant вместе с остальными данными интеграций.

## Задействованные компоненты

### 1. `AlarmPersistence` (`custom_components/dialog_custom_ui/timer_alarm/alarm_persistence.py`)

Класс отвечает за сохранение и восстановление runtime-состояния будильников:

```python
persistence = AlarmPersistence(hass, storage_key_suffix=entry.entry_id)
```

Сохраняемые данные:

- `alarms` — активные/отключённые будильники менеджера;
- `presets` — нормализованные строки времени будильников, например `"08:00"`.

Ключ хранилища формируется на базе entry id:

```text
dialog_custom_ui.timer_alarm.<entry_id>
```

### 2. `DialogAlarmManager`

- `async_restore_from_persistence()` восстанавливает пресеты и будильники из Home Assistant storage при старте координатора.
- `_save_alarms_to_persistence()` сохраняет текущее состояние после изменений.
- Перед сохранением и публикацией пресеты нормализуются, поэтому `None` и пустые строки не могут сломать сортировку.

### 3. `DialogTimerAlarmManager`

- Инициализирует `AlarmPersistence` через `hass` и `entry.entry_id`.
- При старте сначала читает Home Assistant storage, затем использует старые данные из options только как fallback/миграционный источник.
- После каждого изменения запускает неблокирующее сохранение в Home Assistant storage.

### 4. `DialogCommandCoordinator`

Координатор больше не передаёт Redis URL/пароль для персистентности будильников. Для будильников достаточно `hass` и `entry.entry_id`.

## Поток работы

### При старте интеграции

1. `DialogCommandCoordinator` создаёт `DialogTimerAlarmManager`.
2. `DialogTimerAlarmManager.async_restore_from_options()` загружает storage через `AlarmPersistence.connect()`.
3. `DialogAlarmManager.async_restore_from_persistence()` восстанавливает будильники и пресеты.
4. Если в storage ещё нет будильников, старые элементы из options применяются как fallback для миграции.
5. Для активных будильников запускается tick loop.

### При изменении будильника

1. Пользователь/команда создаёт, удаляет или обновляет будильник.
2. `DialogAlarmManager` меняет in-memory состояние.
3. `_mark_updated()` публикует runtime state и сохраняет данные в options для совместимости.
4. Параллельно запускается сохранение в Home Assistant storage.

### При остановке интеграции

1. Менеджер сохраняет текущее состояние в Home Assistant storage.
2. Tick loop останавливается.
3. Внешних подключений закрывать не нужно.

## Почему это лучше Redis для будильников

- Не нужен отдельный Redis-сервер.
- Нет зависимости от сетевого подключения и TTL.
- Данные живут там же, где Home Assistant хранит состояние интеграций.
- Перезапуск Home Assistant не теряет активные будильники.
- Старые битые пресеты (`None`, пустые строки) автоматически отфильтровываются.

## Совместимость

Redis-настройки могут оставаться в интеграции для других сценариев/ответов, где явно используется `answerType = redis`, но персистентность таймеров и будильников от Redis больше не зависит.
