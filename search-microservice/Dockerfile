FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install
RUN npm install -g nodemon
EXPOSE 3002
CMD ["npm", "start"]