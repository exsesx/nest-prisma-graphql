import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({ data: createUserInput });
  }

  findAll(
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.UserWhereUniqueInput;
      where?: Prisma.UserWhereInput;
      orderBy?: Prisma.UserOrderByInput;
    } = {},
  ) {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      rejectOnNotFound: true,
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({ where: { id }, data: updateUserInput });
  }

  async remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
