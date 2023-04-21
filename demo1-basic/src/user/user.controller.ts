import { Controller, Get } from '@nestjs/common';
import { GoodsService } from 'src/goods/goods.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly goodsService: GoodsService,
  ) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
