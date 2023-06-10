import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinTable,
    OneToMany,
  } from 'typeorm';

  @Entity('legal')
  export class LegalEntity {
    @Column({
        name: 'id',
        primary: true,
        type: 'uuid',
        generated: 'uuid',
        length: 36,
        generatedType: 'STORED',
      })
      id: string;
  
    @Column({ type: 'varchar', length: 255 })
    title: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true })
    embed: string;
  
  }
  