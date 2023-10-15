import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

const getUniqueGroup = (req: Request, res: Response) => {
  const { groupId } = req.params;

  if (!groupId) {
    return res.status(400).json({ error: 'Missing group ID' });
  }

  const group = prisma.group.findUnique({
    where: { id: groupId },
  });

  if (!group) {
    return res.status(404).json({ error: 'Group not found' });
  }

  return res.json({ data: group });
};

export default getUniqueGroup;
