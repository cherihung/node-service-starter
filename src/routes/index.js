import {Router} from 'express';

import {defaultSuccessHandler, healthCheckHandler} from './handlers/common.js';

const router = Router();

router.get('/', defaultSuccessHandler);
router.get('/health', healthCheckHandler);

export default router;
