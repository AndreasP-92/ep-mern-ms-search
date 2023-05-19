# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application files
COPY . .

# Expose port 3000 (default for Express)
EXPOSE 3000

# Start the Express server
CMD ["npm", "start"]