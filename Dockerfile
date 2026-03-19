FROM nginx:alpine
ARG CACHEBUST=1
COPY www /usr/share/nginx/html
