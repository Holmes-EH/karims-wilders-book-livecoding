import { DataSource } from "typeorm";
import { User } from "./entity/user";
import { Grade } from "./entity/grade";
import { Skill } from "./entity/skill";
import { Wilder } from "./entity/wilder";

const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "example",
  database: "postgres",
  synchronize: true,
  entities: [User, Wilder, Skill, Grade],
});

export default dataSource;
