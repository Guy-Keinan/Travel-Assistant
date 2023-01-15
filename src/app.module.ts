import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User';
import { UsersModule } from './users/users.module';
import { VacationModule } from './vacation/vacation.module';
import { Vacation } from './entities/Vacation';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'vacations',
      entities: [User, Vacation ],
      synchronize: true,
    }),
    UsersModule,
    VacationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
