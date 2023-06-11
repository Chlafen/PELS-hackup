import { OffreEntity } from 'src/offre/entities/offre.entity';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('employer')
export class EmployerEntity{
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
  companyName: string;

  @Column()
  Location: string;

  @Column()
  Description: string;

  @Column()
  NbEmployee: number;

  @OneToMany(() => OffreEntity, (offre) => offre.employer, { cascade: true })
  @JoinColumn()
  offre: OffreEntity;

}