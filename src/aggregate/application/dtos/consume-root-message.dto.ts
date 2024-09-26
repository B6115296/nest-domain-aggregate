import { Expose } from 'class-transformer';

export class ConsumeRootMessageDto {
  example: string;
  @Expose({ name: '@referredType' })
  referredType: string;
  
  name: string
  nameType: string
  organizationType: string
  tradingName?: string
  otherName?: OtherName[]
  status?: string
  organizationIdentification: OrganizationIdentification[]
  partyCharacteristic?: PartyCharacteristic[]
  attachment?: Attachment[]
  partyRole: PartyRole
}

interface OtherName {
  name?: string
  nameType?: string
  tradingName?: string
}

interface OrganizationIdentification {
  identificationId: string
  identificationType: string
  identificationDisplay: string
  registrationDate: string
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