import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsArray,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { UserType } from '../enums/user-type.enum';
import { Status } from '@app/common/enum/status.enum';

@Schema({ timestamps: true })
export class User {
  @IsOptional()
  _id: string;

  @Prop()
  @IsOptional()
  @IsString()
  userName: string;

  @Prop({ type: Object })
  @IsStrongPassword()
  password: { [key: string]: string };

  @Prop({ unique: true })
  mobileNo: number;

  @Prop()
  email: string;

  @Prop({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  userType: UserType[];

  @Prop({ type: String })
  status: Status;

  @Prop({ default: new Date() })
  createdAt: Date;

  updatedAt: Date;

  @Prop()
  otp: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
