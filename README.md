# Commands to run:

## In the backend
docker build -t backend-image . <br>
docker run -d -p 1337:1337 --env-file .env --name backend-container backend-image

## In the frontend
docker build -t frontend-image . <br>
docker run -d -p 3000:3000 --name frontend-container frontend-image
