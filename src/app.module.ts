import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { Restaurant } from './restaurants/entities/restaurant.entity';
import { RestaurantsModule } from './restaurants/restaurants.module';

console.log(Joi);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile: process.env.NODE_EV === 'prod',
      //필요한 파일들이 모두 있지 않으면 실행되지 않도록 하기 위한 joi
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'prod').required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot({
      //코드에 직접 쓰거나 ormconfig.json이라는 파일에 작성
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT, //string => int
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWD, //localhost 일경우 password필요없음
      database: process.env.DB_NAME,
      synchronize: process.env.NODE_EV !== 'prod', //production에서는 실제 데이터를 가지고 있기 때문에 prod일 경우 초기화 x
      logging: true,
      entities: [Restaurant],
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
