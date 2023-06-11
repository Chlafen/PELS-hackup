import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {Column} from "typeorm";

enum Skill {
    cuisine = 'cuisine',
    francais = 'francais',
    anglais = 'anglais',
    informatique = 'informatique',
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @Column({
        nullable:false
    })
    address:string;

    @Column({
        length:50
    })
    profession:string;

    @Column({
        length:50
    })
    workLocation:string;

    @Column({
        type: 'enum',
        enum: Skill,
        array: true,
    })
    skills: Skill[];

}
