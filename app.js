import express, { json } from "express";
import cors from "cors";

import { authenticateToken } from "./src/middlewares/authMiddleware.js";
import loginRoutes from "./src/routes/loginRoutes.js";
import signupRoutes from "./src/routes/signupRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import "./src/config/db.js";

const app = express();

// CORS 설정
app.use(
  cors({
    origin: "http://localhost:3000", // 클라이언트의 URL
    methods: "GET,POST,PUT,DELETE", // 허용할 HTTP 메서드
    credentials: true, // 쿠키 및 인증 헤더 허용
  })
);

app.use(json()); // JSON 요청 본문을 파싱하는 미들웨어
app.use("/login", loginRoutes); // 로그인 미들웨어
app.use("/signup", signupRoutes); // 회원가입 미들웨어

// 라우터 미들웨어
app.use("/users", authenticateToken, userRoutes);

app.listen(7777, () => {
  console.log("Server running on http://localhost:7777");
});
