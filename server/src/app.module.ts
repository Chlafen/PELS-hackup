import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {DataSource} from "typeorm";
import {AuthentificationMiddleware} from "./middlewares/authentification/authentification.middleware";

@Module({
  imports: [ UserModule],
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