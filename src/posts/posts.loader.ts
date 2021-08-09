import { Injectable, Scope } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { UsersService } from '../users/users.service';

@Injectable({ scope: Scope.REQUEST })
export default class PostsLoader {
  constructor(private usersService: UsersService) {}

  public readonly batchAuthors = new DataLoader(async (authorIds: number[]) => {
    const users = await this.usersService.findAll({
      where: { id: { in: authorIds } },
    });
    const usersMap = new Map(users.map((user) => [user.id, user]));

    return authorIds.map((authorId) => usersMap.get(authorId));
  });
}
