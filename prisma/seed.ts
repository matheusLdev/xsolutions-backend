import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [];

  for (let i = 0; i < 5; i++) {
    products.push({
      name: `PS ${i + 1}`,
      price: Number((Math.random() * 100).toFixed(2)),
      quantity: Math.random() * 100,
    });
  }

  await prisma.product.createMany({
    data: products,
  });

  console.log('Banco de dados populado com sucesso!');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// async function resetTable() {
//   await prisma.product.deleteMany({});

//   await prisma.$executeRaw`ALTER SEQUENCE product_id_seq RESTART WITH 1`;

//   console.log('Tabela resetada e sequência reiniciada.');
// }

// resetTable()
//   .catch((e) => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
