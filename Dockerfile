FROM node:22-alpine

RUN addgroup app && adduser -S app -G app

USER app

WORKDIR /app

COPY package*.json ./

USER root

RUN chown -R app:app /app

RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]