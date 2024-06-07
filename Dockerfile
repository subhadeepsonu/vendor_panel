FROM node:20

WORKDIR /src

COPY package.json .
COPY package-lock.json .

RUN npm i

COPY ./prisma 

RUN npx prisma generate

COPY .  .  

EXPOSE 3000 

CMD npm run dev