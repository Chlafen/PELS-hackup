import { TimestampEntites } from 'src/Generiques/Timestamp.entities';
import { EmployerEntity } from 'src/employer/entities/employer.entity';

import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  ManyToOne,
  JoinColumn,
  Double,
} from 'typeorm';

@Entity('offre')
export class OffreEntity extends TimestampEntites {
  @Column({
    name: 'id',
    primary: true,
    type: 'uuid',
    generated: 'uuid',
    length: 36,
    generatedType: 'STORED',
  })
  id: string;

  @Column()
  company: string;

  @Column()
  JobTitle: string;

  @Column()
  Description: string;

  @Column()
  salaire: number;

  @ManyToOne(() => EmployerEntity, (employer) => employer.offre)
  @JoinColumn()
  employer: EmployerEntity;
}