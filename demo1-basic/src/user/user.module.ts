import { Module } from '@nestjs/common';
import { GoodsService } from 'src/goods/goods.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, GoodsService],
})
export class UserModule {}
