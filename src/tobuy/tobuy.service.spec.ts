import { Test, TestingModule } from '@nestjs/testing'
import { TobuyService } from './tobuy.service'

describe('TobuyService', () => {
  let service: TobuyService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TobuyService],
    }).compile()

    service = module.get<TobuyService>(TobuyService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
