import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

const getUniqueGroup = async (req: Request, res: Response) => {
  const { groupId } = req.params;

  if (!groupId) {
    return res.status(400).json({ error: 'Missing group ID' });
  }

  const group = await prisma.group.findUnique({
    where: { id: groupId },
  });

  if (!group) {
    return res.status(500).json({ error: 'Failed to get group' });
  }

  res.json({ payload: group });
};

export default getUniqueGroup;
