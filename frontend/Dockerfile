# Use Node base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json & install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of frontend code
COPY . .

# Expose frontend port
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
