import { compare } from "bcrypt";
import { creatToken, comperPass, verifyToken, hashPassword } from "./Users.js";
let cueeUser = {
    username: 'shmuel',
    password: ''
};

export async function login(req, res) {
    const { username, password } = req.body
   
    if (username !== cueeUser.username ) {
        return res.sendStatus(403);
    }
    const isPasswordcorrect = await compare(password)
    const token = creatToken({ username, role: "user" });
    res.cookie("token", token, { maxAge: 150, httpOnly: true, sameSite: true })
    return res.json({ username, role: "user" })
}
