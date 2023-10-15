import express from 'express';

import getMany from './getMany';

const router = express.Router();

router.get('/:groupId', getMany);

export default router;
