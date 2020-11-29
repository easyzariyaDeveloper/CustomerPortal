FROM node:alpine

WORKDIR /usr/src/ezautocare-customer

COPY package*.json ./
ADD package.json /usr/src/ezautocare-customer/package.json

RUN npm install
COPY . .
RUN npm run build-together
ENTRYPOINT ["node","server.js"]
#ENTRYPOINT ["npm","start"]