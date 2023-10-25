import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

const getManyGroups = async (req: Request, res: Response) => {
  const groups = await prisma.group.findMany();

  if (!groups) {
    return res.status(500).json({ error: 'Failed to get groups' });
  }

  res.json({ payload: groups });
};

export default getManyGroups;
