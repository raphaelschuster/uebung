import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {

  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  amount: number;

  @Column({nullable: true})
  filename: string;
}



