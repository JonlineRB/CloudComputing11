FROM node:boron
RUN mkdir -p /usr/src/cloudcomputinggroup11
WORKDIR /usr/src/cloudcomputinggroup11
COPY package.json /usr/src/cloudcomputinggroup11
RUN npm install
COPY . /usr/src/cloudcomputinggroup11
EXPOSE 3000
CMD ["node","server.js"]
