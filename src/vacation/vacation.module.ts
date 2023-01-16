import { Module } from '@nestjs/common';
import { VacationService } from './vacation.service';
import { VacationController } from './vacation.controller';
import { Vacation } from '../entities/Vacation';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { User } from '../entities/User';

@Module({
  imports: [TypeOrmModule.forFeature([Vacation, User])],
  providers: [VacationService],
  controllers: [VacationController]
})
export class VacationModule { }
