import { Router } from "express";
import { Validator } from "../../core/validation.js";
import { mongoIdDto } from "../common/dto/mongo-id-dto.js";
import MovieController from "./controller.js";

const router = new Router();

router.get("/:id", Validator.validate(mongoIdDto), MovieController.movie);

export default router;
