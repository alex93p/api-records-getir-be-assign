import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from './env/env';
import helmet from 'helmet';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

/**
 * bootstrap the application
 * configures helmet and enable cors
 * then setups the documentation in openapi format reachable in $URL/docs/openapi
 * finally starts the http server
 */
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
    .setTitle('API Getir Backend Assignment')
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
