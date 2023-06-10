import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {Repository} from "typeorm";
import {User} from "./entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import * as bcrypt from 'bcrypt';
import {LoginCredentialDto} from "./dto/login-credential.dto";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>,
      private jwtService: JwtService
  ) {
  }

  async create(createUserDto: CreateUserDto) {
    const user = new User();
    user.phoneNumber= createUserDto.phoneNumber;
    user.salt = bcrypt.genSaltSync();
    user.password = await bcrypt.hash(createUserDto.password, user.salt);
    return this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({ where: [{ id: id }] });
    if(!user) throw new NotFoundException("User not found.");
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: [{ id: id }] });
    if(updateUserDto.password){
      user.salt = bcrypt.genSaltSync();
      user.password = await bcrypt.hash(updateUserDto.password, user.salt);
    }
    user.phoneNumber = updateUserDto.phoneNumber ?? user.phoneNumber;
    return this.userRepository.save(user);}

  async login(credentials : LoginCredentialDto):Promise<Partial<User>>{

      const {phoneNumber,password}=credentials;
      const user=await this.userRepository.createQueryBuilder("user")
          .where("user.phoneNumber = :phoneNumber",{
              phoneNumber
          })
          .getOne();
      if(!user)
          throw new NotFoundException("Numero de telephone ou mot de passe errone")
      const hashPassword = await bcrypt.hash(password,user.salt);
      if(hashPassword===user.password){
          return {
              phoneNumber : user.phoneNumber,
          }
      }
      else{
          throw new NotFoundException("Numero de telephone ou mot de passe errone")
      }

  }

  // async loginV2(credentials : LoginCredentialDto){
  //
  //     //recuperer le login et le mdp: on peut se logger via le username ou email
  //     const {username,password}=credentials;
  //     //verifier s il y a un user avec ce login ou email
  //     const user=await this.userRepository.createQueryBuilder("user")
  //         .where("user.username = :username or user.email = :username",{
  //             username
  //         })
  //         .getOne();
  //     //si non je declenche une erreur
  //     if(!user)
  //         throw new NotFoundException("username ou password errone")
  //     //si oui je verifie que le mdp est correct
  //     const hashedPassword = await bcrypt.hash(password,user.salt);
  //     if(hashedPassword===user.password){
  //         const payload = {
  //             username,
  //             email : user.email
  //         };
  //         const jwt =  this.jwtService.sign(payload);
  //         return {
  //             "access_token" : jwt
  //         };
  //
  //     }
  //     // si mdp incorrect je declenche une erreur
  //     else{
  //         throw new NotFoundException("username ou password errone")
  //     }
  //
  // }
}