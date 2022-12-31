import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { TobuyService } from './tobuy.service'
import { CreateTobuyDto } from './dto/create-tobuy.dto'
import { UpdateTobuyDto } from './dto/update-tobuy.dto'

@Controller('tobuy')
export class TobuyController {
  constructor(private readonly tobuyService: TobuyService) {}

  @Post()
  create(@Body() createTobuyDto: CreateTobuyDto) {
    return this.tobuyService.create(createTobuyDto)
  }

  @Get()
  findAll() {
    return this.tobuyService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tobuyService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTobuyDto: UpdateTobuyDto) {
    return this.tobuyService.update(+id, updateTobuyDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tobuyService.remove(+id)
  }
}
