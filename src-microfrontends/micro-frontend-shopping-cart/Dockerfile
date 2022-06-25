# Create image based on the official Node 10 image from dockerhub
FROM node:latest

# Create a directory where our app will be placed
RUN mkdir -p /docker/app

# Change directory so that our commands run inside this new directory
WORKDIR /docker/app

# Copy dependency definitions
COPY package*.json /docker/app/

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /docker/app/

# Expose the port the app runs in
EXPOSE 61400

# Serve the app
CMD ["npm", "start"]