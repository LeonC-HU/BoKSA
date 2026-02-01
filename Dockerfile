# syntax=docker/dockerfile:1

ARG NODE_VERSION=25.1.0

FROM node:${NODE_VERSION}-alpine

# Use development environment for dev server
ENV NODE_ENV=development

WORKDIR /usr/src/app

# Download dependencies as a separate step to take advantage of Docker's caching.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

# Copy the rest of the source files into the image.
COPY . .

# Change ownership of the app directory to node user
RUN chown -R node:node /usr/src/app

# Run the application as a non-root user.
USER node

# Expose the port that the application listens on.
EXPOSE 5173

# Run the application using exec form (JSON array)
CMD ["npm", "run", "dev"]
