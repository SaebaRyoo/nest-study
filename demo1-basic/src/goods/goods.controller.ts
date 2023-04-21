import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { CustomParseIntPipe } from 'src/common/pipes/CustomParseIntPipe.pipe';
import { GoodsService } from './goods.service';

@Controller('goods')
@UseGuards(AuthGuard)
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}
  @Get()
  findAll() {
    return this.goodsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', CustomParseIntPipe) id: number) {
    const a: any = {};
    console.log(a.b.c);
    return this.goodsService.findOne(id);
  }
}
