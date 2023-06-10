import { Module } from '@nestjs/common';
import { OffreController } from './offre.controller';
import { OffreService } from './offre.service';

@Module({
  controllers: [OffreController],
  providers: [OffreService]
})
export class OffreModule {}
