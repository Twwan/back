import { Router } from "express";
import { CONTEXT, Validator } from "../../core/validation.js";
import { mongoIdDto } from "../common/dto/mongo-id-dto.js";
import SimpleController from "./controller.js";

const router = new Router();

router.get("/:id", Validator.validate(mongoIdDto, CONTEXT.PATH), SimpleController.simpleController);
router.patch("/:id", Validator.validate(mongoIdDto, CONTEXT.PATH), SimpleController.simpleController);

export default router;
