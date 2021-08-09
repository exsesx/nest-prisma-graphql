import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field({ nullable: false })
  title: string;

  @Field({ nullable: true })
  content?: string;

  @Field({ nullable: false, defaultValue: false })
  published: false;

  @Field(() => User, { nullable: true })
  author?: User;

  authorId?: number;
}
