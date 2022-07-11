FROM node:16.13.2-alpine3.15

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD node index.js --bind 0.0.0.0:$PORT