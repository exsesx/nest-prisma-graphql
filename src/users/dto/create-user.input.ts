import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: false })
  email: string;
}
