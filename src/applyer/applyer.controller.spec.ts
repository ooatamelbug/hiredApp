import { Test, TestingModule } from '@nestjs/testing';
import { ApplyerController } from './applyer.controller';

describe('ApplyerController', () => {
  let controller: ApplyerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplyerController],
    }).compile();

    controller = module.get<ApplyerController>(ApplyerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
