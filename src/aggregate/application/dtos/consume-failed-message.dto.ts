import { Expose } from 'class-transformer';

export class ConsumeFailedMessageDto {
  example: string;
  @Expose({ name: '@referredType' })
  referredType: string;

  code: string
  reason: string
  message?: string
  status?: string
  referenceError?: string
}
