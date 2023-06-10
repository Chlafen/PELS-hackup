import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffreModule } from './offre/offre.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployerModule } from './employer/employer.module';
import { LegalController } from './legal/legal.controller';
import { LegalModule } from './legal/legal.module';
import { OffreEntity } from './offre/entities/offre.entity';
import { LegalService } from './legal/legal.service';
import { LegalEntity } from './legal/entities/legal.entity';
import { EmployerEntity } from './employer/entities/employer.entity';
import { ReportModule } from './report/report.module';

@Module({
  imports: [OffreModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'pels-hackup',
        entities: [OffreEntity,LegalEntity,EmployerEntity],
        synchronize: true,
      }),
      inject: [],
    }),
    EmployerModule,
    LegalModule,
    ReportModule,
  ],
  controllers: [AppController, LegalController],
  providers: [AppService],
})
export class AppModule {}
