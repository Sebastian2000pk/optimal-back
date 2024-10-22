import { Router } from "express";
import { DronesController } from "./controller";

const router = Router();
const dronesController = new DronesController();

router.get("/", dronesController.getDrones);
router.get("/:id", dronesController.getDrone);
router.post("/", dronesController.createDrone);

export default router;