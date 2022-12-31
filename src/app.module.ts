import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TobuyModule } from './tobuy/tobuy.module'

@Module({
  imports: [TobuyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
