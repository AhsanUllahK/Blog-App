import express from "express";
import { logout, registration, login } from "../controllers/auth.js";

const router = express.Router();

router.post("/registration", registration)
router.post("/login", login)
router.post("/logout", logout)


export default router;
