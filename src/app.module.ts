import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile: process.env.NODE_EV === 'prod',
    }),
    TypeOrmModule.forRoot({
      //코드에 직접 쓰거나 ormconfig.json이라는 파일에 작성
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT, //string => int
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWD, //localhost 일경우 password필요없음
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
    }),
    //GraphQL을 루트로 설정
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    RestaurantsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
