import { Controller, Get } from '@nestjs/common';
import { ProductsService } from '../../services/products/products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    // @UseGuards()
    @Get('')
    register() {
      return this.productsService.findAll();
    }
}
