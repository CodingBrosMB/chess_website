from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from app import __project_name__
from app.api.api import api_router

app = FastAPI(title=__project_name__, docs_url="/")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)
