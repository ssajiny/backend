import dotenv from "dotenv";

import { createConnection } from "mysql2";

dotenv.config(); // .env 파일에서 환경 변수를 로드

const connection = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

export default connection;
