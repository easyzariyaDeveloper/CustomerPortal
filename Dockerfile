FROM node:alpine

WORKDIR /usr/src/easyzariya-docker

COPY package*.json ./
ADD package.json /usr/src/easyzariya-docker/package.json

RUN npm install
COPY . .
RUN npm run build-together
ENTRYPOINT ["node","server.js"]
#ENTRYPOINT ["npm","start"]



#sample dockerfile
# FROM node:13.12.0-alpine as build
# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm ci --silent
# RUN npm install react-scripts@3.4.1 -g --silent
# COPY . ./
# RUN npm run build




# to get rid of python2 not found error
# RUN apk --no-cache --virtual build-dependencies add \
#     python \
#     make \
#     g++ \
#     && npm install \
#     && apk del build-dependencies

