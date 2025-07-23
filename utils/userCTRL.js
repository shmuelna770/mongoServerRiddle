import { compare } from "bcrypt";
import { creatToken, comperPass, verifyToken, hashPassword } from "./Users.js";
let cueeUser = {};

export function login(req, res) {
    const { username, password } = req.body
    if (username !== cueeUser || !comperPass(password, cueeUser.hashPassword)) {
        return res.sendStatus(403);
    }
    const token = creatToken({ username, role: "user" });
    res.cookie("token", token, { maxAge: 150, httpOnly: true, sameSite: true })
    return res.json({username,role:"user"})
}
