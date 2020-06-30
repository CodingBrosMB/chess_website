from typing import Optional, Dict, Any

import aiohttp


async def get(url: str, params: Optional[Dict[str, Any]] = None):
    async with aiohttp.ClientSession() as session:
        async with session.get(url, params=params) as resp:
            return await resp.json()
