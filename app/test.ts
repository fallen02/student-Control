import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.academicDetails.create({
    data: {
      name: 'One',
      father_name: 'uday bhunia',
      religion: 'hindu',
      sex: 'male',
      ph_no: '8972649079',
      addhar_no: '894528893245',
      rollNo: 'RTNY-1021',
      academic_Year: '2021',
      address: {
        create: {
          vill: 'Hello World',
          PO: 'Hello World',
          PS: 'Hello World',
          district: 'Hello World',
          PIN: 743373,
          nationliaty: 'Indian'
        },
      },
    },
  })
  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
