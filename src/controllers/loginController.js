import jwt from 'jsonwebtoken';

import { login } from "../models/loginModel.js";

const JWT_SECRET = process.env.JWT_SECRET;

export function handleLogin(req, res) {
    const { id, pw } = req.body;

    login({ id, pw }, (err, user) => {
        if (err) {
            res.status(500).json({ message: "Login failed. Please try again later." });
        } else {
            if (user == null) {
                res.status(401).json({ message: "Invalid credentials." });
            } else {
                // JWT 생성
                console.log("User login successful.", user);
                const token = jwt.sign(
                    {
                        accnt_sq: user.accnt_sq,
                        accnt_id: user.accnt_id,
                        sys_role_ccd: user.sys_role_ccd
                    }, 
                    JWT_SECRET, 
                    { expiresIn: '1h' }
                );
                res.json({ 
                    message: "Login successful.", 
                    token,
                    sys_role_ccd: user.sys_role_ccd
                 });
            }
        }
    });
}