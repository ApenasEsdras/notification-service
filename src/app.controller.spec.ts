import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './infra/app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController = newFunction();

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  function newFunction() {
    let appController: AppController;
    return appController;
  }
});
