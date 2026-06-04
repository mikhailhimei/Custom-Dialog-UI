"""Persistent storage for alarms using Redis."""
from __future__ import annotations

import json
import logging
from typing import Any

import redis.asyncio as redis

_LOGGER = logging.getLogger(__name__)

# Default TTL for alarm data in Redis (30 days)
DEFAULT_ALARM_TTL = 30 * 24 * 60 * 60


class AlarmPersistence:
    """Handles persistence of alarm data to Redis and file system."""
    
    def __init__(self, redis_url: str, redis_password: str | None = None):
        self.redis_url = redis_url
        self.redis_password = redis_password
        self._client: redis.Redis | None = None
    
    async def connect(self) -> None:
        """Initialize Redis connection."""
        try:
            self._client = redis.Redis.from_url(
                self.redis_url,
                decode_responses=True,
                password=self.redis_password or None,
            )
            # Test connection
            await self._client.ping()
            _LOGGER.debug("Connected to Redis for alarm persistence")
        except Exception as err:
            _LOGGER.warning("Failed to connect to Redis for alarm persistence: %s", err)
            self._client = None
    
    async def disconnect(self) -> None:
        """Close Redis connection."""
        if self._client:
            await self._client.close()
            self._client = None
    
    async def save_alarms(self, alarms: dict[str, Any], client_id: str | None = None) -> bool:
        """Save alarms to Redis.
        
        Args:
            alarms: Dictionary of alarms to save
            client_id: Optional client ID to namespace the data
            
        Returns:
            True if saved successfully, False otherwise
        """
        if not self._client:
            return False
        
        try:
            # Convert alarms to list format for easier restoration
            alarm_list = list(alarms.values())
            data = json.dumps(alarm_list, default=str)
            
            # Use client_id as part of the key if provided
            key = f"timer_alarm:active_alarms:{client_id}" if client_id else "timer_alarm:active_alarms:global"
            
            # Save with TTL
            await self._client.setex(
                key,
                DEFAULT_ALARM_TTL,
                data,
            )
            _LOGGER.debug("Saved %d alarms to Redis with key %s", len(alarm_list), key)
            return True
        except Exception as err:
            _LOGGER.warning("Failed to save alarms to Redis: %s", err)
            return False
    
    async def load_alarms(self, client_id: str | None = None) -> dict[str, Any] | None:
        """Load alarms from Redis.
        
        Args:
            client_id: Optional client ID to namespace the data
            
        Returns:
            Dictionary of alarms or None if not found
        """
        if not self._client:
            return None
        
        try:
            key = f"timer_alarm:active_alarms:{client_id}" if client_id else "timer_alarm:active_alarms:global"
            data = await self._client.get(key)
            
            if not data:
                _LOGGER.debug("No saved alarms found in Redis with key %s", key)
                return None
            
            alarm_list = json.loads(data)
            # Convert list back to dict format
            alarms = {}
            for alarm in alarm_list:
                alarm_id = alarm.get("id")
                if alarm_id:
                    alarms[alarm_id] = alarm
            
            _LOGGER.debug("Loaded %d alarms from Redis with key %s", len(alarms), key)
            return alarms if alarms else None
        except Exception as err:
            _LOGGER.warning("Failed to load alarms from Redis: %s", err)
            return None
    
    async def clear_alarms(self, client_id: str | None = None) -> bool:
        """Clear saved alarms from Redis.
        
        Args:
            client_id: Optional client ID to namespace the data
            
        Returns:
            True if cleared successfully, False otherwise
        """
        if not self._client:
            return False
        
        try:
            key = f"timer_alarm:active_alarms:{client_id}" if client_id else "timer_alarm:active_alarms:global"
            deleted = await self._client.delete(key)
            _LOGGER.debug("Cleared alarms from Redis with key %s (deleted: %s)", key, deleted)
            return True
        except Exception as err:
            _LOGGER.warning("Failed to clear alarms from Redis: %s", err)
            return False
    
    async def save_alarm_presets(self, presets: set[str], client_id: str | None = None) -> bool:
        """Save alarm presets to Redis.
        
        Args:
            presets: Set of alarm presets (time strings like "08:00")
            client_id: Optional client ID to namespace the data
            
        Returns:
            True if saved successfully, False otherwise
        """
        if not self._client or not presets:
            return False
        
        try:
            data = json.dumps(sorted(list(presets)))
            key = f"timer_alarm:presets:{client_id}" if client_id else "timer_alarm:presets:global"
            
            await self._client.setex(
                key,
                DEFAULT_ALARM_TTL,
                data,
            )
            _LOGGER.debug("Saved %d alarm presets to Redis with key %s", len(presets), key)
            return True
        except Exception as err:
            _LOGGER.warning("Failed to save alarm presets to Redis: %s", err)
            return False
    
    async def load_alarm_presets(self, client_id: str | None = None) -> set[str] | None:
        """Load alarm presets from Redis.
        
        Args:
            client_id: Optional client ID to namespace the data
            
        Returns:
            Set of alarm presets or None if not found
        """
        if not self._client:
            return None
        
        try:
            key = f"timer_alarm:presets:{client_id}" if client_id else "timer_alarm:presets:global"
            data = await self._client.get(key)
            
            if not data:
                _LOGGER.debug("No saved alarm presets found in Redis with key %s", key)
                return None
            
            presets = set(json.loads(data))
            _LOGGER.debug("Loaded %d alarm presets from Redis with key %s", len(presets), key)
            return presets if presets else None
        except Exception as err:
            _LOGGER.warning("Failed to load alarm presets from Redis: %s", err)
            return None
