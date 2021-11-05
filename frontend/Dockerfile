#### Stage 0, Build Angular frontend
FROM node:14-alpine as build
WORKDIR /usr/src/frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

####Stage 1, Build Nginx backend
FROM nginx:alpine
COPY --from=build /usr/src/frontend/dist/ /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

