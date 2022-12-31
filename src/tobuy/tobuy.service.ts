import { Injectable } from '@nestjs/common'
import { CreateTobuyDto } from './dto/create-tobuy.dto'
import { UpdateTobuyDto } from './dto/update-tobuy.dto'

@Injectable()
export class TobuyService {
  create(createTobuyDto: CreateTobuyDto) {
    return 'This action adds a new tobuy'
  }

  findAll() {
    return `This action returns all tobuy`
  }

  findOne(id: number) {
    return `This action returns a #${id} tobuy`
  }

  update(id: number, updateTobuyDto: UpdateTobuyDto) {
    return `This action updates a #${id} tobuy`
  }

  remove(id: number) {
    return `This action removes a #${id} tobuy`
  }
}
