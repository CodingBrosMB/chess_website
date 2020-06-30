from fastapi import APIRouter

from app import __version__, __project_name__, __authors__

router = APIRouter()

@router.get("/healthcheck")
def perform_healthcheck():
    return {'status': 'ok'}

@router.get("/info")
def get_info():
    return {
        'name': __project_name__,
        'version': __version__,
        'authors': ', '.join(__authors__)
    }
