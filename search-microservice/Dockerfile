# FROM node:alpine
# WORKDIR /app
# COPY package.json ./
# COPY package-lock.json ./
# COPY ./ ./
# RUN npm install
# RUN npm install -g nodemon
# EXPOSE 3002
# CMD ["npm", "start"]

# Stage 1: Build the Express server
FROM node:14-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g nodemon

COPY . .

# Build the application
RUN npm start

# Production-ready image
FROM nginx:alpine

# Copy built files from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port your Express server is listening on
EXPOSE 3002

# Start Nginx and run it in the foreground
CMD ["nginx", "-g", "daemon off;"]