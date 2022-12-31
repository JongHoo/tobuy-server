import { Module } from '@nestjs/common'
import { TobuyService } from './tobuy.service'
import { TobuyController } from './tobuy.controller'

@Module({
  controllers: [TobuyController],
  providers: [TobuyService],
})
export class TobuyModule {}
