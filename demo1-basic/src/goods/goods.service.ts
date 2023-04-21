import { Injectable } from '@nestjs/common';

const data = [
  { id: 1, name: 'iphone12', price: 2000 },
  { id: 2, name: 'iphone13', price: 3000 },
];
@Injectable()
export class GoodsService {
  findAll() {
    return data;
  }

  findOne(id) {
    return data.filter((item) => item.id === id);
  }
}
