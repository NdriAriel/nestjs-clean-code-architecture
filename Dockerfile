# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:20

# Create and change to the app directory.
#npm i -g nest

WORKDIR /usr/src/app

RUN npm install -g @nestjs/cli

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . .

RUN  npm run build 

EXPOSE 3000
# Run the web service on container startup.
CMD [ "npm", "run", "start:prod" ]
