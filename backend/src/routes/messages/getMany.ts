import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

const getManyMessages = (req: Request, res: Response) => {
  const { groupId } = req.params;

  if (!groupId) {
    return res.status(400).json({ error: 'Missing group ID' });
  }

  const messages = prisma.message.findMany({
    where: { groupId },
  });

  if (!messages) {
    return res.status(404).json({ error: 'Messages not found' });
  }

  return res.json({ data: messages });
};

export default getManyMessages;
