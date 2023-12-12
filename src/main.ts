import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const microservice = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
   transport: Transport.RMQ,
   options: {
    urls: ['amqp://localhost:5672'],
    queue: 'check_tokens',
    queueOptions: {
      durable: false
    },
  },
  });

  await microservice.listen();

  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('Your API Title')
  .setDescription('Your API Description')
  .setVersion('1.0')
  .build();

// Создаем документ Swagger на основе настроек
const document = SwaggerModule.createDocument(app, options);

// Добавляем Swagger UI в ваше приложение
SwaggerModule.setup('api', app, document);
  await app.listen(3002);
}
bootstrap();
