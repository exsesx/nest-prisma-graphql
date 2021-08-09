import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '../../posts/entities/post.entity';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: false })
  email: string;

  @Field(() => [Post], { nullable: 'itemsAndList' })
  posts?: Post[];
}
