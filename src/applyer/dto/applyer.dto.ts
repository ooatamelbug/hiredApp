import { IsNotEmpty, Length, Matches } from 'class-validator';

export class rigesterAppler {
  @IsNotEmpty()
  @Length(3, 100)
  username: string;

  @IsNotEmpty()
  @Length(8, 80)
  @Matches(/[a-zA-Z._0-9]{8,25}$/)
  password: string;

  @IsNotEmpty()
  @Length(3, 50)
  firstName: string;

  @IsNotEmpty()
  @Length(8, 80)
  lastName: string;
}
