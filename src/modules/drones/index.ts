import { Router } from "express";
import { DronesController } from "./controller";
import { middlewareValidator } from "@/middleware/validator";

const router = Router();
const dronesController = new DronesController();

// Validators
import { createDrone, updateDrone } from "./validators";

router.get("/", dronesController.getDrones);
router.get("/:id", dronesController.getDrone);
router.post(
  "/",
  createDrone,
  middlewareValidator,
  dronesController.createDrone
);
router.put(
  "/:id",
  updateDrone,
  middlewareValidator,
  dronesController.updateDrone
);
router.delete("/:id", dronesController.deleteDrone);

export default router;
