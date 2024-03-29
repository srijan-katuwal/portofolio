FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install
CMD ["yarn", "dev", "--host"]
EXPOSE 5173