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

@Entity('report')
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
  Description: string;

  @Column()
  video: string;

  @ManyToOne(() => EmployerEntity, (employer) => employer.offre)
  @JoinColumn()
  employer: EmployerEntity;
}