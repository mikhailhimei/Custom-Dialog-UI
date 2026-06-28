from custom_components.dialog_custom_ui.timer_alarm.timer_alarm_manager_wrapper import _build_voice_request_payload


def test_build_timer_voice_request_payload_from_timer_start():
    payload = {"parent_type": "timer_start", "children_direct_type": "00:01:30"}

    result = _build_voice_request_payload(payload)

    assert result is not None
    assert result["action_type"] == "create_timer"
    assert result["timer_time"] == "00:01:30"


def test_build_alarm_voice_request_payload_from_alarm_start():
    payload = {"parent_type": "alarm_start", "children_direct_type": "08:30"}

    result = _build_voice_request_payload(payload)

    assert result is not None
    assert result["action_type"] == "create_alarm"
    assert result["time"] == "08:30"
