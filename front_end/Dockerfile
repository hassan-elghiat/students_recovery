FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN  rm -rf ./node_modules/.cache/.eslintcache
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# FROM node:alpine

# RUN adduser --disabled-password --gecos ''  app

# USER app

# WORKDIR /app

# COPY package.json .

# COPY --chown=app:app package.json .
# RUN npm install
# RUN  rm ./node_modules/.cache/.eslintcache
# COPY --chown=app:app . .
# USER app

# COPY . .

# EXPOSE 3000

# CMD ["npm", "run", "start"]
