import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCostumeDto } from './dto/create-costume.dto';

@Injectable()
export class CostumeService {
  constructor(private readonly prisma: PrismaService) {}

  async getAttendeeCostumes(attendeeId: number) {
    try {
      const attendeeCostumes = await this.prisma.costumeTransaction.findMany({
        where: {
          attendeeId,
        },
        include: {
          costume: true,
        },
      });
      return attendeeCostumes;
    } catch (error) {
      console.error(error);
      throw new NotFoundException('Internal Server Error');
    }
  }

  async purchaseCostumes(attendeeId: number, costumeId: number, amountPaid: number) {
    try {
      const newTransaction = await this.prisma.costumeTransaction.create({
        data: {
          attendeeId,
          costumeId,
          amountPaid,
          timestamp: new Date(),
        },
        include: {
          costume: true,
        },
      });
      return newTransaction;
    } catch (error) {
      console.error(error);
      throw new NotFoundException('Internal Server Error');
    }
  }

  async updateCostumeTransaction(transactionId: number, amountPaid: number) {
    try {
      const updatedTransaction = await this.prisma.costumeTransaction.update({
        where: {
          id: transactionId,
        },
        data: {
          amountPaid,
        },
        include: {
          costume: true,
        },
      });
      return updatedTransaction;
    } catch (error) {
      console.error(error);
      throw new NotFoundException('Internal Server Error');
    }
  }

  async deleteCostumeTransaction(transactionId: number) {
    try {
      await this.prisma.costumeTransaction.delete({
        where: {
          id: transactionId,
        },
      });
      return { message: 'Transaction deleted successfully.' };
    } catch (error) {
      console.error(error);
      throw new NotFoundException('Internal Server Error');
    }
  }

  async getAllCostumes() {
    const costumes = await this.prisma.costume.findMany();
    return costumes;
  }

  async createCostume(createCostumeDto: CreateCostumeDto) {
    const { name, description, weakness, skills, price, stock } = createCostumeDto;
  
    return this.prisma.costume.create({
      data: {
        name,
        description,
        weakness,
        skills,
        price,
        stock,
      },
    });
  }

}

