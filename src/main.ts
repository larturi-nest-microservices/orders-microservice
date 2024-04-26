import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from './config/envs';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const logger = new Logger('OrdersMain');

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.NATS,
    servers: envs.natsServers,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen();
  logger.log(`Orders Microservice running on port ${envs.port}`);
}
bootstrap();
