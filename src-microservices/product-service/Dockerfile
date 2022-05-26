# FROM node:14.17.0

# # create work directory
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# # copy package.json
# COPY package.json /usr/src/app
# RUN npm install

# # copy source code
# COPY . /usr/src/app

# EXPOSE 7500

# CMD ["npm", "run", "dev"]

# FROM node:14.17.0

# EXPOSE 7000

# WORKDIR /app

# RUN npm i npm@latest -g

# COPY package.json package-lock.json ./

# CMD ["npm", "run", "dev"]

FROM node:14.17.0

WORKDIR /product-service
COPY package.json .
RUN npm install
COPY . .
CMD npm run dev
