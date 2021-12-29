import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class rigesterAppler {
  @IsNotEmpty()
  @Length(3, 100)
  username: string;

  @IsNotEmpty()
  @Length(8, 80)
  @Matches(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!@#$%^&*?-]).{7,}$/gi, {
    message:
      'you should contain at least one Upper charater and one lower charater and spiecal charater and one number',
  })
  password: string;

  @IsNotEmpty()
  @Length(3, 50)
  firstName: string;

  @IsNotEmpty()
  @Length(3, 80)
  lastName: string;
}

export class UpdateApplerDto {
  @IsOptional()
  @Length(8, 80)
  @Matches(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!@#$%^&*?-]).{7,}$/gi, {
    message:
      'you should contain at least one Upper charater and one lower charater and spiecal charater and one number',
  })
  password: string;

  @Length(3, 50)
  firstName: string;

  @Length(8, 80)
  lastName: string;

  @IsOptional()
  @IsArray({ each: true })
  @IsString({ each: true })
  @IsPhoneNumber()
  @Matches(
    /^(966|971|20)?(?:10|11|12|15|50|51|52|53|54|55|56|57|58|59)\d{8,8}$/gi,
    {
      each: true,
      message:
        'you should contain at least one Upper charater and one lower charater and spiecal charater and one number',
    },
  )
  phone: string[];
}
