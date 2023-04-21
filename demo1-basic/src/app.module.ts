import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddle } from './common/middlewares/logger.middleware';
import { GoodsModule } from './goods/goods.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [GoodsModule, UserModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddle)
      .forRoutes({ path: 'goods', method: RequestMethod.GET }, '/user');
  }
}
