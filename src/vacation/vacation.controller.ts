import { Body, Controller, Get, Post } from '@nestjs/common';
import { VacationService } from './vacation.service';
import { CreateVacationDto } from '../DTOs/Vacation.dto';

@Controller('vacations')
export class VacationController {
    constructor(private vacationService: VacationService) { }

    @Get()
    async getVacations() {
        return await this.vacationService.getVacations()
    }

    @Post()
    async createVacation(@Body() createVacationDto: CreateVacationDto) {
        await this.vacationService.createVacation(createVacationDto);
    }
}
