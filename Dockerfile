# Step 1: Build the React application with Vite
FROM node:14 AS build

# Set the working directory in Docker
WORKDIR /app

# Copy the dependencies file to the working directory
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the content of the local src directory and .env to the working directory
COPY . .

# Build the application using Vite
RUN npm run build

# Step 2: Serve the React application from Nginx
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run on container start
CMD ["nginx", "-g", "daemon off;"]
