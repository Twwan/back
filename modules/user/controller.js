import autoBind from "auto-bind";
import UserService from "./service.js";

class UserController {
    #userService;
    constructor() {
        autoBind(this);
        this.#userService = new UserService();
    }

    async registration(req, res) {
        try {
            const token = await this.#userService.regUser(req.body.message);
            if (!token) return res.status(409).json({ message: "User already exists" });
            res.status(200).json(token);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "Oops, something went wrong!" });
        }
    }
    async authorization(req, res) {
        try {
            const token = await this.#userService.authUser(req.body.message);
            if (!token) return res.status(404).json({ message: "Login or Password is wrong" });
            res.status(200).json(token);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "Oops, something went wrong!" });
        }
    }
    async profile(req, res) {
        try {
            res.status(200).json(await this.#userService.getUser(req.getUser._id));
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "Oops, something went wrong!" });
        }
    }
}

export default new UserController();
