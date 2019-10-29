/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  addSwaggerDocs(app);
  const port = process.env.port || 3333;
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

function addSwaggerDocs(app: INestApplication): void {
  const options = new DocumentBuilder()
  .setTitle('Star Wars API')
  .setDescription('A NestJS Proxy API for SWAPI')
  .setVersion('V1.0')
  .setSchemes('http')
  .setBasePath('api')
  // .addBearerAuth()
  .build();

  const swaggerJson = SwaggerModule.createDocument(app, options);
  app.use('/api/swagger.json', (_: any, res: any) => res.send(swaggerJson));
  SwaggerModule.setup('/api/docs', app, swaggerJson);
}

bootstrap();
