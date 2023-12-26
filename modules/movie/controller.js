import autoBind from "auto-bind";
import MovieService from "./service.js";

class MovieController {
    #movieService;
    constructor() {
        autoBind(this);
        this.#movieService = new MovieService();
    }

    async movie(req, res) {
        try {
            res.status(200).json(await this.#movieService.getUser(req.getMovie._id));
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "Oops, something went wrong!" });
        }
    }
}

export default new MovieController();
