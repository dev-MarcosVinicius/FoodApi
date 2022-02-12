import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesController } from 'src/controllers/categories/categories.controller';
import { CategoriesService } from 'src/services/categories/categories.service';
import { Category, CategorySchema } from 'src/shared/domain/models/categories.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }])],
    controllers: [CategoriesController],
    providers: [CategoriesService]
})
export class CategoriesModule {}
