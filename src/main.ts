import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from './env/env';
import helmet from 'helmet';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

// todo: comments
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    helmet({
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'default-src': ["'self'"],
        },
      },
    }),
  );
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Amministro.io Core API')
    .setVersion(env.VERSION)
    .addServer(env.SERVER.URL)
    .build();
  const documentOptions: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) =>
      [controllerKey, methodKey].join('_'),
  };
  const document = SwaggerModule.createDocument(app, config, documentOptions);
  SwaggerModule.setup('docs/openapi', app, document);

  await app.listen(env.SERVER.PORT);
}
bootstrap();
