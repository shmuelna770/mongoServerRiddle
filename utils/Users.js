import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { config } from 'dotenv'

config()
export function creatToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '10d' })
}

export function verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET)
}
export async function hashPassword(password) {
    return await bcrypt.hash(password, 10)
}

export function comperPass(password, hashPassword) {
    return bcrypt.compare(password, hashPassword)
}