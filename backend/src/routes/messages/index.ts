import express from 'express';

import getMany from './getMany';
import addOne from './addOne';

const router = express.Router();

// GET routes
router.get('/:groupId', getMany);

// POST routes
router.post('/', addOne);

export default router;
