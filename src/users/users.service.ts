import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User';
import { CreateUserDto } from '../DTOs/User.dto';
 
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    async getUsers() {
        return await this.userRepository.find();
    }

    async createUser(createUserParams: CreateUserDto) {
        const newUser = this.userRepository.create({
            ...createUserParams,
            createdAt: new Date(),
        })
        return await this.userRepository.save(newUser);
    }
}
