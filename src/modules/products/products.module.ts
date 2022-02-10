import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from 'src/controllers/products/products.controller';
import { ProductsService } from 'src/services/products/products.service';
import { Product, ProductSchema } from 'src/shared/domain/models/product.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}
