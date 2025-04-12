# Base image có Node.js
FROM node:20-alpine

# Tạo thư mục app
WORKDIR /app

# Copy toàn bộ source code
COPY . .

# Cài đặt các gói
RUN npm install -g @angular/cli \
    && npm install

# EXPOSE cổng Angular dev server
EXPOSE 4200

# Chạy ứng dụng bằng ng serve
CMD ["ng", "serve", "--host", "0.0.0.0"]
