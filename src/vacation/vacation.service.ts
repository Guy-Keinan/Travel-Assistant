import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVacationDto } from 'src/DTOs/Vacation.dto';
import { User } from '../entities/User';
import { Repository } from 'typeorm';
import { Vacation } from '../entities/Vacation';

@Injectable()
export class VacationService {
    constructor(
        @InjectRepository(Vacation)
        private vacationRepository: Repository<Vacation>,
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    async getVacations(): Promise<Vacation[]> {
        return await this.vacationRepository.find();
    }

    async createVacation(createVacationParams: CreateVacationDto) {
        const newVacation = this.vacationRepository.create({
            ...createVacationParams,
        })
        return await this.vacationRepository.save(newVacation);
    }

    async getVacationByUserId(userId: number): Promise<Vacation[]> {
        const vacations = await this.vacationRepository.find();
        return vacations.filter(vacation => vacation.userId == userId);
    }

}
