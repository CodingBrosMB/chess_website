from fastapi import APIRouter

from app.api.endpoints import base, chess

api_router = APIRouter()
api_router.include_router(base.router, tags=["base"])
api_router.include_router(chess.router, prefix="/chess", tags=["chess"])
