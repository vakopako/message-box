import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const addOneMessage = async (req: Request, res: Response) => {
  const { message, groupId } = req.body;

  if (!message || !groupId) {
    return res
      .status(400)
      .json({ error: 'Missing message content or group ID' });
  }

  const databaseRecord = await prisma.message.create({
    data: {
      content: message,
      groupId,
    },
    select: {
      createdAt: true,
    },
  });

  if (!databaseRecord) {
    return res.status(500).json({ error: 'Failed to add message' });
  }

  res.json({
    info: {
      success: true,
    },
    payload: databaseRecord,
  });
};

export default addOneMessage;
