import dotenv from "dotenv";
import jwt from 'jsonwebtoken';

dotenv.config(); // .env 파일에서 환경 변수를 로드
const JWT_SECRET = process.env.JWT_SECRET;

export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // 'Bearer TOKEN' 형식에서 TOKEN만 추출

  if (token == null) return res.status(401).json({ message: "Token missing." });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Forbidden." });

    req.user = user; // req.user에 디코딩된 사용자 정보를 저장
    next(); // 다음 미들웨어로 이동
  });
}
