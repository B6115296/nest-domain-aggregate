import { Expose } from 'class-transformer';
import { ConsumeCompletedMessageDto } from './consume-completed-message.dto';

export class ProduceCompletedMessageDto {
  constructor(data: ConsumeCompletedMessageDto) {
    this.example = data.example;
    this.referredType = data.referredType;
  }

  example: string;
  @Expose({ name: '@referredType' })
  referredType: string;
}
