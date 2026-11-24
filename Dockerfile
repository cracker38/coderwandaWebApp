
FROM node:22-alpine

WORKDIR /app

COPY package.json ./
COPY server.js ./

COPY index.html ./
COPY register.html ./
COPY dashboard.html ./
COPY login.html ./

EXPOSE 3000

CMD ["npm", "start"]
