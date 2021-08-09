import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field({ nullable: false })
  title: string;

  @Field({ nullable: true })
  content?: string;

  @Field({ nullable: false, defaultValue: false })
  published: false;

  @Field(() => Int)
  authorId: number;
}
