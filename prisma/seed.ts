import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [];

  for (let i = 0; i < 30; i++) {
    products.push({
      name: `Produto ${i + 1}`,
      price: Number((Math.random() * 100).toFixed(2)),
      quantity: Math.floor(Math.random() * 100),
    });
  }

  await prisma.product.createMany({
    data: products,
  });

  console.log('Banco de dados populado com 30 produtos!');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
