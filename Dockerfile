# What base image we would like to use for our application. We’ll use the official Node.js image that already has all the tools and packages that we need to run a Node.js application.
FROM node:18-alpine

# The `NODE_ENV` environment variable specifies the environment in which an application is running (usually, development or production). One of the simplest things you can do to improve performance is to set `NODE_ENV` to `production`.
ENV NODE_ENV=production

# This instructs Docker to use this path as the default location for all subsequent commands. This way we do not have to type out full file paths but can use relative paths based on the working directory.
WORKDIR /app

# Before we can run `npm install`, we need to get our `package.json` and `package-lock.json` files into our images. The `COPY` command takes two parameters: `src` and `dest`. You can specify multiple `src` resources separated by a comma.
COPY ["package.json", "package-lock.json*", "./"]

# Once we have our files inside the image, we can use the `RUN` command to execute the command npm install.
RUN npm install --production

# At this point, we have an image that is based on node version 18 and we have installed our dependencies. The next thing we need to do is to add our source code into the image.
# The COPY command takes all the files located in the current directory and copies them into the image.
COPY . .

# Now, all we have to do is to tell Docker what command we want to run when our image is run inside of a container. We do this with the `CMD` command.
CMD ["node", "app.js"]