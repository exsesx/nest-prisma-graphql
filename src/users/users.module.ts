import { Module } from '@nestjs/common';
import { PostsService } from '../posts/posts.service';
import { PrismaModule } from '../prisma/prisma.module';
import UsersLoader from './users.loader';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [PrismaModule],
  providers: [UsersResolver, UsersService, UsersLoader, PostsService],
})
export class UsersModule {}
