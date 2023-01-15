import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVacationDto } from 'src/DTOs/Vacation.dto';
import { Repository } from 'typeorm';
import { Vacation } from '../entities/Vacation';

@Injectable()
export class VacationService {
    constructor(
        @InjectRepository(Vacation)
        private vacationRepository: Repository<Vacation>
    ) { }

    async getVacations() {
        return await this.vacationRepository.find();
    }

    async createVacation(createVacationParams: CreateVacationDto) {
        const newVacation = this.vacationRepository.create({
            ...createVacationParams,
        })
        return await this.vacationRepository.save(newVacation);
    }

}
