import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OffreEntity } from './entities/offre.entity';
import { OffreDto } from './offre.dto';
import { OffreService } from './offre.service';

@Controller('offre')
export class OffreController {
    constructor(private readonly offreService: OffreService) {}

    @Post()
    async create(
      //TODO: create a DTO for this
      @Body() offre: { company: string; salaire: number; jobTitle: string, description: string },
    ) {
      return this.offreService.create(offre);
    }

    @Get()
    async findAll(): Promise<OffreEntity[]> {
      return await this.offreService.findAll();
    }

    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() offreData: Partial<OffreEntity>,
    ): Promise<OffreEntity> {
      return await this.offreService.update(id, offreData);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
      await this.offreService.delete(id);
    }
}
