import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OffreEntity } from './entities/offre.entity';
import { OffreDto } from './offre.dto';

@Injectable()
export class OffreService {
    constructor(
        @InjectRepository(OffreEntity)
        private readonly offreRepository: Repository<OffreEntity>
    ){}
    async create(offre: OffreDto) {
        const newOffre = new OffreEntity();
        Object.assign(newOffre, offre);
        return this.offreRepository.save(newOffre);
      }

    async findAll(): Promise<OffreEntity[]> {
        return await this.offreRepository.find();
      }
    
      async find(options?: any): Promise<OffreEntity[]> {
        return await this.offreRepository.find(options);
      }
    
      async update(
        id: string,
        nominationData: Partial<OffreEntity>,
      ): Promise<OffreEntity> {
        await this.offreRepository.update(id, nominationData);
        return await this.offreRepository.findOneBy({ id: id });
      }
    
      async delete(id: number): Promise<void> {
        await this.offreRepository.delete(id);
      }
}
