import { Router } from "express";
import { CONTEXT, Validator } from "../../core/validation.js";
import { mongoIdDto } from "../common/dto/mongo-id-dto.js";
import SimpleController from "./controller.js";
import { messageDto } from "./dto/message-dto.js";

const router = new Router();

router.post("", Validator.validate(messageDto), SimpleController.simpleController);
router.get("/:id", Validator.validate(mongoIdDto, CONTEXT.PATH), SimpleController.simpleController);
router.patch("/:id", Validator.validate(mongoIdDto, CONTEXT.PATH), SimpleController.simpleController);

export default router;
