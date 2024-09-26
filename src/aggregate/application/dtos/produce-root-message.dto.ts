import { Expose } from 'class-transformer';
import { ConsumeRootMessageDto } from './consume-root-message.dto';

export class ProduceRootMessageDto {
  constructor(data: ConsumeRootMessageDto) {
    // this.example = data.example;
    this.referredType = data.referredType;
    this.name = data.name;
    this.tradingName = data.tradingName;
    this.nameType = data.nameType;
    this.organizationType = data.organizationType;
  }

  example: string;
  @Expose({ name: '@referredType' })
  referredType: string;

  isHeadOffice: boolean;
  isLegalEntity: boolean;
  name?: string;
  nameType?: string;
  organizationType?: string;
  tradingName?: string;
  contactMedium?: ContactMedium[];
}

interface ContactMedium {
  mediumType?: string;
  preferred?: string;
  characteristic?: Characteristic[]
  geographicAddress?: GeographicAddress
}

interface Characteristic {
  faxNumber?: string;
  phoneNumber?: string;
  emailAddress?: string;
}

class GeographicAddress {
  id?: string;
  @Expose({ name: '@referredType' })
  referredType?: string;
  @Expose({ name: '@type' })
  type?: string;
}

interface OrganizationIdentification {
  identificationId?: string
  identificationType?: string
  identificationDisplay?: string
  registrationDate?: string
}

interface PartyCharacteristic {
  name?: string
  valueType?: string
  value?: string
}

interface Attachment {
  attachmentType?: string
  name?: string
  description?: string
  mimeType?: string
  url?: string
}

interface PartyRole {
  name: string
  status: string
  statusReason?: string
  engagedParty: EngagedParty
  type: string;
}

interface EngagedParty {
  referredType: string;
}