import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from 'src/shared/domain/models/categories.schema';
import { CreateCategoryDto } from 'src/shared/dto/create-category.dto';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectModel(Category.name) private categoriesModel: Model<CategoryDocument>,
    ) {}

    async register(categoryData: CreateCategoryDto) {
        return await this.categoriesModel.create(categoryData);
    }

    async findAll() {
        return await this.categoriesModel.find({actived: true});
    }
}
