import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //NestFactory가 AppModule로부터 application 생성
  //AppModuled에다 GraphQL 모듈을 추가하여야 함
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();

// application 실행하기 위한 파일
