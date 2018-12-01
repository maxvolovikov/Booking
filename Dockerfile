FROM node:10
WORKDIR /usr/app
ENV CON_STRING="postgresql:postrgess:@:5432/airjld"
COPY . .
RUN npm install
EXPOSE 3002
CMD ["npm", "start"]