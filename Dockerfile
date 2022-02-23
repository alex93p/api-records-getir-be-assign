FROM node:16-slim

RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN yarn install

# ENV
ENV NODE_ENV production
ENV SERVER_PORT 8080

RUN yarn run build

ENV NODE_OPTIONS \
  --trace-warnings \
  --max-old-space-size=448

EXPOSE 8080

CMD [ "node", "dist/src/main" ]
