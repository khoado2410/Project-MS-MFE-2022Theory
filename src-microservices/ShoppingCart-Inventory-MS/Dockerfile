FROM node:14.17.0

EXPOSE 4000

WORKDIR /app

RUN npm i npm@latest -g

COPY package.json package-lock.json ./

CMD ["npm", "run", "dev"]