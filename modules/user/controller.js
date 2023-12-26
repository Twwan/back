import autoBind from "auto-bind";
import SimpleService from "./service.js";

class SimpleController {
    #simpleService;
    constructor() {
        autoBind(this);
        this.#simpleService = new SimpleService();
    }

    async registration(req, res) {
        try {
            const token = await this.#simpleService.simpleServiceMethod(req.body.message);
            if (!token) return res.status(409).json({ message: "User already exists" });
            res.status(200).json(token);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "Oops, something went wrong!" });
        }
    }
    async authorization(req, res) {
        try {
            const token = await this.#simpleService.simpleServiceMethod(req.body.message);
            if (!token) return res.status(404).json({ message: "Login or Password is wrong" });
            res.status(200).json(token);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "Oops, something went wrong!" });
        }
    }
}

export default new SimpleController();
