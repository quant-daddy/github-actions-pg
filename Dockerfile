FROM node:16.13.1-alpine
RUN apk update && apk upgrade
RUN apk --no-cache add curl
RUN apk add --no-cache --virtual build-dependencies build-base
RUN apk add --no-cache tini

LABEL image.authors=surajkeshri@gmail.com
LABEL kollate.image.title="Github Actions Test"
LABEL kollate.image.licenses=UNLICENSED

WORKDIR /app

ENTRYPOINT ["/sbin/tini", "--"]

COPY package*.json ./

RUN npm ci
RUN rm -f .npmrc
# disable npm update check
ENV NO_UPDATE_NOTIFIER true

ENV TERM=xterm-256color \
    NODE_ENV=production \
    PORT=3000

COPY . .
RUN npm run build
CMD ["node", "build/index.js"]

