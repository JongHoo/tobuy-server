import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { now, Document } from 'mongoose'

export type ProductDocument = Product & Document

@Schema()
export class Product {
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

export const ProductSchema = SchemaFactory.createForClass(Product)
