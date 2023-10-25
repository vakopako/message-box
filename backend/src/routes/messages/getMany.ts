import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

const getManyMessages = async (req: Request, res: Response) => {
  const { groupId } = req.params;

  if (!groupId) {
    return res.status(400).json({ error: 'Missing group ID' });
  }

  const messages = await prisma.message.findMany({
    select: {
      content: true,
    },
    where: { groupId },
  });

  if (!messages) {
    return res.status(500).json({ error: 'Failed to get messages' });
  }

  res.json({ payload: messages });
};

export default getManyMessages;
