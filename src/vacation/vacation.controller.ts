import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VacationService } from './vacation.service';
import { CreateVacationDto } from '../DTOs/Vacation.dto';
import { Vacation } from '../entities/Vacation';

@Controller('vacations')
export class VacationController {
    constructor(private vacationService: VacationService) { }

    @Get()
    async getVacations(): Promise<Vacation[]> {
        return await this.vacationService.getVacations()
    }

    @Get(':userId')
    async getVacationByUserId(@Param() params): Promise<Vacation[]> {
        return await this.vacationService.getVacationByUser(params.userId);
    }

    @Post()
    async createVacation(@Body() createVacationDto: CreateVacationDto) {
        await this.vacationService.createVacation(createVacationDto);
    }


}
