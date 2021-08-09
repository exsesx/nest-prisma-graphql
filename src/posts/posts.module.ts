import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersService } from '../users/users.service';
import PostsLoader from './posts.loader';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  imports: [PrismaModule],
  providers: [PostsResolver, PostsService, PostsLoader, UsersService],
})
export class PostsModule {}
