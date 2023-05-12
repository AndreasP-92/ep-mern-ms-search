FROM node:alpine
WORKDIR /search-microservice
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install
RUN npm install -g nodemon
CMD ["npm", "start"]