import { Router } from 'express';

import activities from './activities';
import events from './events';
import products from './products';
import users from './users';

const router = Router();

router.use('/activities', activities);
router.use('/events', events);
router.use('/products', products);
router.use('/users', users);

export default router;