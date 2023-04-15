FROM node:18.13.0 as build
WORKDIR /usr/app
COPY . /usr/app
RUN npm ci
RUN npm run build

FROM nginx:stable
EXPOSE 443/tcp
EXPOSE 80/tcp
#COPY ./docker/nginx/certs/* /etc/nginx/certs/
COPY ./docker/nginx/conf.d/server.conf /etc/nginx/conf.d/server.conf
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/dist /usr/share/nginx/html
