FROM node:20 AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN ls -la /app && yarn install

COPY . .

RUN yarn build

EXPOSE 5173

CMD ["yarn", "dev"]
