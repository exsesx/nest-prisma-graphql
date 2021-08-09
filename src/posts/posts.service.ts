import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPostInput: CreatePostInput) {
    return this.prisma.post.create({ data: createPostInput });
  }

  findAll(
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.PostWhereUniqueInput;
      where?: Prisma.PostWhereInput;
      orderBy?: Prisma.PostOrderByInput;
    } = {},
  ) {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.post.findMany({ skip, take, cursor, where, orderBy });
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
      rejectOnNotFound: true,
    });
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return this.prisma.post.update({ where: { id }, data: updatePostInput });
  }

  remove(id: number) {
    return this.prisma.post.delete({ where: { id } });
  }
}
