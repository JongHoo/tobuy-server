import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { now, Document } from 'mongoose'

export type TobuyDocument = Tobuy & Document

@Schema()
export class Tobuy {
  @Prop()
  title: string

  @Prop()
  url: string

  @Prop()
  description: string

  @Prop()
  userNo: number

  @Prop({ default: now() })
  createdAt: Date
}

export const TobuySchema = SchemaFactory.createForClass(Tobuy)
