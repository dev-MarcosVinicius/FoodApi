import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/shared/domain/models/product.schema';
import { CreateProductDto } from 'src/shared/dto/users/create-product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    ) {}

    async register(productData: CreateProductDto) {
        return await this.productModel.create(productData);
    }
}
