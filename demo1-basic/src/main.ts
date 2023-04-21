import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BaseExceptionFilter } from './common/filter/base.exception.filter';
import { HttpExceptionFilter } from './common/filter/http.exception.filter';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new BaseExceptionFilter(), new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
