import { Injectable } from '@nestjs/common';
import { GoodsService } from 'src/goods/goods.service';

@Injectable()
export class UserService {
  constructor(private readonly goodsService: GoodsService) {}
  findAll() {
    return this.goodsService.findAll();
  }
}
