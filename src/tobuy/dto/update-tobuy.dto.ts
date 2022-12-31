import { PartialType } from '@nestjs/mapped-types'
import { CreateTobuyDto } from './create-tobuy.dto'

export class UpdateTobuyDto extends PartialType(CreateTobuyDto) {}
