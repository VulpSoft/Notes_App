# from fastapi import FastAPI

# def main():
#     print("Hello from backend!")
#     app = FastAPI()
    
#     @app.get("/")
#     def read_root():
#         return {"message": "Hello World"}

#     read_root()
    

# if __name__ == "__main__":
#     main()

import uvicorn
# from fastapi import FastAPI

# app = FastAPI()

async def app(scope, receive, send):
    assert scope['type'] == 'http'

    await send({
        'type': 'http.response.start',
        'status': 200,
        'headers': [
            (b'content-type', b'text/plain'),
            (b'content-length', b'13'),
        ],
    })
    await send({
        'type': 'http.response.body',
        'body': b'Hello, world!',
    })
    
if __name__ == "__main__":
    uvicorn.run("main:app", port=5000, log_level="info")