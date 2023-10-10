import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Defined data

const GROUPS = [
  {
    id: 'c0b2b020-6787-11ee-8c99-0242ac120002',
    name: 'Group',
  },
]

const MESSAGES = [
  {
    id: 'cf717718-6787-11ee-8c99-0242ac120002',
    content: 'Hello world!',
    groupId: GROUPS[0].id,
  },
]

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
