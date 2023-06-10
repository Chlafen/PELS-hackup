import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {DataSource} from "typeorm";
import {AuthentificationMiddleware} from "./middlewares/authentification/authentification.middleware";
import { OffreModule } from './offre/offre.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [UserModule,
      OffreModule,
    TypeOrmModule.forRoot(
        {
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'pels-hackup',
          autoLoadEntities: true,
          synchronize: true,
          logging: true,
        }
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {
  }
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(AuthentificationMiddleware)
        .forRoutes(
            "user",
        )
  }
}