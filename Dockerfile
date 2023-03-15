FROM node:19

WORKDIR /app

COPY package*.json /app/
COPY tsconfig.json /app/
COPY tslint.json /app/

RUN npm install
RUN npm install -g typescript

COPY . .

RUN npm run build 

ENV FE_HOST=http://54.251.166.166
EXPOSE 9000

CMD [ "npm", "start" ]
