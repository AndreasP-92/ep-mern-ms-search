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

# Stage 2: Setup Nginx as a reverse proxy
FROM nginx:latest

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d

# Copy the built assets from the Express server
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port your Express server is listening on
EXPOSE 3002

# Start Nginx and run it in the foreground
CMD ["nginx", "-g", "daemon off;"]