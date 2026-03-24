"""Sidebar panel registration."""

from __future__ import annotations

import logging
from pathlib import Path

from homeassistant.components import panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.core import HomeAssistant

from .const import (
    DOMAIN,
    PANEL_COMPONENT_NAME,
    PANEL_ICON,
    PANEL_MODULE_PATH,
    PANEL_TITLE,
    PANEL_URL_PATH,
)

_LOGGER = logging.getLogger(__name__)
_STATIC_REGISTERED_KEY = f"{DOMAIN}_static_registered"
_PANEL_REGISTERED_KEY = f"{DOMAIN}_panel_registered"


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
        module_url=PANEL_MODULE_PATH,
        require_admin=True,
        config={"domain": DOMAIN},
    )
    hass.data[_PANEL_REGISTERED_KEY] = True
