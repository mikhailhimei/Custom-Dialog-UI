# Dialog Custom UI for Home Assistant

Кастомная интеграция добавляет отдельную боковую вкладку `Dialog`, где можно:

- указать `Base URL` сервиса, который опрашивается каждые 1 секунду;
- указать `client_id` вручную;
- добавить любое количество сценариев по строгому `type` и опционально строгому `parent_type`;
- выбрать `script.*` из Home Assistant для запуска;
- передать весь входящий payload в скрипт через переменные.

## Установка

1. Скопировать папку `custom_components/dialog_custom_ui` в каталог `config/custom_components/` Home Assistant.
2. Перезапустить Home Assistant.
3. Открыть `Настройки -> Устройства и службы -> Добавить интеграцию`.
4. Найти `Dialog Custom UI` и добавить интеграцию.
5. После этого в боковом меню появится вкладка `Dialog`.

## Как работает опрос

Интеграция делает POST-запрос раз в 1 секунду на:

```text
{base_url}/api/dialog/command-check
```

с JSON body:

```json
{
  "clientId": "user-123"
}
```

Пример:

```bash
curl -X POST http://localhost:8000/api/dialog/command-check \
  -H "Content-Type: application/json" \
  -d '{"clientId":"user-123"}'
```

Ожидаемый ответ:

- `204 No Content`, если команды нет;
- `200 OK` + JSON, если команда есть.

Пример payload:

```json
{
  "type": "some_subcommand",
  "parent_type": "weather_metno",
  "value": {"commands": "москва"},
  "client_id": "user-123",
  "device_id": "speaker_1"
}
```

## Логика сценариев

Сценарии проверяются сверху вниз. Выполняется первый сценарий, у которого:

- `scenario.type == payload.type`
- `scenario.parent_type == payload.parent_type`, если `parent_type` задан в сценарии

Если `parent_type` у сценария пустой, проверяется только `type`.

## Что получает скрипт

Выбранный `script.*` запускается через сервис `script.turn_on` и получает переменные:

- `dialog_payload`
- `dialog_type`
- `dialog_parent_type`
- `dialog_value`
- `dialog_client_id`
- `dialog_device_id`
