import { Cons } from 'rxjs';
import { Expose } from 'class-transformer';

export class ConsumeCompletedMessageDto {
  example: string;
  @Expose({ name: '@referredType' })
  referredType: string;

  id: string;
  isHeadOffice: boolean;
  isLegalEntity: boolean;
  name?: string;
  nameType?: string;
  organizationType?: string;
  tradingName?: string;
  contactMedium?: ContactMedium[];
  creditRating?: CreditRating[];
  existsDuring: ExistsDuring;
  externalReference?: ExternalReference[];
  organizationChildRelationship?: OrganizationChildRelationship[];
  organizationIdentification: OrganizationIdentification[];
  organizationParentRelationship?: OrganizationParentRelationship[];
  otherName?: OtherName[]
  partyCharacteristic?: PartyCharacteristic[];
  relatedParty?: RelatedParty[]
  status?: string;
  taxExemptionCertificate?: TaxExemptionCertificate[]
  attachment?: Attachment[]
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

class CreditRating {
  creditAgencyName?: string
  creditAgencyType?: string
  ratingReference?: string
  ratingScore?: number
  validFor?: ValidFor
  monthlyIncome?: string
  @Expose({ name: '@type' })
  type?: string;
}

interface ExistsDuring {
  startDateTime?: string;
  endDateTime?: string;
}

interface ExternalReference{
  externalReferenceType?: string
  name?: string
}

interface OrganizationChildRelationship{
  relationshipType?: string
  organization?: Organization
}

class Organization {
  id?: string
  name?: string
  @Expose({ name: '@referredType' })
  referredType?: string
}

interface OrganizationIdentification {
  identificationId: string
  identificationType: string
  identificationDisplay: string
  registrationDate: string
  issuingAuthority?: string
  issuingDate: string
  attachment?: {
    id: string
    attachmentType: string
    content: string
    description: string
    mimeType: string
    name: string
    url: string
    size: string
    amount: number
    units: string
  }
  validFor?: ValidFor
}

interface OrganizationParentRelationship {
  relationshipType?: string
  organization?: Organization
}

interface ValidFor {
  startDateTime?: string
  endDateTime?: string
}

interface OtherName {
  name?: string
  nameType?: string
  tradingName?: string
  validFor?: ValidFor
}

interface PartyCharacteristic {
  name?: string
  valueType?: string
  value?: string
}

class RelatedParty {
  id?: string
  name?: string
  @Expose({ name: '@referredType' })
  referredType?: string
}

class TaxExemptionCertificate {
  id?: string
  attachment?: Attachment
}

interface Attachment {
  id?: string
  attachmentType?: string
  content?: string
  description?: string
  mimeType?: string
  name?: string
  url?: string
  size?: {
    amount?: number
    units?: string
  }
  taxDefinition?: TaxDefinition
  validFor?: ValidFor
}

interface TaxDefinition {
  id?: string
  name?: string
  taxType?: string
}