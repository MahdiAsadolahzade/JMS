import Express from "express";
import { getUserById, updateUser } from "../controllers/user.js";
import multer from "multer";

const upload = multer();
const router = Express.Router();

router.get("/find", getUserById);

router.put("/update", upload.single("Picture"), updateUser);
export default router;
