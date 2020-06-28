import datetime as dt
from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

static_folder = Path(__file__).parent.resolve() / 'static'

app = FastAPI()

app.mount("/static", StaticFiles(directory=static_folder), name='static')

templates = Jinja2Templates(directory=static_folder / 'templates')


@app.get("/", response_class=HTMLResponse)
def get_home():
    return """
    <h1>Hello World</h1>
    """

@app.get("/template/{username}", response_class=Jinja2Templates)
def get_template(request: Request, username: str):
    return templates.TemplateResponse('base.html', {"request": request, "username": username})

@app.get("/api/date")
def get_time():
    return {"date": dt.datetime.now()}

@app.get("/api/healthcheck")
def get_health():
    return {'status': 'ok'}
