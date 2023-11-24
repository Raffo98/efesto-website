FROM node:18-alpine3.18

# Set the working directory inside the docker volume to /usr/app
WORKDIR /usr/app

# Copy the package.json file to /usr/app, and run install
COPY package.json .
RUN npm install

# Copy all the files from the project's root to /usr/app
COPY . .

EXPOSE 8080
CMD [ "npm", "run", "serve" ]