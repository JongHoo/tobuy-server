import { Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Product, ProductDocument } from './entities/product.entity'
import { Model } from 'mongoose'

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}
  async create(createProductDto: Product) {
    try {
      const res = await this.productModel.create(createProductDto)
      return res
    } catch (err) {
      console.log(err)
    }
  }

  async findAll() {
    try {
      const res = await this.productModel.find({ userNo: 1 })
      return res
    } catch (err) {
      console.log(err)
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} product`
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`
  }

  remove(id: number) {
    return `This action removes a #${id} product`
  }
}
