import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3001', // Allow requests from your React frontend
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });

  await app.listen(3000);
}
bootstrap();

// entry point file
// NESTJS for build scalable and fast api.

// [Nest] 33578  - 08/05/2024, 1:22:52 PM   ERROR [PackageLoader] The "class-transformer" package is missing. Please, make sure to install this library ($ npm install class-transformer) to take advantage of ValidationPipe.