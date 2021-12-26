import { IsNotEmpty } from 'class-validator';

export class rigesterAppler {
  @IsNotEmpty()
  username: string;
}
