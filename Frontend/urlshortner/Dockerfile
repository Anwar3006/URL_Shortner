# To reduce the image size, we use Multi-stage build


###### Stage 1: Build the React Application
# Runtime environment as Base Image
FROM node:20.7-bookworm-slim AS build

# Set up working dir inside Container
WORKDIR /url_shortner_front

# Copy package.json and package-lock.json to dir and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app file over to dir inside Container
COPY . .

# Build React app
RUN npm run build

# Start React App
CMD [ "npm", "start" ]


###### Stage 2: Copy files from /url_shortner_front/build to Nginx to server static files(Lightweight Production Image)
# Base Image
FROM nginx:latest

# Copy built files in /url_shortner_front/build from Step 1
COPY --from=build /url_shortner_front/build /usr/share/nginx/html

# Expose port 80 (Nginx's default port)
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]