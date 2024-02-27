FROM node:20.11 as build

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./

RUN npm run build
# release step
FROM nginx:alpine3.18-perl as release

ENV NGINX_PORT=80

COPY --from=build /app/dist /usr/share/nginx/html/
EXPOSE 80
