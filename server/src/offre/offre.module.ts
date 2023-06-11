import { Module } from '@nestjs/common';
import { OffreController } from './offre.controller';
import { OffreService } from './offre.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OffreEntity } from './entities/offre.entity';
import { EmployerEntity } from 'src/employer/entities/employer.entity';
import { LegalEntity } from 'src/legal/entities/legal.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OffreEntity, EmployerEntity, LegalEntity]),
  ],
  controllers: [OffreController],
  providers: [OffreService]
})
export class OffreModule {}

