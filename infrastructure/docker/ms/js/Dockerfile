FROM node:14.19.0-alpine AS builder

ARG port
ARG ppath

WORKDIR /apps

COPY $ppath/package.json $ppath/yarn.lock ./
RUN yarn install
COPY $ppath/ ./

RUN yarn build

EXPOSE $port
CMD ["node", "dist"]