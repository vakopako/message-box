import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

const getManyGroups = (req: Request, res: Response) => {
  const groups = prisma.group.findMany();

  if (!groups) {
    return res.status(404).json({ error: 'Groups not found' });
  }

  return res.json({ data: groups });
};

export default getManyGroups;
