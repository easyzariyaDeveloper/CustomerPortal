FROM node:alpine

WORKDIR /usr/src/easyzariya-docker

COPY package*.json ./
ADD package.json /usr/src/easyzariya-docker/package.json

RUN npm install
COPY . .
RUN npm run build-together
ENTRYPOINT ["node","server.js"]
#ENTRYPOINT ["npm","start"]