import { Test, TestingModule } from '@nestjs/testing';
import { UserOpController } from './user_op.controller';


describe('UserOpController', () => {
  let controller: UserOpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserOpController],
    }).compile();

    controller = module.get<UserOpController>(UserOpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
