import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: '30b49f46-913c-4087-b862-f8d340d1ae0d',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para progranadores em qualquer nivel',
            maximumAttendees: 120,
        }
    })
}

seed().then(()=>{
    console.log('Database seeded!')
    prisma.$disconnect()
})