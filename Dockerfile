FROM node:22-alpine as build-stage

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Build
COPY . .
RUN npm run build

FROM nginx:1.19.3-alpine
COPY nginx.nginx /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD nginx -g 'daemon off;'