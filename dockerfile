FROM node:alpine
COPY . /easyzariya-docker
WORKDIR /easyzariya-docker
RUN npm install
RUN npm run build
ENTRYPOINT ["node","server.js"]