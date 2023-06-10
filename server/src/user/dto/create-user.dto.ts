import {Column} from "typeorm";
enum Skill {
    cuisine = 'cuisine',
    francais = 'francais',
    anglais = 'anglais',
    informatique = 'informatique',
}
export class CreateUserDto {
    @Column({
        length:50,
        nullable:false
    })
    name:string;

    @Column({
        length:50,
        nullable:false
    })
    familyName:string;

    @Column({
        length:8,
        nullable:false
    })
    phoneNumber: number;

    @Column({
        nullable:false
    })
    address:string;

    @Column({
        length:8,
        nullable:false
    })
    password:string;

    @Column()
    salt:string;

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

    @Column({length:50,        nullable:false
    })
    salary:number
}
