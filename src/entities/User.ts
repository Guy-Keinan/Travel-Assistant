import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Vacation } from './Vacation';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  createdAt: Date;
}
