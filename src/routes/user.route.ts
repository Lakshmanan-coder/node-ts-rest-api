import { Router } from "express";
import UserService from "../controller/user.controller";

const router = Router();

router.post("/user", UserService.postUser);

export default router;
