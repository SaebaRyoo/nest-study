import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

interface Response<T> {
  data: T;
}

/**
 * 统一响应体拦截器
 */
@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    console.log('coming ResponseInterceptor interceptor');
    return next.handle().pipe(
      map((data) => ({
        data,
        status: 200,
        extra: {},
        message: 'success',
        success: true,
      })),
    );
  }
}
