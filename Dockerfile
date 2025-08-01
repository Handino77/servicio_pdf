FROM node:18-slim

RUN apt-get update && apt-get install -y     wget     ca-certificates     fonts-liberation     libappindicator3-1     libasound2     libatk-bridge2.0-0     libatk1.0-0     libcups2     libdbus-1-3     libgdk-pixbuf2.0-0     libnspr4     libnss3     libx11-xcb1     libxcomposite1     libxdamage1     libxrandr2     xdg-utils     libgbm1     libgtk-3-0     --no-install-recommends && apt-get clean

WORKDIR /app
COPY . .
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]