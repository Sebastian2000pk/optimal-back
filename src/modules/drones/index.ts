import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("¡Hola, mundo desde TypeScript y Express! 2");
});

export default router;