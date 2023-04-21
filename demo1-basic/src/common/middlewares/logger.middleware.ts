import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response, Request } from 'express';

@Injectable()
export class LoggerMiddle implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('coming LoggerMiddle...');
    next();
    console.log('after LoggerMiddle');
  }
}
