import { Router } from "express";
import { Validator } from "../../core/validation.js";
import UserController from "./controller.js";
import { authDto } from "./dto/auth-dto.js";

const router = new Router();

router.post("/auth", Validator.validate(authDto), UserController.authorization);
router.post("/reg", Validator.validate(authDto), UserController.registration);
router.get("/profile", Validator.validate(authDto), UserController.profile);

export default router;
