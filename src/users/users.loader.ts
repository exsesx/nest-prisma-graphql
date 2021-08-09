import { Injectable, Scope } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { PostsService } from '../posts/posts.service';

@Injectable({ scope: Scope.REQUEST })
export default class UsersLoader {
  constructor(private postsService: PostsService) {}

  public readonly batchPosts = new DataLoader(async (authorIds: number[]) => {
    const posts = await this.postsService.findAll({
      where: { authorId: { in: authorIds } },
    });
    const postsByAuthor = posts.reduce(
      (result, post) =>
        result.set(post.authorId, [...(result.get(post.authorId) || []), post]),
      new Map(),
    );

    return authorIds.map((authorId) => postsByAuthor.get(authorId) || []);
  });
}
