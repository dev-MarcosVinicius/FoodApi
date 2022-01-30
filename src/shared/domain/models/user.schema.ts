import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    unique: true,
    required: true
  })
  id: string;

  @Prop({
    required: true
  })
  fullName: string;

  @Prop({
    required: true
  })
  email: string;

  @Prop({
    required: true
  })
  password: string;

  @Prop({
    required: true
  })
  celPhone: string;

  @Prop({
    required: true
  })
  addres: string;

  @Prop({
    required: true
  })
  number: string;
}

export const UserSchema = SchemaFactory.createForClass(User);