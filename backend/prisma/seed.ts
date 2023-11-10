import { PrismaClient } from '@prisma/client'

import { GROUPS, MESSAGES } from './seedData';

const prisma = new PrismaClient();

// Seed data with upsert

console.info('Seeding database...')

async function main() {
  for (const group of GROUPS) {
    await prisma.group.upsert({
      where: { id: group.id },
      update: {},
      create: group,
    })
  }

  console.info('Seeded groups')

  for (const message of MESSAGES) {
    await prisma.message.upsert({
      where: { id: message.id },
      update: {},
      create: message,
    })
  }

  console.info('Seeded messages')
}

main()
  .then(() => console.info('Database seeded'))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
