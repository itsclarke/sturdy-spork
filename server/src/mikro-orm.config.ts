import path from "path";
import { MikroORM } from "@mikro-orm/core";
import { __PROD__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  type: "postgresql",
  dbName: "untitled",
  user: "postgres",
  password: "postgres",
  debug: !__PROD__,
} as Parameters<typeof MikroORM.init>[0];
