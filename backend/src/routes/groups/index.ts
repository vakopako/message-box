import express from 'express';

import getMany from './getMany';
import getUnique from './getUnique';

const router = express.Router();

router.get('/', getMany);
router.get('/:groupId', getUnique);

export default router;
