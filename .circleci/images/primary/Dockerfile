FROM node:8-alpine

RUN mkdir -p /src/app

RUN npm install pm2 -g

WORKDIR ./4-dockerize

COPY ./package.json /src/package.json

RUN yarn install

COPY ./koa-add-controller.js /src/app/app.js

EXPOSE 3000

CMD ['pm2', 'start', '/src/app/app.js']
