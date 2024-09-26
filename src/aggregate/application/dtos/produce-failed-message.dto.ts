import { Expose } from 'class-transformer';
import { ConsumeFailedMessageDto } from './consume-failed-message.dto';

export class ProduceFailedMessageDto {
  constructor(data: ConsumeFailedMessageDto) {
    this.example = data.example;
    this.referredType = data.referredType;
  }

  example: string;
  @Expose({ name: '@referredType' })
  referredType: string;
}
