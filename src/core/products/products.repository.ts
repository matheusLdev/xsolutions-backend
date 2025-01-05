import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Omit<Product, 'id'>): Promise<Product> {
    return this.prismaService.product.create({ data });
  }

  async findAll(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }

  async findById(id: number): Promise<Product | null> {
    return this.prismaService.product.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<Product>): Promise<Product> {
    return this.prismaService.product.update({ where: { id }, data });
  }

  async delete(id: number): Promise<Product> {
    return this.prismaService.product.delete({ where: { id } });
  }
}
