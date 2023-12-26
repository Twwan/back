import { Router } from "express";
import { Validator } from "../../core/validation.js";
import SimpleController from "./controller.js";
import { messageDto } from "./dto/message-dto.js";

const router = new Router();

router.post("/auth", Validator.validate(messageDto), SimpleController.registration);
router.post("/reg", Validator.validate(messageDto), SimpleController.registration);
router.get("/profile", Validator.validate(messageDto), SimpleController.registration);

export default router;
