from fastapi import FastAPI, status
from fastapi.responses import JSONResponse

app = FastAPI()
db = dict()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/db")
async def get_db():
    return JSONResponse(status_code=status.HTTP_200_OK)

@app.post("/db")
async def write_db(input_db: dict):
    db = input_db
    return 