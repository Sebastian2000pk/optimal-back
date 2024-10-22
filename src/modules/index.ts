import { Router } from 'express';

import dronesRouter from './drones';

const router = Router();

router.use('/drones', dronesRouter);

export default router;