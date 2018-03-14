FROM node:latest AS vuestatic

RUN mkdir -p /vuejs/src
ADD ./ /vuejs

WORKDIR /vuejs
RUN npm install

RUN npm run build

FROM alpine:3.6
RUN apk add --update nginx && rm -rf /var/cache/apk/*

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=vuestatic /vuejs/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]