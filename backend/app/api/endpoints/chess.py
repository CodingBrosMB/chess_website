from fastapi import APIRouter

from app.api.utils import get

router = APIRouter()


@router.get("/player/{playername}")
async def get_player(playername: str):
    return await get(f'https://api.chess.com/pub/player/{playername}')


@router.get("/streamers")
async def get_streamers():
    return await get('https://api.chess.com/pub/streamers')

@router.get("/leaderboard")
async def get_leaderboard():
    return await get('https://api.chess.com/pub/leaderboards')
