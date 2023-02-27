import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

import { Field, ObjectType } from "type-graphql";
import { Grade } from "./grade";

@ObjectType()
@Entity()
export class Skill {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @OneToMany(() => Grade, (grade) => grade.skill)
  public grades: Grade[];
}
