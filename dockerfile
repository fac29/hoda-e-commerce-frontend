# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the entire project files to the container
COPY . .

# Specify the command to run your build
CMD ["npm", "run", "build"]
