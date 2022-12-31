import { Test, TestingModule } from '@nestjs/testing'
import { TobuyController } from './tobuy.controller'
import { TobuyService } from './tobuy.service'

describe('TobuyController', () => {
  let controller: TobuyController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TobuyController],
      providers: [TobuyService],
    }).compile()

    controller = module.get<TobuyController>(TobuyController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
