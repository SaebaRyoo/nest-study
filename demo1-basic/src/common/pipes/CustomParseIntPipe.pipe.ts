import {
  ArgumentMetadata,
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class CustomParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('coming CustomParseIntPipe');
    if (!this.isNumeric(value)) {
      throw new BadRequestException(
        'Validation failed (numeric string is expected)',
      );
    }
    return parseInt(value, 10);
  }

  isNumeric(value) {
    return (
      ['string', 'number'].includes(typeof value) &&
      /^-?\d+$/.test(value) &&
      isFinite(value)
    );
  }
}
