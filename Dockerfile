FROM node:18.3.0
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
CMD [ "npm", "run", "histoire:dev" ]