"""Sidebar panel registration."""

from __future__ import annotations

import logging
import json
from pathlib import Path

from homeassistant.components import panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.core import HomeAssistant

from .const import (
    DOMAIN,
    PANEL_COMPONENT_NAME,
    PANEL_ICON,
    PANEL_MODULE_BASENAME,
    PANEL_MODULE_PATH,
    PANEL_TITLE,
    PANEL_URL_PATH,
)

_LOGGER = logging.getLogger(__name__)
_STATIC_REGISTERED_KEY = f"{DOMAIN}_static_registered"
_PANEL_REGISTERED_KEY = f"{DOMAIN}_panel_registered"


def _module_url_with_version() -> str:
    """Return module URL with version query to avoid stale frontend cache."""
    manifest_path = Path(__file__).parent / "manifest.json"
    panel_module_path = Path(__file__).parent / "static" / PANEL_MODULE_BASENAME

    try:
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
        version = str(manifest.get("version", "")).strip()
    except Exception:
        _LOGGER.exception("Failed to read manifest version for dialog_custom_ui panel")
        version = ""

    build_marker = ""
    try:
        if panel_module_path.exists():
            build_marker = str(panel_module_path.stat().st_mtime_ns)
    except Exception:
        _LOGGER.debug("Failed to read panel module mtime for cache buster", exc_info=True)

    if not version and not build_marker:
        return PANEL_MODULE_PATH

    version_value = ".".join(part for part in (version, build_marker) if part)
    return f"/dialog_custom_ui_static/{PANEL_MODULE_BASENAME}?v={version_value}"


async def async_register_panel(hass: HomeAssistant) -> None:
    """Register static assets and sidebar panel."""
    static_dir = Path(__file__).parent / "static"

    if not hass.data.get(_STATIC_REGISTERED_KEY):
        try:
            await hass.http.async_register_static_paths(
                [StaticPathConfig("/dialog_custom_ui_static", str(static_dir), cache_headers=False)]
            )
        except Exception:
            _LOGGER.exception("Failed to register static path for dialog_custom_ui")
            raise
        hass.data[_STATIC_REGISTERED_KEY] = True

    if hass.data.get(_PANEL_REGISTERED_KEY):
        return

    await panel_custom.async_register_panel(
        hass,
        webcomponent_name=PANEL_COMPONENT_NAME,
        frontend_url_path=PANEL_URL_PATH,
        sidebar_title=PANEL_TITLE,
        sidebar_icon=PANEL_ICON,
        module_url=_module_url_with_version(),
        require_admin=False,
        config={"domain": DOMAIN},
    )
    hass.data[_PANEL_REGISTERED_KEY] = True
