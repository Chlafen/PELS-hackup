import { Module } from '@nestjs/common';
import { LegalService } from './legal.service';

@Module({
  providers: [LegalService]
})
export class LegalModule {}
