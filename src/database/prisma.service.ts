import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
    console.log('Prisma estabeleceu conexão com o banco de dados');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('Prisma desconectou do banco de dados');
  }
}
