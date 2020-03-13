import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Grid: any,
  Json: any,
  Date: any,
  DateString: any,
  DateTimeString: any,
  Byte: any,
  Decimal: any,
  Short: any,
  PersonName: any,
  Phone: any,
  Email: any,
  DateTime: any,
  DateTimeOffset: any,
  Milliseconds: any,
  Seconds: any,
};

export enum AccessRole {
  Undefined = 'UNDEFINED',
  Administrator = 'Administrator',
  Insurance = 'Insurance',
  Estimator = 'Estimator',
  Adjustor = 'Adjustor',
  Builder = 'Builder',
  ContentSupplier = 'ContentSupplier',
  LossAdjuster = 'LossAdjuster',
  InternalAb = 'InternalAB',
  Restorer = 'Restorer',
  Specialist = 'Specialist',
  SystemAdmin = 'SystemAdmin'
}

export type Action = {
   __typename?: 'Action',
  actionType?: Maybe<ActionType>,
  id: Scalars['ID'],
  isDisabled: Scalars['Boolean'],
  isDisplay: Scalars['Boolean'],
  name: Scalars['String'],
};

export enum ActionType {
  Undefined = 'UNDEFINED',
  FeeAdd = 'FEE_ADD',
  FeeEdit = 'FEE_EDIT',
  FeeDelete = 'FEE_DELETE',
  InvoiceUpload = 'INVOICE_UPLOAD',
  InvoiceBulkUpload = 'INVOICE_BULK_UPLOAD',
  InvoiceUpdateStatus = 'INVOICE_UPDATE_STATUS',
  InvoiceDelete = 'INVOICE_DELETE',
  InvoiceViewDocument = 'INVOICE_VIEW_DOCUMENT',
  ReserveUpdate = 'RESERVE_UPDATE',
  SpecialistRequestAdd = 'SPECIALIST_REQUEST_ADD',
  SpecialistRequestEdit = 'SPECIALIST_REQUEST_EDIT',
  SpecialistRequestDelete = 'SPECIALIST_REQUEST_DELETE',
  AdjusterInitialCall = 'ADJUSTER_INITIAL_CALL',
  AdjusterAppointment = 'ADJUSTER_APPOINTMENT',
  ClaimAdd = 'CLAIM_ADD',
  ClaimAwaitingInfo = 'CLAIM_AWAITING_INFO',
  ClaimStatusVolume = 'CLAIM_STATUS_VOLUME',
  ClaimFinalise = 'CLAIM_FINALISE',
  ClaimCashSettle = 'CLAIM_CASH_SETTLE',
  ClaimjobAllocateSupplier = 'CLAIMJOB_ALLOCATE_SUPPLIER',
  ClaimjobReallocateSupplier = 'CLAIMJOB_REALLOCATE_SUPPLIER',
  FilterInternalAssessor = 'FILTER_INTERNAL_ASSESSOR',
  FilterRecommendationStatus = 'FILTER_RECOMMENDATION_STATUS'
}

export type AddPortfolioInput = {
  scopingSupplierId?: Maybe<Scalars['ID']>,
  portfolioType: PortfolioType,
};

export type Address = {
   __typename?: 'Address',
  line1?: Maybe<Scalars['String']>,
  line2?: Maybe<Scalars['String']>,
  postcode?: Maybe<Scalars['String']>,
  state?: Maybe<State>,
  suburb?: Maybe<Scalars['String']>,
};

export type AddressInput = {
  line1?: Maybe<Scalars['String']>,
  line2?: Maybe<Scalars['String']>,
  suburb?: Maybe<Scalars['String']>,
  postcode?: Maybe<Scalars['String']>,
  state?: Maybe<State>,
};

export type AggregateFeeCategory = {
   __typename?: 'AggregateFeeCategory',
  buildingReserve?: Maybe<Scalars['Decimal']>,
  contentsReserve?: Maybe<Scalars['Decimal']>,
  outstandingPayments?: Maybe<Scalars['Decimal']>,
  toBeInvoiced?: Maybe<Scalars['Decimal']>,
  totalAmountInvoiced?: Maybe<Scalars['Decimal']>,
  totalClaimReserve?: Maybe<Scalars['Decimal']>,
};

export type AggregateFeeItem = {
   __typename?: 'AggregateFeeItem',
  totalAuthorisedAmount?: Maybe<Scalars['Decimal']>,
};

export type AppCustomization = {
   __typename?: 'AppCustomization',
  alias?: Maybe<Scalars['String']>,
  favicon?: Maybe<Scalars['String']>,
  logo?: Maybe<Scalars['String']>,
  companyLogo?: Maybe<Scalars['String']>,
};

export type AppointmentInput = {
  appointmentDate: Scalars['DateString'],
  note?: Maybe<Scalars['String']>,
};

export type AuthenticatedUser = {
   __typename?: 'AuthenticatedUser',
  _appRoutes?: Maybe<Array<Scalars['String']>>,
  _customisation?: Maybe<AppCustomization>,
  _rootRoute: Scalars['String'],
  claimFilters?: Maybe<Array<Maybe<FilterInput>>>,
  communicationFilters?: Maybe<Array<Maybe<FilterInput>>>,
  dashboardFilters?: Maybe<Array<Maybe<FilterInput>>>,
  id: Scalars['ID'],
  name: Scalars['String'],
  userRole: AccessRole,
  userType: UserType,
  waterfallFilters?: Maybe<Array<ClaimStatusVolumeGroup>>,
};


export type AuthenticatedUserWaterfallFiltersArgs = {
  where: ClaimStatusVolumeWhere
};

export type AwaitingInfoClaimInputType = {
  note?: Maybe<Scalars['String']>,
  awaitingInfoReasonId: Scalars['Byte'],
};


export type Card = {
   __typename?: 'Card',
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  order?: Maybe<Scalars['Int']>,
  grid?: Maybe<Scalars['Grid']>,
  fields?: Maybe<Array<Field>>,
};

export type CaseReportFilter = {
  createDateFrom?: Maybe<Scalars['Date']>,
  createDateTo?: Maybe<Scalars['Date']>,
  insurers?: Maybe<Array<Scalars['ID']>>,
  managers?: Maybe<Array<Scalars['ID']>>,
  managerTeams?: Maybe<Array<Maybe<Scalars['String']>>>,
  catCodes?: Maybe<Array<Scalars['ID']>>,
  eventTypes?: Maybe<Array<Scalars['ID']>>,
  internalAssessors?: Maybe<Array<Scalars['ID']>>,
  buildingSuppliers?: Maybe<Array<Scalars['ID']>>,
  contentsSuppliers?: Maybe<Array<Scalars['ID']>>,
  restorationSuppliers?: Maybe<Array<Scalars['ID']>>,
  buildingStatus?: Maybe<Array<Scalars['ID']>>,
  contentsStatus?: Maybe<Array<Scalars['ID']>>,
  restorationStatus?: Maybe<Array<Scalars['ID']>>,
  suppliers?: Maybe<Array<Scalars['ID']>>,
  status?: Maybe<Array<Scalars['ID']>>,
  regions?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateRange?: Maybe<DateRangeOption>,
  portfolios?: Maybe<Array<Maybe<PortfolioType>>>,
  states?: Maybe<Array<Maybe<State>>>,
  recommendationStatus?: Maybe<Array<JobRecommendationStatus>>,
};

export type CaseReportIndex = {
  internalFilterName: Scalars['String'],
  filter?: Maybe<CaseReportFilter>,
};

export type CatCode = {
   __typename?: 'CATCode',
  cATCodeId: Scalars['Int'],
  cATCodeName: Scalars['String'],
  cATNumber: Scalars['String'],
};

export type ClaimAdditionalData = {
   __typename?: 'ClaimAdditionalData',
  additionalDataId: Scalars['Int'],
  content: Scalars['String'],
  id: Scalars['ID'],
  title: Scalars['String'],
};

export type ClaimAdditionalDataCategory = {
   __typename?: 'ClaimAdditionalDataCategory',
  categoryName: Scalars['String'],
  id: Scalars['ID'],
  items?: Maybe<Array<Maybe<ClaimAdditionalData>>>,
};

export type ClaimCashSettleInput = {
  claimId: Scalars['ID'],
  settlementValue: Scalars['Decimal'],
  paymentTypeId: Scalars['Int'],
  paymentMethodId: Scalars['Int'],
  bankName?: Maybe<Scalars['String']>,
  bsb?: Maybe<Scalars['String']>,
  account?: Maybe<Scalars['String']>,
  comments?: Maybe<Scalars['String']>,
  claimPortfolioType: PortfolioType,
  settlementDate: Scalars['DateTimeString'],
};

export enum ClaimCategory {
  NonUrgent = 'NonUrgent',
  Urgent = 'Urgent',
  SemiUrgent = 'SemiUrgent'
}

export type ClaimCommunication = {
   __typename?: 'ClaimCommunication',
  acknowledged: Scalars['Boolean'],
  acknowledgeDate?: Maybe<Scalars['DateString']>,
  acknowledgeUserId?: Maybe<Scalars['Int']>,
  acknowledgeUserName?: Maybe<Scalars['String']>,
  claimId: Scalars['Int'],
  claimRef: Scalars['String'],
  communicationId: Scalars['Int'],
  id: Scalars['ID'],
  message?: Maybe<Scalars['String']>,
  portfolioType?: Maybe<PortfolioType>,
  private: Scalars['Boolean'],
  recieverCompanyId?: Maybe<Scalars['Int']>,
  recieverCompanyName?: Maybe<Scalars['String']>,
  sendDate: Scalars['DateTimeString'],
  senderCompanyId?: Maybe<Scalars['Int']>,
  senderCompanyName?: Maybe<Scalars['String']>,
  senderId?: Maybe<Scalars['Int']>,
  senderName?: Maybe<Scalars['String']>,
  senderRole?: Maybe<AccessRole>,
};

export enum ClaimCommunicationBox {
  UnDefined = 'UnDefined',
  OutBox = 'OutBox',
  Inbox = 'Inbox',
  InboxAndSharedBox = 'InboxAndSharedBox'
}

export type ClaimCommunicationConnection = {
   __typename?: 'ClaimCommunicationConnection',
  edges?: Maybe<Array<Maybe<ClaimCommunicationEdge>>>,
  items?: Maybe<Array<Maybe<ClaimCommunication>>>,
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

export type ClaimCommunicationCreate = {
  claimId: Scalars['ID'],
  message: Scalars['String'],
  receiverCompanyId: Scalars['Int'],
  private: Scalars['Boolean'],
  receiverRole: AccessRole,
};

export type ClaimCommunicationEdge = {
   __typename?: 'ClaimCommunicationEdge',
  cursor: Scalars['String'],
  node?: Maybe<ClaimCommunication>,
};

export type ClaimCommunicationPayload = {
   __typename?: 'ClaimCommunicationPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<ClaimCommunication>,
  success: Scalars['Boolean'],
};

export type ClaimDocument = {
   __typename?: 'ClaimDocument',
  amountInvoice?: Maybe<Scalars['Float']>,
  company?: Maybe<Company>,
  description: Scalars['String'],
  documentFileName: Scalars['String'],
  documentId: Scalars['Int'],
  id: Scalars['ID'],
  invoiceNumber?: Maybe<Scalars['String']>,
  isInvoice: Scalars['Boolean'],
  portfolioType?: Maybe<PortfolioType>,
  private: Scalars['Boolean'],
  uploadDate?: Maybe<Scalars['DateTimeString']>,
  url: Scalars['String'],
};

export type ClaimDocumentConnection = {
   __typename?: 'ClaimDocumentConnection',
  edges?: Maybe<Array<Maybe<ClaimDocumentEdge>>>,
  items?: Maybe<Array<Maybe<ClaimDocument>>>,
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

export type ClaimDocumentCreate = {
  claimId: Scalars['ID'],
  description: Scalars['String'],
  documentFileName: Scalars['String'],
  fileBase64: Scalars['String'],
  fileId?: Maybe<Scalars['String']>,
  isInvoice: Scalars['Boolean'],
  invoiceNumber?: Maybe<Scalars['String']>,
  amountInvoice?: Maybe<Scalars['Float']>,
  private: Scalars['Boolean'],
  visibleByInsurer?: Maybe<Scalars['Boolean']>,
  portfolioType?: Maybe<PortfolioType>,
};

export type ClaimDocumentEdge = {
   __typename?: 'ClaimDocumentEdge',
  cursor: Scalars['String'],
  node?: Maybe<ClaimDocument>,
};

export type ClaimDocumentPayload = {
   __typename?: 'ClaimDocumentPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<ClaimDocument>,
  success: Scalars['Boolean'],
};

export type ClaimFinaliseReason = {
   __typename?: 'ClaimFinaliseReason',
  finaliseResonId: Scalars['Int'],
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type ClaimItemFilter = {
  id?: Maybe<Scalars['Int']>,
  claimId: Scalars['ID'],
  createDateFrom?: Maybe<Scalars['Date']>,
  createDateTo?: Maybe<Scalars['Date']>,
  keyWords?: Maybe<Scalars['String']>,
  portfolios?: Maybe<Array<Maybe<PortfolioType>>>,
};

export type ClaimJob = {
   __typename?: 'ClaimJob',
  _allocatedBuilder?: Maybe<Scalars['String']>,
  _allocatedRestorer?: Maybe<Scalars['String']>,
  _claimBuilder?: Maybe<Scalars['String']>,
  _claimRestorer?: Maybe<Scalars['String']>,
  _claimStatus?: Maybe<Scalars['String']>,
  _claimValue?: Maybe<Scalars['String']>,
  _incidentAddress?: Maybe<Scalars['String']>,
  _insuredPhone?: Maybe<Scalars['String']>,
  _portfolios?: Maybe<Array<PortfolioType>>,
  _request?: Maybe<Scalars['String']>,
  _requestDate?: Maybe<Scalars['String']>,
  actions: Array<Maybe<Action>>,
  additionalData?: Maybe<Array<Maybe<ClaimAdditionalDataCategory>>>,
  additionalRefNumber?: Maybe<Scalars['String']>,
  associatedRiskJobId?: Maybe<Scalars['Int']>,
  brc?: Maybe<ClaimManager>,
  building?: Maybe<ClaimPortfolio>,
  caseManager?: Maybe<ClaimManager>,
  claimDescription?: Maybe<Scalars['String']>,
  claimId: Scalars['Int'],
  contents?: Maybe<ClaimPortfolio>,
  contentsRefNum?: Maybe<Scalars['String']>,
  customLoginEmail?: Maybe<Scalars['String']>,
  externalLossAdjuster?: Maybe<Company>,
  feeTab: FeeTab,
  hATypeVisit?: Maybe<HaTypeVisit>,
  hasBuilding: Scalars['Boolean'],
  hasContents: Scalars['Boolean'],
  hasRestoration: Scalars['Boolean'],
  homeAssessor?: Maybe<InternalAssesor>,
  id: Scalars['ID'],
  incidentDetail?: Maybe<IncidentDetail>,
  insured?: Maybe<ContactDetail>,
  insurer?: Maybe<Company>,
  lodgeDate?: Maybe<Scalars['DateString']>,
  lossAdjustProgress?: Maybe<ClaimProgress>,
  lotNumber: Scalars['String'],
  managedByENData: Scalars['Boolean'],
  mapRef: Scalars['String'],
  multipleRisks?: Maybe<Scalars['Boolean']>,
  planNumber: Scalars['String'],
  policyCover?: Maybe<PolicyCover>,
  policyType?: Maybe<PolicyType>,
  refNumber: Scalars['String'],
  reportData?: Maybe<Report>,
  reportForm?: Maybe<Form>,
  reportFormId?: Maybe<Scalars['ID']>,
  requireCustomLogin?: Maybe<Scalars['Boolean']>,
  restoration?: Maybe<ClaimPortfolio>,
  riskname?: Maybe<Scalars['String']>,
  specialistRequests?: Maybe<Array<Maybe<SpecialistRequest>>>,
  tenantDetails?: Maybe<Contact>,
};

export type ClaimJobConnection = {
   __typename?: 'ClaimJobConnection',
  edges?: Maybe<Array<Maybe<ClaimJobEdge>>>,
  items?: Maybe<Array<Maybe<ClaimJob>>>,
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

export type ClaimJobCreate = {
  refNumber: Scalars['String'],
  contentsRefNum?: Maybe<Scalars['String']>,
  claimDescription: Scalars['String'],
  insurerId: Scalars['ID'],
  mapRef?: Maybe<Scalars['String']>,
  lotNumber?: Maybe<Scalars['String']>,
  planNumber?: Maybe<Scalars['String']>,
  casemanagerId: Scalars['ID'],
  brcId?: Maybe<Scalars['ID']>,
  homeAssessorId?: Maybe<Scalars['ID']>,
  visitTypeID?: Maybe<Scalars['ID']>,
  externalLossAdjusterId?: Maybe<Scalars['ID']>,
  multipleRisks?: Maybe<Scalars['Boolean']>,
  riskname?: Maybe<Scalars['String']>,
  additionalRefNumber?: Maybe<Scalars['String']>,
  associatedRiskJobId?: Maybe<Scalars['Int']>,
  requireCustomLogin?: Maybe<Scalars['Boolean']>,
  customLoginEmail?: Maybe<Scalars['String']>,
  policyCoverId?: Maybe<Scalars['ID']>,
  policyTypeId?: Maybe<Scalars['ID']>,
  incidentDetail: IncidentDetailNewType,
  insured: ContactDetailInput,
  tenantDetails?: Maybe<ContactInput>,
  portfolios?: Maybe<Array<Maybe<ClaimPortfolioCreate>>>,
};

export type ClaimJobEdge = {
   __typename?: 'ClaimJobEdge',
  cursor: Scalars['String'],
  node?: Maybe<ClaimJob>,
};

export type ClaimJobFilter = {
  id?: Maybe<Scalars['ID']>,
  parentId?: Maybe<Scalars['ID']>,
  subject?: Maybe<Scalars['String']>,
  createDateFrom?: Maybe<Scalars['Date']>,
  createDateTo?: Maybe<Scalars['Date']>,
  incidentDate?: Maybe<Scalars['DateString']>,
  incidentDateFrom?: Maybe<Scalars['DateString']>,
  incidentDateTo?: Maybe<Scalars['DateString']>,
  keyWords?: Maybe<Scalars['String']>,
  refNumber?: Maybe<Scalars['String']>,
  postcode?: Maybe<Scalars['String']>,
  managerTeams?: Maybe<Array<Maybe<Scalars['String']>>>,
  managers?: Maybe<Array<Scalars['ID']>>,
  insurers?: Maybe<Array<Scalars['ID']>>,
  adjusters?: Maybe<Array<Scalars['ID']>>,
  catCodes?: Maybe<Array<Scalars['ID']>>,
  eventTypes?: Maybe<Array<Scalars['ID']>>,
  buildingSuppliers?: Maybe<Array<Scalars['ID']>>,
  contentsSuppliers?: Maybe<Array<Scalars['ID']>>,
  restorationSuppliers?: Maybe<Array<Scalars['ID']>>,
  buildingStatus?: Maybe<Array<Scalars['ID']>>,
  contentsStatus?: Maybe<Array<Scalars['ID']>>,
  restorationStatus?: Maybe<Array<Scalars['ID']>>,
  suppliers?: Maybe<Array<Scalars['ID']>>,
  status?: Maybe<Array<Scalars['ID']>>,
  internalAssessors?: Maybe<Array<Scalars['ID']>>,
  jobStatuses?: Maybe<Array<Scalars['ID']>>,
  claimStatusStageIds?: Maybe<Array<Scalars['ID']>>,
  portfolios?: Maybe<Array<Maybe<PortfolioType>>>,
  states?: Maybe<Array<Maybe<State>>>,
  variationStatuses?: Maybe<Array<Maybe<JobVariationStatus>>>,
  requestStatuses?: Maybe<Array<Maybe<QuoteRequestStatus>>>,
  recommendationStatus?: Maybe<Array<JobRecommendationStatus>>,
  or?: Maybe<ClaimJobFilter>,
  and?: Maybe<ClaimJobFilter>,
  not?: Maybe<ClaimJobFilter>,
};

export type ClaimJobGeneral = {
   __typename?: 'ClaimJobGeneral',
  caseManagerName: Scalars['String'],
  caseManagerTeam: Scalars['String'],
  claimId: Scalars['Int'],
  daysAtStatus?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  idenrifier: Scalars['String'],
  insuredName: Scalars['String'],
  insurerName: Scalars['String'],
  logDate: Scalars['DateString'],
  portfolioType: PortfolioType,
  refNumber: Scalars['String'],
  riskRegion?: Maybe<Scalars['String']>,
  riskState?: Maybe<State>,
  status?: Maybe<ClaimStatus>,
  supplierName?: Maybe<Scalars['String']>,
};

export type ClaimJobGeneralReportConnection = {
   __typename?: 'ClaimJobGeneralReportConnection',
  edges?: Maybe<Array<Maybe<ClaimJobGeneralReportEdge>>>,
  items?: Maybe<Array<Maybe<ClaimJobGeneral>>>,
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

export type ClaimJobGeneralReportEdge = {
   __typename?: 'ClaimJobGeneralReportEdge',
  cursor: Scalars['String'],
  node?: Maybe<ClaimJobGeneral>,
};

export type ClaimJobInput = {
  refNumber?: Maybe<Scalars['String']>,
  contentsRefNum?: Maybe<Scalars['String']>,
  additionalRefNumber?: Maybe<Scalars['String']>,
  claimDescription?: Maybe<Scalars['String']>,
  policyCoverId?: Maybe<Scalars['ID']>,
  policyTypeId?: Maybe<Scalars['ID']>,
  mapRef?: Maybe<Scalars['String']>,
  lotNumber?: Maybe<Scalars['String']>,
  planNumber?: Maybe<Scalars['String']>,
  eventTypeId?: Maybe<Scalars['ID']>,
  catCodeId?: Maybe<Scalars['ID']>,
  incidentDate?: Maybe<Scalars['DateString']>,
  habitableProperty?: Maybe<Scalars['Boolean']>,
  asbestos?: Maybe<Scalars['Boolean']>,
  hold?: Maybe<Scalars['Boolean']>,
  makeSafeRequired?: Maybe<Scalars['Boolean']>,
  casemanagerId?: Maybe<Scalars['ID']>,
  brcId?: Maybe<Scalars['ID']>,
  homeAssessorId?: Maybe<Scalars['ID']>,
  visitTypeId?: Maybe<Scalars['ID']>,
  externalLossAdjusterId?: Maybe<Scalars['ID']>,
  managedByENData?: Maybe<Scalars['Boolean']>,
  riskname?: Maybe<Scalars['String']>,
  multipleRisks?: Maybe<Scalars['Boolean']>,
  associatedRiskJobId?: Maybe<Scalars['Int']>,
  requireCustomLogin?: Maybe<Scalars['Boolean']>,
  customLoginEmail?: Maybe<Scalars['String']>,
  insuredSalutation?: Maybe<Scalars['PersonName']>,
  insuredName?: Maybe<Scalars['PersonName']>,
  insuredPhone1?: Maybe<Scalars['Phone']>,
  insuredPhone2?: Maybe<Scalars['Phone']>,
  insuredPhone3?: Maybe<Scalars['Phone']>,
  insuredFax?: Maybe<Scalars['Phone']>,
  insuredEmail?: Maybe<Scalars['Email']>,
  postalAddressLine1?: Maybe<Scalars['String']>,
  postalAddressLine2?: Maybe<Scalars['String']>,
  postalAddressSuburb?: Maybe<Scalars['String']>,
  postalAddressState?: Maybe<State>,
  postalAddressPostcode?: Maybe<Scalars['String']>,
  riskAddressLine1?: Maybe<Scalars['String']>,
  riskAddressLine2?: Maybe<Scalars['String']>,
  riskAddressSuburb?: Maybe<Scalars['String']>,
  riskAddressState?: Maybe<State>,
  riskAddressPostcode?: Maybe<Scalars['String']>,
  tenantName?: Maybe<Scalars['PersonName']>,
  tenantPhone1?: Maybe<Scalars['Phone']>,
  tenantPhone2?: Maybe<Scalars['Phone']>,
  tenantPhone3?: Maybe<Scalars['Phone']>,
  category?: Maybe<ClaimCategory>,
  portfolios?: Maybe<Array<Maybe<ClaimPortfolioInput>>>,
};

export type ClaimJobPayload = {
   __typename?: 'ClaimJobPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<ClaimJob>,
  success: Scalars['Boolean'],
};

export type ClaimJobStatusInfo = {
   __typename?: 'ClaimJobStatusInfo',
  datePopup: Scalars['Boolean'],
  description: Scalars['String'],
  nextStep: Scalars['String'],
  noteMessage: Scalars['String'],
  portfolioType?: Maybe<PortfolioType>,
  statusId: Scalars['Int'],
  statusName: Scalars['String'],
};

export type ClaimLossAdjusterDocument = {
   __typename?: 'ClaimLossAdjusterDocument',
  company?: Maybe<Company>,
  description: Scalars['String'],
  documentFileName: Scalars['String'],
  documentId: Scalars['Int'],
  id: Scalars['ID'],
  private: Scalars['Boolean'],
  reportType?: Maybe<LossAdjusterReportType>,
  uploadDate?: Maybe<Scalars['DateTimeString']>,
  url: Scalars['String'],
};

export type ClaimLossAdjusterDocumentConnection = {
   __typename?: 'ClaimLossAdjusterDocumentConnection',
  edges?: Maybe<Array<Maybe<ClaimLossAdjusterDocumentEdge>>>,
  items?: Maybe<Array<Maybe<ClaimLossAdjusterDocument>>>,
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

export type ClaimLossAdjusterDocumentCreate = {
  claimId: Scalars['ID'],
  description: Scalars['String'],
  documentFileName: Scalars['String'],
  fileBase64: Scalars['String'],
  fileId?: Maybe<Scalars['String']>,
  private: Scalars['Boolean'],
  reportTypeId?: Maybe<Scalars['Byte']>,
};

export type ClaimLossAdjusterDocumentEdge = {
   __typename?: 'ClaimLossAdjusterDocumentEdge',
  cursor: Scalars['String'],
  node?: Maybe<ClaimLossAdjusterDocument>,
};

export type ClaimLossAdjusterDocumentPayload = {
   __typename?: 'ClaimLossAdjusterDocumentPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<ClaimLossAdjusterDocument>,
  success: Scalars['Boolean'],
};

export type ClaimManager = {
   __typename?: 'ClaimManager',
  id: Scalars['ID'],
  managerId: Scalars['Int'],
  managerName: Scalars['String'],
  managerTeam?: Maybe<Scalars['String']>,
};

export type ClaimNote = {
   __typename?: 'ClaimNote',
  _privacy?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  jobNoteId: Scalars['Int'],
  logDate?: Maybe<Scalars['DateTimeString']>,
  message: Scalars['String'],
  portfolioType?: Maybe<PortfolioType>,
  private?: Maybe<Scalars['Byte']>,
  user?: Maybe<User>,
  userId: Scalars['Int'],
};

export type ClaimNoteConnection = {
   __typename?: 'ClaimNoteConnection',
  edges?: Maybe<Array<Maybe<ClaimNoteEdge>>>,
  items?: Maybe<Array<Maybe<ClaimNote>>>,
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

export type ClaimNoteCreate = {
  claimId: Scalars['ID'],
  message: Scalars['String'],
  visibleByInsurer?: Maybe<Scalars['Boolean']>,
  private?: Maybe<Scalars['Byte']>,
  portfolioType?: Maybe<PortfolioType>,
};

export type ClaimNoteEdge = {
   __typename?: 'ClaimNoteEdge',
  cursor: Scalars['String'],
  node?: Maybe<ClaimNote>,
};

export type ClaimNotePayload = {
   __typename?: 'ClaimNotePayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<ClaimNote>,
  success: Scalars['Boolean'],
};

export type ClaimParticipantIndex = {
  claimId: Scalars['ID'],
  postcode?: Maybe<Scalars['String']>,
  portfolioTypes?: Maybe<Array<Maybe<PortfolioType>>>,
  participantStatus?: Maybe<SupplierStatusFilter>,
  participantType?: Maybe<SupplierTypeFilter>,
};

export type ClaimPortfolio = {
   __typename?: 'ClaimPortfolio',
  _portfolioTooltips?: Maybe<Scalars['String']>,
  _providerAndStatus?: Maybe<Scalars['String']>,
  authorised: Scalars['Boolean'],
  authorisedSupplier?: Maybe<Company>,
  authorisedValue?: Maybe<Scalars['Decimal']>,
  claimCompleted: Scalars['Boolean'],
  claimRecommendation?: Maybe<ClaimRecommendation>,
  claimStatus?: Maybe<ClaimStatus>,
  dateAccecpted?: Maybe<Scalars['Date']>,
  dateCompleted?: Maybe<Scalars['Date']>,
  daysAtStatus?: Maybe<Scalars['Float']>,
  daysTakenToComplete?: Maybe<Scalars['Float']>,
  description: Scalars['String'],
  emergencyMakeSafeWorks?: Maybe<Scalars['Int']>,
  estimator?: Maybe<Estimator>,
  excessValue?: Maybe<Scalars['Int']>,
  finaliseReason?: Maybe<ClaimFinaliseReason>,
  insuranceCompletedSiteReport: Scalars['Boolean'],
  isReallocateSupplier: Scalars['Boolean'],
  jobSuppliers?: Maybe<Array<Maybe<JobSupplier>>>,
  lastContactInsured?: Maybe<Scalars['DateTimeString']>,
  lastStatusDate?: Maybe<Scalars['DateTimeString']>,
  makeSafeProgress?: Maybe<ClaimProgress>,
  makeSafeStatus?: Maybe<ClaimStatus>,
  makeSafeValue?: Maybe<Scalars['Decimal']>,
  makesafeCompletedDate?: Maybe<Scalars['Date']>,
  nextContactInsured?: Maybe<Scalars['DateTimeString']>,
  noPanelSupplier: Scalars['String'],
  policyCover?: Maybe<PolicyCover>,
  policyType?: Maybe<PolicyType>,
  portfolioType?: Maybe<PortfolioType>,
  progress?: Maybe<ClaimProgress>,
  reallocate: Scalars['Boolean'],
  reportDate?: Maybe<Scalars['DateString']>,
  scopePrepared: Scalars['Boolean'],
  scopedValue?: Maybe<Scalars['Decimal']>,
  scopingSupplier?: Maybe<Company>,
  settlementValue?: Maybe<Scalars['Float']>,
  siteReport?: Maybe<ClaimSiteReport>,
  siteReportDescription?: Maybe<Scalars['String']>,
  statusBeforeAwaitingInfo?: Maybe<ClaimStatus>,
  statusBeforeComplete?: Maybe<ClaimStatus>,
  sumInsured: Scalars['Int'],
  sumInsuredAdequate?: Maybe<Scalars['Int']>,
  supervisor?: Maybe<Supervisor>,
  supplierCollectedExcess?: Maybe<Scalars['Int']>,
  supplierJobStatus?: Maybe<ClaimStatus>,
  supplierJobValue?: Maybe<Scalars['Decimal']>,
  toCollectExcess?: Maybe<Scalars['Boolean']>,
  toProvideSiteReport: Scalars['Boolean'],
  userContactInsured?: Maybe<Scalars['Int']>,
  winningBuilderRecommend?: Maybe<Scalars['Int']>,
};

export type ClaimPortfolioCreate = {
  portfolioType: PortfolioType,
  toProvideSiteReport: Scalars['Boolean'],
  sumInsured: Scalars['Int'],
  excessValue: Scalars['Int'],
  toCollectExcess: Scalars['Boolean'],
  scopingSupplierId: Scalars['ID'],
  quotingSupplierIds?: Maybe<Array<Scalars['ID']>>,
};

export type ClaimPortfolioInput = {
  portfolioType: PortfolioType,
  policyCoverId?: Maybe<Scalars['ID']>,
  policyTypeId?: Maybe<Scalars['ID']>,
  description?: Maybe<Scalars['String']>,
  sumInsured?: Maybe<Scalars['Int']>,
  excessValue?: Maybe<Scalars['Int']>,
  toCollectExcess?: Maybe<Scalars['Boolean']>,
  quotingSupplierIds?: Maybe<Array<Scalars['ID']>>,
};

export type ClaimPortfolioPayload = {
   __typename?: 'ClaimPortfolioPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<ClaimPortfolio>,
  success: Scalars['Boolean'],
};

export type ClaimPortfoliosWhere = {
  claimId: Scalars['ID'],
  claimPortfolioTypes?: Maybe<Array<PortfolioType>>,
};

export type ClaimProgress = {
   __typename?: 'ClaimProgress',
  appointmentBooked: Scalars['Boolean'],
  appointmentDate?: Maybe<Scalars['DateTimeString']>,
  appointmentUserId?: Maybe<Scalars['Int']>,
  initialCallDate?: Maybe<Scalars['DateTimeString']>,
  initialCallMade: Scalars['Boolean'],
  initialCallUserId?: Maybe<Scalars['Int']>,
};

export type ClaimRecommendation = {
   __typename?: 'ClaimRecommendation',
  claimrecommendationid?: Maybe<Scalars['Byte']>,
  description: Scalars['String'],
};

export type ClaimReserveInput = {
  buildingReserve: Scalars['Decimal'],
  contentsReserve: Scalars['Decimal'],
};

export type ClaimSiteReport = {
   __typename?: 'ClaimSiteReport',
  claddingType?: Maybe<SiteCladdingType>,
  dwellingAge?: Maybe<SiteDwellingAge>,
  dwellingType?: Maybe<SiteDwellingType>,
  foundationType?: Maybe<SiteFoundationType>,
  houseType?: Maybe<SiteHouseType>,
  isAClaim?: Maybe<SiteIsAClaim>,
  roofType?: Maybe<SiteRoofType>,
};

export type ClaimStatus = {
   __typename?: 'ClaimStatus',
  statusId?: Maybe<Scalars['Int']>,
  statusName?: Maybe<Scalars['String']>,
};

export type ClaimStatusVolume = {
   __typename?: 'ClaimStatusVolume',
  claimCount: Scalars['Int'],
  color: Scalars['String'],
  id: Scalars['ID'],
  label: Scalars['String'],
};

export type ClaimStatusVolumeGroup = {
   __typename?: 'ClaimStatusVolumeGroup',
  claimPortfolioType: PortfolioType,
  id: Scalars['ID'],
  items: Array<ClaimStatusVolume>,
};

export type ClaimStatusVolumeWhere = {
  createDateFrom?: Maybe<Scalars['Date']>,
  createDateTo?: Maybe<Scalars['Date']>,
  incidentDate?: Maybe<Scalars['DateString']>,
  incidentDateFrom?: Maybe<Scalars['DateString']>,
  incidentDateTo?: Maybe<Scalars['DateString']>,
  keyWords?: Maybe<Scalars['String']>,
  managerTeams?: Maybe<Array<Maybe<Scalars['String']>>>,
  insurers?: Maybe<Array<Scalars['ID']>>,
  managers?: Maybe<Array<Scalars['ID']>>,
  adjusters?: Maybe<Array<Scalars['ID']>>,
  catCodes?: Maybe<Array<Scalars['ID']>>,
  eventTypes?: Maybe<Array<Scalars['ID']>>,
  buildingSuppliers?: Maybe<Array<Scalars['ID']>>,
  contentsSuppliers?: Maybe<Array<Scalars['ID']>>,
  restorationSuppliers?: Maybe<Array<Scalars['ID']>>,
  internalAssessors?: Maybe<Array<Scalars['ID']>>,
  states?: Maybe<Array<Maybe<State>>>,
  claimPortfolioType: PortfolioType,
};

export type ClaimUniqueWhere = {
  claimId: Scalars['ID'],
};

export type CommunicationFilter = {
  id?: Maybe<Scalars['ID']>,
  claimId?: Maybe<Scalars['ID']>,
  createDateFrom?: Maybe<Scalars['Date']>,
  createDateTo?: Maybe<Scalars['Date']>,
  keyWords?: Maybe<Scalars['String']>,
  managers?: Maybe<Array<Scalars['ID']>>,
  managerTeams?: Maybe<Array<Maybe<Scalars['String']>>>,
  internalAssessors?: Maybe<Array<Scalars['ID']>>,
  acknowledged?: Maybe<Scalars['Boolean']>,
  states?: Maybe<Array<Maybe<State>>>,
  boxes?: Maybe<Array<Maybe<ClaimCommunicationBox>>>,
  portfolios?: Maybe<Array<Maybe<PortfolioType>>>,
};

export type Company = {
   __typename?: 'Company',
  additionalRefNo?: Maybe<Scalars['Boolean']>,
  builderAttendSite?: Maybe<Scalars['Boolean']>,
  claimrecommendation?: Maybe<Scalars['Boolean']>,
  cm2nd?: Maybe<Scalars['Boolean']>,
  comboclaims?: Maybe<Scalars['Boolean']>,
  commOptionForBuilder?: Maybe<Scalars['Boolean']>,
  companyEmail?: Maybe<Scalars['String']>,
  companyFax?: Maybe<Scalars['String']>,
  companyId: Scalars['Int'],
  companyName: Scalars['String'],
  companyPhone1?: Maybe<Scalars['String']>,
  companyPhone2?: Maybe<Scalars['String']>,
  companyrates?: Maybe<Scalars['Int']>,
  companyType?: Maybe<AccessRole>,
  content?: Maybe<Scalars['Int']>,
  contentauth?: Maybe<Scalars['Boolean']>,
  contentsref?: Maybe<Scalars['Boolean']>,
  cropassess?: Maybe<Scalars['Boolean']>,
  defaultratesRestoration?: Maybe<Scalars['Int']>,
  defConsultBuildSiteReport?: Maybe<Scalars['Int']>,
  directSupplyTemplate?: Maybe<Scalars['Boolean']>,
  enableMultipleRisks?: Maybe<Scalars['Boolean']>,
  hideCaseManagerFromSiteReport?: Maybe<Scalars['Boolean']>,
  hideCategoryOfClaim?: Maybe<Scalars['Boolean']>,
  industryrates?: Maybe<Scalars['Int']>,
  insrefnumLength?: Maybe<Scalars['Byte']>,
  invoiceEmail?: Maybe<Scalars['Boolean']>,
  isAutoSelectSupplier: Scalars['Boolean'],
  isAwaitingInformation: Scalars['Boolean'],
  isFeeModule: Scalars['Boolean'],
  isLossAdjuster: Scalars['Boolean'],
  isMarginUpdate: Scalars['Boolean'],
  isReportingModule: Scalars['Boolean'],
  isSirModule: Scalars['Boolean'],
  isSpecialistModule: Scalars['Boolean'],
  isToProvideSiteReportView: Scalars['Boolean'],
  isVideoToolModule: Scalars['Boolean'],
  logoright?: Maybe<Scalars['String']>,
  lossadjcomp?: Maybe<Scalars['Int']>,
  lossAdjustCreateSiteReport?: Maybe<Scalars['Int']>,
  makesafeAppointmentmade?: Maybe<Scalars['Boolean']>,
  makesafeInitialcallmade?: Maybe<Scalars['Boolean']>,
  makesafeRstAppointmentmade?: Maybe<Scalars['Boolean']>,
  makesafeRstInitialcallmade?: Maybe<Scalars['Boolean']>,
  makesafeRstWorkscompleted?: Maybe<Scalars['Boolean']>,
  makesafeWorkscompleted?: Maybe<Scalars['Boolean']>,
  mitigation?: Maybe<Scalars['Boolean']>,
  nonPanelSupplier: Scalars['Boolean'],
  onCostPopUp?: Maybe<Scalars['Boolean']>,
  policy?: Maybe<Scalars['Boolean']>,
  policyCoverManditoryField?: Maybe<Scalars['Boolean']>,
  policyCoverSuppliersView?: Maybe<Scalars['Boolean']>,
  policylimit?: Maybe<Scalars['Boolean']>,
  policylimitperitem?: Maybe<Scalars['Boolean']>,
  policyTypeManditoryField?: Maybe<Scalars['Boolean']>,
  policyTypeSuppliersView?: Maybe<Scalars['Boolean']>,
  quickrepair?: Maybe<Scalars['Boolean']>,
  quotesperclaim?: Maybe<Scalars['Int']>,
  removeHabitableAsbestos?: Maybe<Scalars['Boolean']>,
  restoration?: Maybe<Scalars['Boolean']>,
  rrp?: Maybe<Scalars['Boolean']>,
  setupcustomerlogin?: Maybe<Scalars['Int']>,
  sitereporttemplateid?: Maybe<Scalars['Byte']>,
  substatus?: Maybe<Scalars['Boolean']>,
  useInternalAssessor: Scalars['Boolean'],
  useSirRestorationModule: Scalars['Boolean'],
  usesRestrictedAcceptance?: Maybe<Scalars['Boolean']>,
  waitingOptionForBuilder?: Maybe<Scalars['Boolean']>,
};

export type CompanyCustomisation = {
   __typename?: 'CompanyCustomisation',
  applicationAlias?: Maybe<Scalars['String']>,
  applicationFavicon?: Maybe<Scalars['String']>,
  applicationLogo?: Maybe<Scalars['String']>,
  displayCompanyLogo?: Maybe<Scalars['String']>,
  logoHeight?: Maybe<Scalars['Byte']>,
};

export type CompanyProfile = {
   __typename?: 'CompanyProfile',
  additionalRefNo?: Maybe<Scalars['Boolean']>,
  builderAttendSite?: Maybe<Scalars['Boolean']>,
  claimrecommendation?: Maybe<Scalars['Boolean']>,
  cm2nd?: Maybe<Scalars['Boolean']>,
  comboclaims?: Maybe<Scalars['Boolean']>,
  commOptionForBuilder?: Maybe<Scalars['Boolean']>,
  companyEmail?: Maybe<Scalars['String']>,
  companyFax?: Maybe<Scalars['String']>,
  companyId: Scalars['Int'],
  companyName: Scalars['String'],
  companyPhone1?: Maybe<Scalars['String']>,
  companyPhone2?: Maybe<Scalars['String']>,
  companyrates?: Maybe<Scalars['Int']>,
  companyType?: Maybe<AccessRole>,
  content?: Maybe<Scalars['Int']>,
  contentauth?: Maybe<Scalars['Boolean']>,
  contentsref?: Maybe<Scalars['Boolean']>,
  cropassess?: Maybe<Scalars['Boolean']>,
  customisation?: Maybe<CompanyCustomisation>,
  defaultratesRestoration?: Maybe<Scalars['Int']>,
  defConsultBuildSiteReport?: Maybe<Scalars['Int']>,
  directSupplyTemplate?: Maybe<Scalars['Boolean']>,
  enableMultipleRisks?: Maybe<Scalars['Boolean']>,
  hideCaseManagerFromSiteReport?: Maybe<Scalars['Boolean']>,
  hideCategoryOfClaim?: Maybe<Scalars['Boolean']>,
  industryrates?: Maybe<Scalars['Int']>,
  insrefnumLength?: Maybe<Scalars['Byte']>,
  invoiceEmail?: Maybe<Scalars['Boolean']>,
  isAutoSelectSupplier: Scalars['Boolean'],
  isAwaitingInformation: Scalars['Boolean'],
  isFeeModule: Scalars['Boolean'],
  isLossAdjuster: Scalars['Boolean'],
  isMarginUpdate: Scalars['Boolean'],
  isReportingModule: Scalars['Boolean'],
  isSirModule: Scalars['Boolean'],
  isSpecialistModule: Scalars['Boolean'],
  isToProvideSiteReportView: Scalars['Boolean'],
  isVideoToolModule: Scalars['Boolean'],
  logoright?: Maybe<Scalars['String']>,
  lossadjcomp?: Maybe<Scalars['Int']>,
  lossAdjustCreateSiteReport?: Maybe<Scalars['Int']>,
  makesafeAppointmentmade?: Maybe<Scalars['Boolean']>,
  makesafeInitialcallmade?: Maybe<Scalars['Boolean']>,
  makesafeRstAppointmentmade?: Maybe<Scalars['Boolean']>,
  makesafeRstInitialcallmade?: Maybe<Scalars['Boolean']>,
  makesafeRstWorkscompleted?: Maybe<Scalars['Boolean']>,
  makesafeWorkscompleted?: Maybe<Scalars['Boolean']>,
  mitigation?: Maybe<Scalars['Boolean']>,
  nonPanelSupplier: Scalars['Boolean'],
  onCostPopUp?: Maybe<Scalars['Boolean']>,
  policy?: Maybe<Scalars['Boolean']>,
  policyCoverManditoryField?: Maybe<Scalars['Boolean']>,
  policyCoverSuppliersView?: Maybe<Scalars['Boolean']>,
  policylimit?: Maybe<Scalars['Boolean']>,
  policylimitperitem?: Maybe<Scalars['Boolean']>,
  policyTypeManditoryField?: Maybe<Scalars['Boolean']>,
  policyTypeSuppliersView?: Maybe<Scalars['Boolean']>,
  quickrepair?: Maybe<Scalars['Boolean']>,
  quotesperclaim?: Maybe<Scalars['Int']>,
  removeHabitableAsbestos?: Maybe<Scalars['Boolean']>,
  restoration?: Maybe<Scalars['Boolean']>,
  rrp?: Maybe<Scalars['Boolean']>,
  setupcustomerlogin?: Maybe<Scalars['Int']>,
  sitereporttemplateid?: Maybe<Scalars['Byte']>,
  substatus?: Maybe<Scalars['Boolean']>,
  useInternalAssessor: Scalars['Boolean'],
  useSirRestorationModule: Scalars['Boolean'],
  usesRestrictedAcceptance?: Maybe<Scalars['Boolean']>,
  waitingOptionForBuilder?: Maybe<Scalars['Boolean']>,
};

export type Contact = {
   __typename?: 'Contact',
  name?: Maybe<Scalars['String']>,
  phone1?: Maybe<Scalars['String']>,
  phone2?: Maybe<Scalars['String']>,
  phone3?: Maybe<Scalars['String']>,
};

export type ContactDetail = {
   __typename?: 'ContactDetail',
  email?: Maybe<Scalars['String']>,
  fax?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  phone1?: Maybe<Scalars['String']>,
  phone2?: Maybe<Scalars['String']>,
  phone3?: Maybe<Scalars['String']>,
  postalAddress?: Maybe<Address>,
  salutation?: Maybe<Scalars['String']>,
};

export type ContactDetailInput = {
  name?: Maybe<Scalars['String']>,
  phone1?: Maybe<Scalars['String']>,
  phone2?: Maybe<Scalars['String']>,
  phone3?: Maybe<Scalars['String']>,
  salutation?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  fax?: Maybe<Scalars['String']>,
  postalAddress?: Maybe<AddressInput>,
};

export type ContactInput = {
  name?: Maybe<Scalars['String']>,
  phone1?: Maybe<Scalars['String']>,
  phone2?: Maybe<Scalars['String']>,
  phone3?: Maybe<Scalars['String']>,
};

export type Dashboard = {
   __typename?: 'Dashboard',
  dashboardId: Scalars['Int'],
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type DashboardWidgetIndex = {
  dashboardId: Scalars['Int'],
  filter?: Maybe<CaseReportFilter>,
};

export enum DataDisplay {
  Text = 'Text',
  ChartGraph = 'ChartGraph',
  ChartLine = 'ChartLine',
  ChartBar = 'ChartBar',
  ChartProgressBar = 'ChartProgressBar'
}

export enum DataSense {
  Neutral = 'Neutral',
  Commendatory = 'Commendatory',
  Derogatory = 'Derogatory'
}

export enum DataUnit {
  Number = 'Number',
  Currency = 'Currency'
}


export enum DateRangeOption {
  UnDefined = 'UnDefined',
  Daily = 'Daily',
  Weekly = 'Weekly',
  Monthly = 'Monthly',
  Yearly = 'Yearly',
  Today = 'Today',
  Month = 'Month',
  Week = 'Week',
  Annual = 'Annual',
  Quarter = 'Quarter',
  FinancialYear = 'FinancialYear'
}



export type DateTimeField = Field & {
   __typename?: 'DateTimeField',
  id: Scalars['ID'],
  order?: Maybe<Scalars['Int']>,
  grid?: Maybe<Scalars['Grid']>,
  label?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};





export type EnDataEntityKey = {
  id: Scalars['ID'],
};

export type EnDataPortfolioKey = {
  id: Scalars['ID'],
  portfolioType: PortfolioType,
};

export type EntityFieldError = {
   __typename?: 'EntityFieldError',
  fieldName: Scalars['String'],
  level?: Maybe<LogLevel>,
  message: Scalars['String'],
};

export type Estimator = {
   __typename?: 'Estimator',
  companyId: Scalars['Int'],
  estimatorId: Scalars['Int'],
  id: Scalars['ID'],
  initials?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  portfolioType?: Maybe<PortfolioType>,
};

export type EstimatorConnection = {
   __typename?: 'EstimatorConnection',
  edges?: Maybe<Array<Maybe<EstimatorEdge>>>,
  items?: Maybe<Array<Maybe<Estimator>>>,
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

export type EstimatorCreateInput = {
  name: Scalars['String'],
  initials?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  companyId?: Maybe<Scalars['Int']>,
  portfolioType?: Maybe<PortfolioType>,
};

export type EstimatorEdge = {
   __typename?: 'EstimatorEdge',
  cursor: Scalars['String'],
  node?: Maybe<Estimator>,
};

export type EstimatorPayload = {
   __typename?: 'EstimatorPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<Estimator>,
  success: Scalars['Boolean'],
};

export type EstimatorUpdateInput = {
  name?: Maybe<Scalars['String']>,
  initials?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
};

export type FeeAmount = {
   __typename?: 'FeeAmount',
  defaultAmount?: Maybe<Scalars['Decimal']>,
  id: Scalars['ID'],
  maxAmount?: Maybe<Scalars['Decimal']>,
  supplierId: Scalars['Int'],
  supplierName: Scalars['String'],
};

export type FeeCategory = {
   __typename?: 'FeeCategory',
  claimPortfolioType?: Maybe<PortfolioType>,
  feeCategoryId: Scalars['Int'],
  feeItems?: Maybe<Array<Maybe<FeeItem>>>,
  feeItemsAggregate?: Maybe<AggregateFeeItem>,
  feeTypes: Array<Maybe<FeeType>>,
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type FeeCategoryWhere = {
  claimId: Scalars['ID'],
  claimPortfolioTypes?: Maybe<Array<PortfolioType>>,
};

export type FeeInvoice = {
   __typename?: 'FeeInvoice',
  actions: Array<Maybe<Action>>,
  amount?: Maybe<Scalars['Decimal']>,
  document?: Maybe<File>,
  feeInvoiceId: Scalars['Int'],
  feeInvoiceStatus?: Maybe<FeeInvoiceStatus>,
  feeItemInvoices?: Maybe<Array<Maybe<FeeInvoiceItem>>>,
  id: Scalars['ID'],
  number: Scalars['String'],
};

export type FeeInvoiceItem = {
   __typename?: 'FeeInvoiceItem',
  amount: Scalars['Decimal'],
  feeItemInvoiceId: Scalars['String'],
  feeItemName: Scalars['String'],
  id: Scalars['ID'],
};

export type FeeInvoicePayload = {
   __typename?: 'FeeInvoicePayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<FeeInvoice>,
  success: Scalars['Boolean'],
};

export type FeeInvoiceStatus = {
   __typename?: 'FeeInvoiceStatus',
  id: Scalars['ID'],
  invoiceStatusId: Scalars['Int'],
  name: Scalars['String'],
  type: Scalars['String'],
};

export type FeeInvoiceStatusWhere = {
  claimId: Scalars['ID'],
};

export type FeeInvoiceUniqueWhere = {
  feeInvoiceId: Scalars['Int'],
};

export type FeeInvoiceUpdateInput = {
  feeInvoiceStatusId: Scalars['Int'],
};

export type FeeInvoiceUploadInput = {
  invoiceNumber: Scalars['String'],
  invoiceAmount: Scalars['Decimal'],
  description: Scalars['String'],
  private?: Maybe<Scalars['Boolean']>,
  visibleByInsurer?: Maybe<Scalars['Boolean']>,
  fileId?: Maybe<Scalars['String']>,
  fileName: Scalars['String'],
  fileBase64: Scalars['String'],
};

export type FeeInvoiceUploadWhere = {
  feeItemIds: Array<Scalars['Int']>,
};

export type FeeItem = {
   __typename?: 'FeeItem',
  actions: Array<Maybe<Action>>,
  authorisedAmount?: Maybe<Scalars['Decimal']>,
  claimPortfolioType?: Maybe<PortfolioType>,
  description?: Maybe<Scalars['String']>,
  feeItemId: Scalars['Int'],
  feeItemInvoices?: Maybe<Array<Maybe<FeeItemInvoice>>>,
  feeType?: Maybe<FeeType>,
  id: Scalars['ID'],
  logDate?: Maybe<Scalars['DateTimeString']>,
  maxAmount?: Maybe<Scalars['Decimal']>,
  supplier?: Maybe<Company>,
  toBeInvoicedAmount?: Maybe<Scalars['Decimal']>,
};

export type FeeItemCreateInput = {
  claimId: Scalars['ID'],
  feeTypeId: Scalars['Int'],
  authorisedAmount: Scalars['Decimal'],
  supplierId?: Maybe<Scalars['Int']>,
};

export type FeeItemEditInput = {
  authorisedAmount: Scalars['Decimal'],
};

export type FeeItemInvoice = {
   __typename?: 'FeeItemInvoice',
  amount: Scalars['Decimal'],
  feeInvoice?: Maybe<FeeInvoice>,
  feeItemInvoiceId: Scalars['String'],
  id: Scalars['ID'],
};

export type FeeItemPayload = {
   __typename?: 'FeeItemPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<FeeItem>,
  success: Scalars['Boolean'],
};

export type FeeItemUniqueWhere = {
  feeItemId: Scalars['Int'],
};

export type FeeItemWhere = {
  claimId: Scalars['ID'],
  availableToBulkInvoice: Scalars['Boolean'],
  claimPortfolioTypes?: Maybe<Array<PortfolioType>>,
};

export type FeePortfolio = {
   __typename?: 'FeePortfolio',
  actions: Array<Maybe<Action>>,
  feeCategories?: Maybe<Array<Maybe<FeeCategory>>>,
  feeCategoriesAggregate?: Maybe<AggregateFeeCategory>,
  feePortfolioId: Scalars['Int'],
  id: Scalars['ID'],
};

export type FeeTab = {
   __typename?: 'FeeTab',
  id: Scalars['ID'],
  isDisplay: Scalars['Boolean'],
};

export type FeeType = {
   __typename?: 'FeeType',
  feeTypeId: Scalars['Int'],
  id: Scalars['ID'],
  name: Scalars['String'],
  negativeFee: Scalars['Boolean'],
  suppliers?: Maybe<Array<Maybe<Company>>>,
  suppliersAndAmounts?: Maybe<Array<Maybe<FeeAmount>>>,
};

export type Field = {
  id: Scalars['ID'],
  label?: Maybe<Scalars['String']>,
  order?: Maybe<Scalars['Int']>,
  grid?: Maybe<Scalars['Grid']>,
};

export type File = {
   __typename?: 'File',
  fileId: Scalars['Int'],
  id: Scalars['ID'],
  name: Scalars['String'],
  url: Scalars['String'],
};

export type FileField = Field & {
   __typename?: 'FileField',
  id: Scalars['ID'],
  order?: Maybe<Scalars['Int']>,
  grid?: Maybe<Scalars['Grid']>,
  label?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type FilterElement = {
   __typename?: 'FilterElement',
  displayByDefault: Scalars['Boolean'],
  id: Scalars['String'],
  name: Scalars['String'],
  options?: Maybe<Array<Maybe<FilterOption>>>,
  value?: Maybe<Scalars['String']>,
};

export type FilterInput = {
   __typename?: 'FilterInput',
  icon?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isDisabled: Scalars['Boolean'],
  label?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  options?: Maybe<Array<Maybe<FilterInputOption>>>,
  type: FilterType,
};

export type FilterInputOption = {
   __typename?: 'FilterInputOption',
  group?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  label: Scalars['String'],
};

export type FilterOption = {
   __typename?: 'FilterOption',
  group?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  value: Scalars['String'],
};

export enum FilterType {
  Text = 'Text',
  Date = 'Date',
  Time = 'Time',
  DateTime = 'DateTime',
  Select = 'Select',
  SelectMultiple = 'Select_multiple',
  ComboBox = 'ComboBox',
  ComboBoxMultiple = 'ComboBox_multiple',
  Search = 'Search'
}

export type FinaliseClaimInput = {
  finaliseReasonId: Scalars['Int'],
  settlementValue?: Maybe<Scalars['Float']>,
  noPanelSupplier?: Maybe<Scalars['String']>,
  dateCompleted?: Maybe<Scalars['DateString']>,
};

export type FollowUpClaimInputType = {
  note: Scalars['String'],
  lastFollowUpDate: Scalars['DateTimeString'],
  nextFollowUpDate?: Maybe<Scalars['DateTimeString']>,
};

export type Form = {
   __typename?: 'Form',
  cards?: Maybe<Array<Card>>,
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type GeneralPayload = {
   __typename?: 'GeneralPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  success: Scalars['Boolean'],
};


export type GroupField = Field & {
   __typename?: 'GroupField',
  id: Scalars['ID'],
  order?: Maybe<Scalars['Int']>,
  grid?: Maybe<Scalars['Grid']>,
  label?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  fields?: Maybe<Array<Field>>,
};

export type HaTypeVisit = {
   __typename?: 'HATypeVisit',
  id: Scalars['ID'],
  typeVisitId: Scalars['Int'],
  visitName: Scalars['String'],
};

export type IncidentDetail = {
   __typename?: 'IncidentDetail',
  asbestos?: Maybe<Scalars['Boolean']>,
  cATCode?: Maybe<CatCode>,
  category?: Maybe<ClaimCategory>,
  eventType?: Maybe<IncidentEvent>,
  habitableProperty?: Maybe<Scalars['Boolean']>,
  hold: Scalars['Boolean'],
  incidentDate?: Maybe<Scalars['DateString']>,
  makeSafeRequired: Scalars['Boolean'],
  riskAddress?: Maybe<Address>,
};

export type IncidentDetailNewType = {
  eventTypeId: Scalars['ID'],
  catCodeId: Scalars['ID'],
  habitableProperty?: Maybe<Scalars['Boolean']>,
  asbestos?: Maybe<Scalars['Boolean']>,
  hold?: Maybe<Scalars['Boolean']>,
  makeSafeRequired: Scalars['Boolean'],
  incidentDate: Scalars['DateString'],
  riskAddress: AddressInput,
  category?: Maybe<ClaimCategory>,
};

export type IncidentEvent = {
   __typename?: 'IncidentEvent',
  eventName: Scalars['String'],
  eventTypeId: Scalars['Int'],
};

export type InfoField = Field & {
   __typename?: 'InfoField',
  id: Scalars['ID'],
  order?: Maybe<Scalars['Int']>,
  grid?: Maybe<Scalars['Grid']>,
  label?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type InternalAssesor = {
   __typename?: 'InternalAssesor',
  assesorId: Scalars['Int'],
  assesorName: Scalars['String'],
  id: Scalars['ID'],
};

export type InternalAssesorConnection = {
   __typename?: 'InternalAssesorConnection',
  edges?: Maybe<Array<Maybe<InternalAssesorEdge>>>,
  items?: Maybe<Array<Maybe<InternalAssesor>>>,
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

export type InternalAssesorEdge = {
   __typename?: 'InternalAssesorEdge',
  cursor: Scalars['String'],
  node?: Maybe<InternalAssesor>,
};

export type JobContentAuthoriseInput = {
  authorisedItems: Array<Scalars['Int']>,
  deliveryChargeUsed: Scalars['Boolean'],
};

export type JobContentItemCreate = {
  costCentreId: Scalars['Int'],
  costItemId: Scalars['Int'],
  lineDescription: Scalars['String'],
  locationId: Scalars['Int'],
  dimensions?: Maybe<Scalars['String']>,
  proofOfLoss?: Maybe<Scalars['String']>,
  directsupply?: Maybe<Scalars['Boolean']>,
  purchasePrice?: Maybe<Scalars['String']>,
  ageOfItem?: Maybe<Scalars['String']>,
  policyLimit?: Maybe<Scalars['Decimal']>,
  qty: Scalars['Decimal'],
  rate: Scalars['Decimal'],
};

export type JobContentItemsCreate = {
  jobQuoteId: Scalars['Int'],
  items?: Maybe<Array<Maybe<JobContentItemCreate>>>,
};

export type JobContentRemoveAuthorityInput = {
  items: Array<Scalars['Int']>,
};

export type JobMakeSafe = {
   __typename?: 'JobMakeSafe',
  approvedDate?: Maybe<Scalars['DateTimeString']>,
  completed: Scalars['Boolean'],
  description: Scalars['String'],
  gst?: Maybe<Scalars['Decimal']>,
  id: Scalars['ID'],
  invoiced: Scalars['Boolean'],
  lineItems?: Maybe<Array<Maybe<JobMakeSafeItem>>>,
  logdate: Scalars['DateString'],
  makeSafeId: Scalars['Int'],
  margin?: Maybe<Scalars['Decimal']>,
  portfolioType?: Maybe<PortfolioType>,
  quoteStatus?: Maybe<ClaimStatus>,
  requestScopePriceAdjust: Scalars['Boolean'],
  reviewed: Scalars['Boolean'],
  subtotal?: Maybe<Scalars['Decimal']>,
  supplier?: Maybe<Company>,
  total?: Maybe<Scalars['Decimal']>,
};

export type JobMakeSafeConnection = {
   __typename?: 'JobMakeSafeConnection',
  edges?: Maybe<Array<Maybe<JobMakeSafeEdge>>>,
  items?: Maybe<Array<Maybe<JobMakeSafe>>>,
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

export type JobMakeSafeEdge = {
   __typename?: 'JobMakeSafeEdge',
  cursor: Scalars['String'],
  node?: Maybe<JobMakeSafe>,
};

export type JobMakeSafeIndex = {
  id?: Maybe<Array<Maybe<Scalars['Int']>>>,
  claimId?: Maybe<Scalars['ID']>,
  createDateFrom?: Maybe<Scalars['Date']>,
  createDateTo?: Maybe<Scalars['Date']>,
  portfolios?: Maybe<Array<Maybe<PortfolioType>>>,
};

export type JobMakeSafeItem = {
   __typename?: 'JobMakeSafeItem',
  costCentre?: Maybe<QuoteCostCentre>,
  costItem?: Maybe<QuoteCostItem>,
  dimensions?: Maybe<Scalars['String']>,
  gst?: Maybe<Scalars['Decimal']>,
  id: Scalars['ID'],
  lineDescription: Scalars['String'],
  location?: Maybe<QuoteCostLocation>,
  logdate: Scalars['DateString'],
  makeSafeId: Scalars['Int'],
  makeSafeItemId: Scalars['Int'],
  margin?: Maybe<Scalars['Decimal']>,
  marginRate: Scalars['Decimal'],
  qty: Scalars['Decimal'],
  rate?: Maybe<Scalars['Decimal']>,
  subtotal?: Maybe<Scalars['Decimal']>,
  total?: Maybe<Scalars['Decimal']>,
  unit?: Maybe<QuoteItemUnit>,
};

export type JobMakeSafeItemPayload = {
   __typename?: 'JobMakeSafeItemPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<JobMakeSafeItem>,
  success: Scalars['Boolean'],
};

export type JobMakeSafeItemsCreate = {
  claimId: Scalars['ID'],
  portfolioType: PortfolioType,
  items?: Maybe<Array<Maybe<QuoteItemCreate>>>,
};

export type JobMakeSafeItemsPayload = {
   __typename?: 'JobMakeSafeItemsPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<Array<Maybe<JobMakeSafeItem>>>,
  success: Scalars['Boolean'],
};

export type JobMakeSafePayload = {
   __typename?: 'JobMakeSafePayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<JobMakeSafe>,
  success: Scalars['Boolean'],
};

export type JobProgress = {
   __typename?: 'JobProgress',
  claimJobId: Scalars['Int'],
  completed: Scalars['Boolean'],
  id: Scalars['ID'],
  jobProgressId: Scalars['Int'],
  jobQuoteId?: Maybe<Scalars['Int']>,
  logdate?: Maybe<Scalars['DateTimeString']>,
  portfolioType?: Maybe<PortfolioType>,
  status?: Maybe<ClaimJobStatusInfo>,
  statusdate?: Maybe<Scalars['DateTimeString']>,
  user?: Maybe<User>,
};

export type JobProgressConnection = {
   __typename?: 'JobProgressConnection',
  edges?: Maybe<Array<Maybe<JobProgressEdge>>>,
  items?: Maybe<Array<Maybe<JobProgress>>>,
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

export type JobProgressEdge = {
   __typename?: 'JobProgressEdge',
  cursor: Scalars['String'],
  node?: Maybe<JobProgress>,
};

export type JobProgressPayload = {
   __typename?: 'JobProgressPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<JobProgress>,
  success: Scalars['Boolean'],
};

export type JobQuote = {
   __typename?: 'JobQuote',
  approved?: Maybe<Scalars['Boolean']>,
  approvedDate?: Maybe<Scalars['DateTimeString']>,
  collectExcess?: Maybe<Scalars['Boolean']>,
  completed: Scalars['Boolean'],
  contentsInitialCall?: Maybe<Scalars['Boolean']>,
  contentsInitialCallDate?: Maybe<Scalars['DateTimeString']>,
  contentsValidationService?: Maybe<Scalars['Boolean']>,
  costCentres?: Maybe<Array<Maybe<JobQuoteItemCostCentreGroup>>>,
  deliveryCharges?: Maybe<Scalars['Decimal']>,
  deliveryChargeUsed: Scalars['Boolean'],
  description: Scalars['String'],
  estimatedTimeForRepairs?: Maybe<Scalars['String']>,
  gst?: Maybe<Scalars['Decimal']>,
  id: Scalars['ID'],
  jobQuoteId: Scalars['Int'],
  lineItems?: Maybe<Array<Maybe<JobQuoteItem>>>,
  logdate: Scalars['DateString'],
  margin?: Maybe<Scalars['Decimal']>,
  notAcceptedItems?: Maybe<Array<Maybe<JobQuoteItem>>>,
  originalTotal?: Maybe<Scalars['Decimal']>,
  portfolioType?: Maybe<PortfolioType>,
  quoteJobStatus?: Maybe<ClaimStatus>,
  quoteStatus?: Maybe<ClaimStatus>,
  quoteType?: Maybe<QuoteRequestType>,
  recommended: Scalars['Boolean'],
  requestScopePriceAdjust?: Maybe<Scalars['Boolean']>,
  reviewed: Scalars['Boolean'],
  sirGst?: Maybe<Scalars['Decimal']>,
  sirMargin?: Maybe<Scalars['Decimal']>,
  sirSubtotal?: Maybe<Scalars['Decimal']>,
  sirTotal?: Maybe<Scalars['Decimal']>,
  startAfterContractReceived?: Maybe<Scalars['String']>,
  subtotal?: Maybe<Scalars['Decimal']>,
  supplier?: Maybe<Company>,
  total?: Maybe<Scalars['Decimal']>,
};

export type JobQuoteAuthoriseInput = {
  notAcceptedItemIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type JobQuoteCompleteInput = {
  startAfterContractReceived?: Maybe<Scalars['String']>,
  estimatedTimeForRepairs?: Maybe<Scalars['String']>,
  deliveryCharges?: Maybe<Scalars['Decimal']>,
  claimRecommendationId?: Maybe<Scalars['Byte']>,
};

export type JobQuoteConnection = {
   __typename?: 'JobQuoteConnection',
  edges?: Maybe<Array<Maybe<JobQuoteEdge>>>,
  items?: Maybe<Array<Maybe<JobQuote>>>,
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

export type JobQuoteEdge = {
   __typename?: 'JobQuoteEdge',
  cursor: Scalars['String'],
  node?: Maybe<JobQuote>,
};

export type JobQuoteIndex = {
  id?: Maybe<Array<Maybe<Scalars['Int']>>>,
  claimId?: Maybe<Scalars['ID']>,
  createDateFrom?: Maybe<Scalars['Date']>,
  createDateTo?: Maybe<Scalars['Date']>,
  portfolios?: Maybe<Array<Maybe<PortfolioType>>>,
  requestTypes?: Maybe<Array<Maybe<QuoteRequestType>>>,
  requestCategory?: Maybe<RequestCategory>,
};

export type JobQuoteItem = {
   __typename?: 'JobQuoteItem',
  accepted: Scalars['Boolean'],
  ageOfItem?: Maybe<Scalars['String']>,
  authorised?: Maybe<Scalars['Boolean']>,
  authorisedDate?: Maybe<Scalars['DateTimeString']>,
  authorisedSupplierId?: Maybe<Scalars['Int']>,
  costCentre?: Maybe<QuoteCostCentre>,
  costItem?: Maybe<QuoteCostItem>,
  dimensions?: Maybe<Scalars['String']>,
  directsupply: Scalars['Boolean'],
  gst?: Maybe<Scalars['Decimal']>,
  id: Scalars['ID'],
  jobQuoteId: Scalars['Int'],
  jobQuoteItemId: Scalars['Int'],
  lineDescription: Scalars['String'],
  location?: Maybe<QuoteCostLocation>,
  logdate: Scalars['DateString'],
  margin?: Maybe<Scalars['Decimal']>,
  marginRate: Scalars['Decimal'],
  policyLimit?: Maybe<Scalars['Decimal']>,
  proofOfLoss?: Maybe<Scalars['String']>,
  purchasePrice?: Maybe<Scalars['String']>,
  qty: Scalars['Decimal'],
  rate?: Maybe<Scalars['Decimal']>,
  requestedQuote: Scalars['Boolean'],
  scopeItemId?: Maybe<Scalars['Int']>,
  sirGst?: Maybe<Scalars['Decimal']>,
  sirMargin?: Maybe<Scalars['Decimal']>,
  sirMarginRate: Scalars['String'],
  sirRate?: Maybe<Scalars['Decimal']>,
  sirSubtotal?: Maybe<Scalars['Decimal']>,
  sirTotal?: Maybe<Scalars['Decimal']>,
  substitutename?: Maybe<Scalars['String']>,
  subtotal?: Maybe<Scalars['Decimal']>,
  total?: Maybe<Scalars['Decimal']>,
  unit?: Maybe<QuoteItemUnit>,
};

export type JobQuoteItemCostCentreGroup = {
   __typename?: 'JobQuoteItemCostCentreGroup',
  costCentre?: Maybe<QuoteCostCentre>,
  firstLineItemId: Scalars['Int'],
  id: Scalars['ID'],
  sirSubtotal?: Maybe<Scalars['Decimal']>,
  subtotal?: Maybe<Scalars['Decimal']>,
};

export type JobQuoteItemPayload = {
   __typename?: 'JobQuoteItemPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<JobQuoteItem>,
  success: Scalars['Boolean'],
};

export type JobQuoteItemsCreate = {
  jobQuoteId: Scalars['Int'],
  portfolioType: PortfolioType,
  items?: Maybe<Array<Maybe<QuoteItemCreate>>>,
};

export type JobQuoteItemsPayload = {
   __typename?: 'JobQuoteItemsPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<Array<Maybe<JobQuoteItem>>>,
  success: Scalars['Boolean'],
};

export type JobQuoteItemUpdate = {
  costCentreId?: Maybe<Scalars['Int']>,
  costItemId?: Maybe<Scalars['Int']>,
  locationId?: Maybe<Scalars['Int']>,
  dimensions?: Maybe<Scalars['String']>,
  lineDescription?: Maybe<Scalars['String']>,
  qty?: Maybe<Scalars['Decimal']>,
  rate?: Maybe<Scalars['Decimal']>,
  proofOfLoss?: Maybe<Scalars['String']>,
  directsupply?: Maybe<Scalars['Boolean']>,
  purchasePrice?: Maybe<Scalars['String']>,
  ageOfItem?: Maybe<Scalars['String']>,
  policyLimit?: Maybe<Scalars['Decimal']>,
  substitutename?: Maybe<Scalars['String']>,
};

export type JobQuotePayload = {
   __typename?: 'JobQuotePayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<JobQuote>,
  success: Scalars['Boolean'],
};

export enum JobRecommendationStatus {
  NotRecommended = 'NotRecommended'
}

export type JobSupplier = {
   __typename?: 'JobSupplier',
  authorised: Scalars['Boolean'],
  id: Scalars['ID'],
  jobSupplierId: Scalars['Int'],
  quote?: Maybe<JobQuote>,
  quoteSubmitDate?: Maybe<Scalars['Date']>,
  requestDate?: Maybe<Scalars['DateString']>,
  requestType?: Maybe<Scalars['String']>,
  supplier?: Maybe<Company>,
};

export type JobVariation = {
   __typename?: 'JobVariation',
  approvedDate?: Maybe<Scalars['DateTimeString']>,
  completed: Scalars['Boolean'],
  completedDate?: Maybe<Scalars['DateTimeString']>,
  description: Scalars['String'],
  gst?: Maybe<Scalars['Decimal']>,
  id: Scalars['ID'],
  lineItems?: Maybe<Array<Maybe<JobVariationItem>>>,
  logdate: Scalars['DateString'],
  margin?: Maybe<Scalars['Decimal']>,
  notAcceptedItems?: Maybe<Array<Maybe<JobVariationItem>>>,
  portfolioType?: Maybe<PortfolioType>,
  quoteId?: Maybe<Scalars['Int']>,
  subtotal?: Maybe<Scalars['Decimal']>,
  supplier?: Maybe<Company>,
  total?: Maybe<Scalars['Decimal']>,
  variationDescription: Scalars['String'],
  variationId: Scalars['Int'],
  variationReason?: Maybe<JobVariationReason>,
  variationStatus?: Maybe<Scalars['String']>,
  variationTitle: Scalars['String'],
};

export type JobVariationAuditInput = {
  notAcceptedItemIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
  auditToStatus: JobVariationStatus,
};

export type JobVariationConnection = {
   __typename?: 'JobVariationConnection',
  edges?: Maybe<Array<Maybe<JobVariationEdge>>>,
  items?: Maybe<Array<Maybe<JobVariation>>>,
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

export type JobVariationCreate = {
  variationTitle: Scalars['String'],
  variationDescription: Scalars['String'],
  variationReasonId: Scalars['Int'],
  claimJobId: Scalars['ID'],
  portfolioType?: Maybe<PortfolioType>,
};

export type JobVariationEdge = {
   __typename?: 'JobVariationEdge',
  cursor: Scalars['String'],
  node?: Maybe<JobVariation>,
};

export type JobVariationIndex = {
  id?: Maybe<Array<Maybe<Scalars['Int']>>>,
  claimId?: Maybe<Scalars['ID']>,
  createDateFrom?: Maybe<Scalars['Date']>,
  createDateTo?: Maybe<Scalars['Date']>,
  portfolios?: Maybe<Array<Maybe<PortfolioType>>>,
};

export type JobVariationItem = {
   __typename?: 'JobVariationItem',
  accepted: Scalars['Boolean'],
  costCentre?: Maybe<QuoteCostCentre>,
  costItem?: Maybe<QuoteCostItem>,
  dimensions?: Maybe<Scalars['String']>,
  gst?: Maybe<Scalars['Decimal']>,
  id: Scalars['ID'],
  lineDescription: Scalars['String'],
  location?: Maybe<QuoteCostLocation>,
  logdate: Scalars['DateString'],
  margin?: Maybe<Scalars['Decimal']>,
  marginRate: Scalars['Decimal'],
  qty: Scalars['Decimal'],
  rate?: Maybe<Scalars['Decimal']>,
  subtotal?: Maybe<Scalars['Decimal']>,
  total?: Maybe<Scalars['Decimal']>,
  unit?: Maybe<QuoteItemUnit>,
  variationId: Scalars['Int'],
  variationItemId: Scalars['Int'],
};

export type JobVariationItemPayload = {
   __typename?: 'JobVariationItemPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<JobVariationItem>,
  success: Scalars['Boolean'],
};

export type JobVariationItemsCreate = {
  variationId: Scalars['Int'],
  portfolioType: PortfolioType,
  items?: Maybe<Array<Maybe<QuoteItemCreate>>>,
};

export type JobVariationItemsPayload = {
   __typename?: 'JobVariationItemsPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<Array<Maybe<JobVariationItem>>>,
  success: Scalars['Boolean'],
};

export type JobVariationPayload = {
   __typename?: 'JobVariationPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<JobVariation>,
  success: Scalars['Boolean'],
};

export type JobVariationReason = {
   __typename?: 'JobVariationReason',
  reasonDescription: Scalars['String'],
  variationReasonId?: Maybe<Scalars['Byte']>,
};

export enum JobVariationStatus {
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected',
  Reset = 'Reset'
}

export type JobWorkOrder = {
   __typename?: 'JobWorkOrder',
  approvedDate?: Maybe<Scalars['DateTimeString']>,
  costCentres?: Maybe<Array<Maybe<JobWorkOrderItemCostCentreGroup>>>,
  description: Scalars['String'],
  gst?: Maybe<Scalars['Decimal']>,
  id: Scalars['ID'],
  jobWorkOrderId: Scalars['Int'],
  lineItems?: Maybe<Array<Maybe<JobWorkOrderItem>>>,
  logdate: Scalars['DateString'],
  margin?: Maybe<Scalars['Decimal']>,
  portfolioType?: Maybe<PortfolioType>,
  quoteStatus?: Maybe<ClaimStatus>,
  subtotal?: Maybe<Scalars['Decimal']>,
  supplier?: Maybe<Company>,
  total?: Maybe<Scalars['Decimal']>,
};

export type JobWorkOrderConnection = {
   __typename?: 'JobWorkOrderConnection',
  edges?: Maybe<Array<Maybe<JobWorkOrderEdge>>>,
  items?: Maybe<Array<Maybe<JobWorkOrder>>>,
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

export type JobWorkOrderDateInput = {
  startDate?: Maybe<Scalars['DateString']>,
  completeDate?: Maybe<Scalars['DateString']>,
};

export type JobWorkOrderEdge = {
   __typename?: 'JobWorkOrderEdge',
  cursor: Scalars['String'],
  node?: Maybe<JobWorkOrder>,
};

export type JobWorkOrderIndex = {
  id?: Maybe<Array<Maybe<Scalars['Int']>>>,
  claimId?: Maybe<Scalars['ID']>,
  createDateFrom?: Maybe<Scalars['Date']>,
  createDateTo?: Maybe<Scalars['Date']>,
  portfolios?: Maybe<Array<Maybe<PortfolioType>>>,
};

export type JobWorkOrderItem = {
   __typename?: 'JobWorkOrderItem',
  completeDate?: Maybe<Scalars['DateString']>,
  costCentre?: Maybe<QuoteCostCentre>,
  costItem?: Maybe<QuoteCostItem>,
  dimensions?: Maybe<Scalars['String']>,
  gst?: Maybe<Scalars['Decimal']>,
  id: Scalars['ID'],
  jobWorkOrderId: Scalars['Int'],
  jobWorkOrderItemId: Scalars['Int'],
  lineDescription: Scalars['String'],
  location?: Maybe<QuoteCostLocation>,
  logdate: Scalars['DateString'],
  margin?: Maybe<Scalars['Decimal']>,
  marginRate: Scalars['Decimal'],
  qty: Scalars['Decimal'],
  rate?: Maybe<Scalars['Decimal']>,
  startDate?: Maybe<Scalars['DateString']>,
  subtotal?: Maybe<Scalars['Decimal']>,
  total?: Maybe<Scalars['Decimal']>,
  unit?: Maybe<QuoteItemUnit>,
};

export type JobWorkOrderItemCostCentreGroup = {
   __typename?: 'JobWorkOrderItemCostCentreGroup',
  completeDate?: Maybe<Scalars['DateString']>,
  costCentre?: Maybe<QuoteCostCentre>,
  firstLineItemId: Scalars['Int'],
  id: Scalars['ID'],
  startDate?: Maybe<Scalars['DateString']>,
  subtotal?: Maybe<Scalars['Decimal']>,
};

export type JobWorkOrderItemCostCentreGroupPayload = {
   __typename?: 'JobWorkOrderItemCostCentreGroupPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<JobWorkOrderItemCostCentreGroup>,
  success: Scalars['Boolean'],
};

export type JobWorkProgressInput = {
  claimJobId: Scalars['ID'],
  statusDate?: Maybe<Scalars['Date']>,
  portfolioType: PortfolioType,
};


export enum LogLevel {
  Trace = 'Trace',
  Debug = 'Debug',
  Information = 'Information',
  Warning = 'Warning',
  Error = 'Error',
  Critical = 'Critical',
  None = 'None'
}

export type LossAdjusterReportType = {
   __typename?: 'LossAdjusterReportType',
  reportTypeId?: Maybe<Scalars['Byte']>,
  reportTypeName: Scalars['String'],
};

export type MakeInitialCallInput = {
  note?: Maybe<Scalars['String']>,
};


export type Mutation = {
   __typename?: 'Mutation',
  adjusterInitialCall?: Maybe<ClaimJobPayload>,
  adjusterMakeAppointment?: Maybe<ClaimJobPayload>,
  claimAcceptRequest?: Maybe<ClaimPortfolioPayload>,
  claimAddPortfolio?: Maybe<ClaimPortfolioPayload>,
  claimAwaitingInfo?: Maybe<ClaimPortfolioPayload>,
  claimCancelAwaitingInfo?: Maybe<ClaimPortfolioPayload>,
  claimCaseSettleCreate?: Maybe<GeneralPayload>,
  claimCommunicationAcknoledge?: Maybe<ClaimCommunicationPayload>,
  claimDeclineRequest?: Maybe<ClaimPortfolioPayload>,
  claimFinalise?: Maybe<ClaimPortfolioPayload>,
  claimFollowUp?: Maybe<GeneralPayload>,
  claimInitialCall?: Maybe<ClaimPortfolioPayload>,
  claimMakeAppointment?: Maybe<ClaimPortfolioPayload>,
  claimMakeSafeAppointment?: Maybe<ClaimPortfolioPayload>,
  claimMakeSafeComplete?: Maybe<ClaimPortfolioPayload>,
  claimMakeSafeInitialCall?: Maybe<ClaimPortfolioPayload>,
  claimReallocateScopingSupplier?: Maybe<ClaimPortfolioPayload>,
  claimRequestCostedScope?: Maybe<ClaimPortfolioPayload>,
  claimRequestQuotes?: Maybe<ClaimPortfolioPayload>,
  claimReserveUpdate?: Maybe<GeneralPayload>,
  claimResetFinalise?: Maybe<ClaimPortfolioPayload>,
  createClaimCommunication?: Maybe<ClaimCommunicationPayload>,
  createClaimDocument?: Maybe<ClaimDocumentPayload>,
  createClaimJob?: Maybe<ClaimJobPayload>,
  createClaimLossAdjusterDocument?: Maybe<ClaimLossAdjusterDocumentPayload>,
  createClaimNote?: Maybe<ClaimNotePayload>,
  createJobContentItems?: Maybe<JobQuoteItemsPayload>,
  createJobMakeSafeItems?: Maybe<JobMakeSafeItemsPayload>,
  createJobQuoteItems?: Maybe<JobQuoteItemsPayload>,
  createJobVariation?: Maybe<JobVariationPayload>,
  createJobVariationItems?: Maybe<JobVariationItemsPayload>,
  createJobWorkProgress?: Maybe<JobProgressPayload>,
  csvProduceForJobQuote?: Maybe<GeneralPayload>,
  deleteClaimDocument?: Maybe<GeneralPayload>,
  deleteClaimLossAdjusterDocument?: Maybe<GeneralPayload>,
  deleteJobMakeSafeItem?: Maybe<GeneralPayload>,
  deleteJobQuoteItem?: Maybe<GeneralPayload>,
  deleteJobVariationItem?: Maybe<GeneralPayload>,
  estimatorCreate?: Maybe<EstimatorPayload>,
  estimatorUpdate?: Maybe<EstimatorPayload>,
  feeInvoiceDelete?: Maybe<FeeInvoicePayload>,
  feeInvoiceUpdate?: Maybe<FeeInvoicePayload>,
  feeInvoiceUpload?: Maybe<FeeInvoicePayload>,
  feeItemCreate?: Maybe<FeeItemPayload>,
  feeItemDelete?: Maybe<FeeItemPayload>,
  feeItemEdit?: Maybe<FeeItemPayload>,
  jobContentAuthorise?: Maybe<JobQuotePayload>,
  jobContentComplete?: Maybe<JobQuotePayload>,
  jobContentInitialCall?: Maybe<JobQuoteItemPayload>,
  jobContentRemoveAuthority?: Maybe<JobQuotePayload>,
  jobMakeSafeQuoteComplete?: Maybe<JobMakeSafePayload>,
  jobMakeSafeQuoteReset?: Maybe<JobMakeSafePayload>,
  jobQuoteAuthorise?: Maybe<JobQuotePayload>,
  jobQuoteComplete?: Maybe<JobQuotePayload>,
  jobQuoteRecommend?: Maybe<JobQuotePayload>,
  jobQuoteReset?: Maybe<JobQuotePayload>,
  jobQuoteReview?: Maybe<JobQuotePayload>,
  jobVariationAudit?: Maybe<JobVariationPayload>,
  jobVariationComplete?: Maybe<JobVariationPayload>,
  pdfProduceForAdjusterDocuments?: Maybe<GeneralPayload>,
  pdfProduceForClaimDocuments?: Maybe<GeneralPayload>,
  pdfProduceForJobQuote?: Maybe<GeneralPayload>,
  pdfProduceForMakeSafe?: Maybe<GeneralPayload>,
  pdfProduceForSiteReport?: Maybe<GeneralPayload>,
  pdfProduceForVariation?: Maybe<GeneralPayload>,
  specialistRequestCreate?: Maybe<SpecialistRequestPayload>,
  specialistRequestDelete?: Maybe<SpecialistRequestPayload>,
  specialistRequestEdit?: Maybe<SpecialistRequestPayload>,
  supervisorCreate?: Maybe<SupervisorPayload>,
  supervisorUpdate?: Maybe<SupervisorPayload>,
  updateClaimJob?: Maybe<ClaimJobPayload>,
  updateJobContentItem?: Maybe<JobQuoteItemPayload>,
  updateJobMakeSafeItem?: Maybe<JobMakeSafeItemPayload>,
  updateJobQuoteItem?: Maybe<JobQuoteItemPayload>,
  updateJobVariationItem?: Maybe<JobVariationItemPayload>,
  updateJobWorkDate?: Maybe<JobWorkOrderItemCostCentreGroupPayload>,
  updateSiteReport?: Maybe<GeneralPayload>,
  userAuthenticateAllServer?: Maybe<Array<Maybe<UserValidation>>>,
  userLogout?: Maybe<GeneralPayload>,
  userRenewToken?: Maybe<UserValidation>,
  userServiceToken?: Maybe<ServiceValidation>,
  claimReportUpsert: Report,
  claimReportSubmit: Report,
  claimReportReset: Report,
};


export type MutationAdjusterInitialCallArgs = {
  input?: Maybe<MakeInitialCallInput>,
  where: ClaimUniqueWhere
};


export type MutationAdjusterMakeAppointmentArgs = {
  input: AppointmentInput,
  where: ClaimUniqueWhere
};


export type MutationClaimAcceptRequestArgs = {
  where: EnDataPortfolioKey
};


export type MutationClaimAddPortfolioArgs = {
  input: AddPortfolioInput,
  where: EnDataEntityKey
};


export type MutationClaimAwaitingInfoArgs = {
  input: AwaitingInfoClaimInputType,
  where: EnDataPortfolioKey
};


export type MutationClaimCancelAwaitingInfoArgs = {
  where: EnDataPortfolioKey
};


export type MutationClaimCaseSettleCreateArgs = {
  input: ClaimCashSettleInput
};


export type MutationClaimCommunicationAcknoledgeArgs = {
  where: EnDataPortfolioKey
};


export type MutationClaimDeclineRequestArgs = {
  where: EnDataPortfolioKey
};


export type MutationClaimFinaliseArgs = {
  input: FinaliseClaimInput,
  where: EnDataPortfolioKey
};


export type MutationClaimFollowUpArgs = {
  input: FollowUpClaimInputType,
  where: EnDataEntityKey
};


export type MutationClaimInitialCallArgs = {
  input?: Maybe<MakeInitialCallInput>,
  where: EnDataEntityKey
};


export type MutationClaimMakeAppointmentArgs = {
  input: AppointmentInput,
  where: EnDataEntityKey
};


export type MutationClaimMakeSafeAppointmentArgs = {
  input: AppointmentInput,
  where: EnDataPortfolioKey
};


export type MutationClaimMakeSafeCompleteArgs = {
  where: EnDataPortfolioKey
};


export type MutationClaimMakeSafeInitialCallArgs = {
  input?: Maybe<MakeInitialCallInput>,
  where: EnDataPortfolioKey
};


export type MutationClaimReallocateScopingSupplierArgs = {
  input: ReallocateScopingSupplierInput,
  where: EnDataPortfolioKey
};


export type MutationClaimRequestCostedScopeArgs = {
  where: EnDataPortfolioKey
};


export type MutationClaimRequestQuotesArgs = {
  where: EnDataPortfolioKey
};


export type MutationClaimReserveUpdateArgs = {
  input: ClaimReserveInput,
  where: ClaimUniqueWhere
};


export type MutationClaimResetFinaliseArgs = {
  where: EnDataPortfolioKey
};


export type MutationCreateClaimCommunicationArgs = {
  input: ClaimCommunicationCreate
};


export type MutationCreateClaimDocumentArgs = {
  input: ClaimDocumentCreate
};


export type MutationCreateClaimJobArgs = {
  input: ClaimJobCreate
};


export type MutationCreateClaimLossAdjusterDocumentArgs = {
  input: ClaimLossAdjusterDocumentCreate
};


export type MutationCreateClaimNoteArgs = {
  input: ClaimNoteCreate
};


export type MutationCreateJobContentItemsArgs = {
  input: JobContentItemsCreate
};


export type MutationCreateJobMakeSafeItemsArgs = {
  input: JobMakeSafeItemsCreate
};


export type MutationCreateJobQuoteItemsArgs = {
  input: JobQuoteItemsCreate
};


export type MutationCreateJobVariationArgs = {
  input: JobVariationCreate
};


export type MutationCreateJobVariationItemsArgs = {
  input: JobVariationItemsCreate
};


export type MutationCreateJobWorkProgressArgs = {
  input: JobWorkProgressInput
};


export type MutationCsvProduceForJobQuoteArgs = {
  where: JobQuoteIndex
};


export type MutationDeleteClaimDocumentArgs = {
  input: EnDataPortfolioKey
};


export type MutationDeleteJobMakeSafeItemArgs = {
  where: EnDataPortfolioKey
};


export type MutationDeleteJobQuoteItemArgs = {
  where: EnDataPortfolioKey
};


export type MutationDeleteJobVariationItemArgs = {
  where: EnDataPortfolioKey
};


export type MutationEstimatorCreateArgs = {
  input: EstimatorCreateInput
};


export type MutationEstimatorUpdateArgs = {
  input: EstimatorUpdateInput,
  where: EnDataPortfolioKey
};


export type MutationFeeInvoiceDeleteArgs = {
  where: FeeInvoiceUniqueWhere
};


export type MutationFeeInvoiceUpdateArgs = {
  input: FeeInvoiceUpdateInput,
  where: FeeInvoiceUniqueWhere
};


export type MutationFeeInvoiceUploadArgs = {
  input: FeeInvoiceUploadInput,
  where: FeeInvoiceUploadWhere
};


export type MutationFeeItemCreateArgs = {
  input: FeeItemCreateInput
};


export type MutationFeeItemDeleteArgs = {
  where: FeeItemUniqueWhere
};


export type MutationFeeItemEditArgs = {
  input: FeeItemEditInput,
  where: FeeItemUniqueWhere
};


export type MutationJobContentAuthoriseArgs = {
  where: EnDataEntityKey,
  input: JobContentAuthoriseInput
};


export type MutationJobContentCompleteArgs = {
  where: EnDataEntityKey
};


export type MutationJobContentInitialCallArgs = {
  input?: Maybe<MakeInitialCallInput>,
  where: EnDataEntityKey
};


export type MutationJobContentRemoveAuthorityArgs = {
  where: EnDataEntityKey,
  input: JobContentRemoveAuthorityInput
};


export type MutationJobMakeSafeQuoteCompleteArgs = {
  where: EnDataPortfolioKey
};


export type MutationJobMakeSafeQuoteResetArgs = {
  where: EnDataPortfolioKey
};


export type MutationJobQuoteAuthoriseArgs = {
  where: EnDataPortfolioKey,
  input?: Maybe<JobQuoteAuthoriseInput>
};


export type MutationJobQuoteCompleteArgs = {
  input?: Maybe<JobQuoteCompleteInput>,
  where: EnDataPortfolioKey
};


export type MutationJobQuoteRecommendArgs = {
  where: EnDataPortfolioKey
};


export type MutationJobQuoteResetArgs = {
  where: EnDataPortfolioKey
};


export type MutationJobQuoteReviewArgs = {
  where: EnDataPortfolioKey
};


export type MutationJobVariationAuditArgs = {
  input: JobVariationAuditInput,
  where: EnDataPortfolioKey
};


export type MutationJobVariationCompleteArgs = {
  where: EnDataPortfolioKey
};


export type MutationPdfProduceForAdjusterDocumentsArgs = {
  where: ClaimItemFilter
};


export type MutationPdfProduceForClaimDocumentsArgs = {
  where: ClaimItemFilter
};


export type MutationPdfProduceForJobQuoteArgs = {
  where: JobQuoteIndex
};


export type MutationPdfProduceForMakeSafeArgs = {
  where: EnDataPortfolioKey
};


export type MutationPdfProduceForSiteReportArgs = {
  where: EnDataPortfolioKey
};


export type MutationPdfProduceForVariationArgs = {
  where: EnDataPortfolioKey
};


export type MutationSpecialistRequestCreateArgs = {
  input: SpecialistRequestCreateInput
};


export type MutationSpecialistRequestDeleteArgs = {
  where: SpecialistRequestUniqueWhere
};


export type MutationSpecialistRequestEditArgs = {
  where: SpecialistRequestUniqueWhere,
  input: SpecialistRequestEditInput
};


export type MutationSupervisorCreateArgs = {
  input: SupervisorCreateInput
};


export type MutationSupervisorUpdateArgs = {
  input: SupervisorUpdateInput,
  where: EnDataPortfolioKey
};


export type MutationUpdateClaimJobArgs = {
  input: ClaimJobInput,
  where: EnDataEntityKey
};


export type MutationUpdateJobContentItemArgs = {
  input: JobQuoteItemUpdate,
  where: EnDataEntityKey
};


export type MutationUpdateJobMakeSafeItemArgs = {
  input: QuoteItemUpdate,
  where: EnDataPortfolioKey
};


export type MutationUpdateJobQuoteItemArgs = {
  input: QuoteItemUpdate,
  where: EnDataPortfolioKey
};


export type MutationUpdateJobVariationItemArgs = {
  input: QuoteItemUpdate,
  where: EnDataPortfolioKey
};


export type MutationUpdateJobWorkDateArgs = {
  input: JobWorkOrderDateInput,
  where: EnDataPortfolioKey
};


export type MutationUpdateSiteReportArgs = {
  input: SiteReportInput,
  where: EnDataPortfolioKey
};


export type MutationUserAuthenticateAllServerArgs = {
  input: UserCredential
};


export type MutationUserServiceTokenArgs = {
  input: ServiceInput
};


export type MutationClaimReportUpsertArgs = {
  claimId: Scalars['ID'],
  data: Scalars['Json']
};


export type MutationClaimReportSubmitArgs = {
  claimId: Scalars['ID']
};


export type MutationClaimReportResetArgs = {
  claimId: Scalars['ID']
};

export type PageInfo = {
   __typename?: 'PageInfo',
  endCursor?: Maybe<Scalars['String']>,
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
};

export type PaymentMethod = {
   __typename?: 'PaymentMethod',
  id: Scalars['ID'],
  name: Scalars['String'],
  paymentMethodId: Scalars['Int'],
};

export type PaymentMethodWhere = {
  claimId: Scalars['ID'],
};

export type PaymentType = {
   __typename?: 'PaymentType',
  id: Scalars['ID'],
  name: Scalars['String'],
  paymentTypeId: Scalars['Int'],
};

export type PaymentTypeWhere = {
  claimId: Scalars['ID'],
  claimPortfolioType: PortfolioType,
};



export type PolicyCover = {
   __typename?: 'PolicyCover',
  policyCoverId?: Maybe<Scalars['Short']>,
  policyCoverName: Scalars['String'],
};

export type PolicyType = {
   __typename?: 'PolicyType',
  policyTypeId?: Maybe<Scalars['Short']>,
  policyTypeName: Scalars['String'],
};

export enum PortfolioType {
  Building = 'Building',
  Contents = 'Contents',
  Restoration = 'Restoration'
}

export type PrivilegeAction = {
   __typename?: 'PrivilegeAction',
  nodeName: Scalars['String'],
  privilegeCode: Scalars['String'],
};

export type PrivilegeMenu = {
   __typename?: 'PrivilegeMenu',
  nodeName: Scalars['String'],
  pages?: Maybe<Array<Maybe<PrivilegePage>>>,
  privilegeCode: Scalars['String'],
};

export type PrivilegePage = {
   __typename?: 'PrivilegePage',
  actions?: Maybe<Array<Maybe<PrivilegeAction>>>,
  nodeName: Scalars['String'],
  privilegeCode: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  _claimCategories: Array<Maybe<SelectOption>>,
  _form?: Maybe<Form>,
  _report?: Maybe<Report>,
  _states: Array<Maybe<SelectOption>>,
  claimCommuications?: Maybe<ClaimCommunicationConnection>,
  claimDocuments?: Maybe<ClaimDocumentConnection>,
  claimFilterOptions?: Maybe<Array<Maybe<FilterOption>>>,
  claimFilters?: Maybe<Array<Maybe<FilterElement>>>,
  claimJob?: Maybe<ClaimJob>,
  claimJobs?: Maybe<ClaimJobConnection>,
  claimLossAdjusterDocuments?: Maybe<ClaimLossAdjusterDocumentConnection>,
  claimNextStep?: Maybe<Array<Maybe<ClaimJobStatusInfo>>>,
  claimNotes?: Maybe<ClaimNoteConnection>,
  claimParticipants?: Maybe<Array<Maybe<Company>>>,
  communicationFilters?: Maybe<Array<Maybe<FilterElement>>>,
  company?: Maybe<CompanyProfile>,
  currentUser?: Maybe<AuthenticatedUser>,
  dashboardFilters?: Maybe<Array<Maybe<FilterElement>>>,
  dashboardWidgets?: Maybe<Array<Maybe<WidgetGraphType>>>,
  dashboards?: Maybe<Array<Maybe<Dashboard>>>,
  estimators?: Maybe<EstimatorConnection>,
  feeCategories?: Maybe<Array<Maybe<FeeCategory>>>,
  feeInvoice?: Maybe<FeeInvoice>,
  feeInvoiceStatus?: Maybe<Array<Maybe<FeeInvoiceStatus>>>,
  feeItem?: Maybe<FeeItem>,
  feeItems?: Maybe<Array<Maybe<FeeItem>>>,
  feePortfolios?: Maybe<Array<Maybe<FeePortfolio>>>,
  internalAssessors?: Maybe<InternalAssesorConnection>,
  jobMakeSafes?: Maybe<JobMakeSafeConnection>,
  jobQuotes?: Maybe<JobQuoteConnection>,
  jobVariationReasons?: Maybe<Array<Maybe<JobVariationReason>>>,
  jobVariations?: Maybe<JobVariationConnection>,
  jobWorkOrders?: Maybe<JobWorkOrderConnection>,
  jobWorkProgresses?: Maybe<JobProgressConnection>,
  me?: Maybe<User>,
  paymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>,
  paymentTypes?: Maybe<Array<Maybe<PaymentType>>>,
  quoteCostCentres?: Maybe<QuoteCostCentreConnection>,
  quoteCostItems?: Maybe<QuoteCostItemConnection>,
  quoteCostLocations?: Maybe<QuoteCostLocationConnection>,
  reportingClaimJobGeneral?: Maybe<ClaimJobGeneralReportConnection>,
  specialistCategories?: Maybe<Array<Maybe<SpecialistCategory>>>,
  specialistRequests?: Maybe<Array<Maybe<SpecialistRequest>>>,
  specialists?: Maybe<Array<Maybe<Company>>>,
  supervisors?: Maybe<SupervisorConnection>,
};


export type Query_FormArgs = {
  id: Scalars['ID']
};


export type Query_ReportArgs = {
  claimId: Scalars['ID']
};


export type QueryClaimCommuicationsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  where?: Maybe<CommunicationFilter>
};


export type QueryClaimDocumentsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  where?: Maybe<ClaimItemFilter>
};


export type QueryClaimFilterOptionsArgs = {
  where?: Maybe<ClaimJobFilter>
};


export type QueryClaimJobArgs = {
  where: EnDataEntityKey
};


export type QueryClaimJobsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  where?: Maybe<ClaimJobFilter>
};


export type QueryClaimLossAdjusterDocumentsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  where?: Maybe<ClaimItemFilter>
};


export type QueryClaimNextStepArgs = {
  where: EnDataEntityKey
};


export type QueryClaimNotesArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  where?: Maybe<ClaimItemFilter>
};


export type QueryClaimParticipantsArgs = {
  where?: Maybe<ClaimParticipantIndex>
};


export type QueryCompanyArgs = {
  where: EnDataPortfolioKey
};


export type QueryDashboardWidgetsArgs = {
  where: DashboardWidgetIndex
};


export type QueryEstimatorsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  where?: Maybe<SupplierManagerIndex>
};


export type QueryFeeCategoriesArgs = {
  where: FeeCategoryWhere
};


export type QueryFeeInvoiceArgs = {
  where: FeeInvoiceUniqueWhere
};


export type QueryFeeInvoiceStatusArgs = {
  where: FeeInvoiceStatusWhere
};


export type QueryFeeItemArgs = {
  where: FeeItemUniqueWhere
};


export type QueryFeeItemsArgs = {
  where: FeeItemWhere
};


export type QueryFeePortfoliosArgs = {
  where: ClaimPortfoliosWhere
};


export type QueryInternalAssessorsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  where?: Maybe<SupplierManagerIndex>
};


export type QueryJobMakeSafesArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  where: JobMakeSafeIndex
};


export type QueryJobQuotesArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  where: JobQuoteIndex
};


export type QueryJobVariationsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  where: JobVariationIndex
};


export type QueryJobWorkOrdersArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  where: JobWorkOrderIndex
};


export type QueryJobWorkProgressesArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  where: EnDataPortfolioKey
};


export type QueryPaymentMethodsArgs = {
  where: PaymentMethodWhere
};


export type QueryPaymentTypesArgs = {
  where: PaymentTypeWhere
};


export type QueryQuoteCostCentresArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  where: QuoteCostCentreIndex
};


export type QueryQuoteCostItemsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  where: QuoteCostItemIndex
};


export type QueryQuoteCostLocationsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  where: QuoteCostLocationIndex
};


export type QueryReportingClaimJobGeneralArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  where?: Maybe<CaseReportIndex>
};


export type QuerySpecialistCategoriesArgs = {
  where: SpecialistCategoryWhere
};


export type QuerySpecialistRequestsArgs = {
  where: SpecialistRequestWhere
};


export type QuerySpecialistsArgs = {
  where: SpecialistWhere
};


export type QuerySupervisorsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  where?: Maybe<SupplierManagerIndex>
};

export type QuoteCostCentre = {
   __typename?: 'QuoteCostCentre',
  costCentreId: Scalars['Int'],
  costCentreName: Scalars['String'],
  costType?: Maybe<QuoteCostType>,
  directSupplier: Scalars['Boolean'],
  id: Scalars['ID'],
};

export type QuoteCostCentreConnection = {
   __typename?: 'QuoteCostCentreConnection',
  edges?: Maybe<Array<Maybe<QuoteCostCentreEdge>>>,
  items?: Maybe<Array<Maybe<QuoteCostCentre>>>,
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

export type QuoteCostCentreEdge = {
   __typename?: 'QuoteCostCentreEdge',
  cursor: Scalars['String'],
  node?: Maybe<QuoteCostCentre>,
};

export type QuoteCostCentreIndex = {
  insurerId?: Maybe<Scalars['Int']>,
  costType?: Maybe<QuoteCostType>,
  portfolioType: PortfolioType,
};

export type QuoteCostItem = {
   __typename?: 'QuoteCostItem',
  costItemId: Scalars['Int'],
  id: Scalars['ID'],
  itemDescription: Scalars['String'],
  units?: Maybe<Array<Maybe<QuoteItemUnit>>>,
};

export type QuoteCostItemConnection = {
   __typename?: 'QuoteCostItemConnection',
  edges?: Maybe<Array<Maybe<QuoteCostItemEdge>>>,
  items?: Maybe<Array<Maybe<QuoteCostItem>>>,
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

export type QuoteCostItemEdge = {
   __typename?: 'QuoteCostItemEdge',
  cursor: Scalars['String'],
  node?: Maybe<QuoteCostItem>,
};

export type QuoteCostItemIndex = {
  costCentreId: Scalars['Int'],
  portfolioType: PortfolioType,
};

export type QuoteCostLocation = {
   __typename?: 'QuoteCostLocation',
  costLocationId: Scalars['Int'],
  id: Scalars['ID'],
  locationName: Scalars['String'],
};

export type QuoteCostLocationConnection = {
   __typename?: 'QuoteCostLocationConnection',
  edges?: Maybe<Array<Maybe<QuoteCostLocationEdge>>>,
  items?: Maybe<Array<Maybe<QuoteCostLocation>>>,
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

export type QuoteCostLocationEdge = {
   __typename?: 'QuoteCostLocationEdge',
  cursor: Scalars['String'],
  node?: Maybe<QuoteCostLocation>,
};

export type QuoteCostLocationIndex = {
  portfolioType: PortfolioType,
};

export enum QuoteCostType {
  UnDefined = 'UnDefined',
  Labour = 'Labour',
  Material = 'Material'
}

export type QuoteItemCreate = {
  costCentreId: Scalars['Int'],
  costItemId: Scalars['Int'],
  lineDescription: Scalars['String'],
  locationId: Scalars['Int'],
  dimensions?: Maybe<Scalars['String']>,
  qty: Scalars['Decimal'],
  unitId: Scalars['Int'],
  rate: Scalars['Decimal'],
  marginRate: Scalars['Decimal'],
  gst?: Maybe<Scalars['Decimal']>,
};

export type QuoteItemUnit = {
   __typename?: 'QuoteItemUnit',
  defaultValue: Scalars['Decimal'],
  unitId: Scalars['Int'],
  unitName: Scalars['String'],
};

export type QuoteItemUpdate = {
  costCentreId?: Maybe<Scalars['Int']>,
  costItemId?: Maybe<Scalars['Int']>,
  locationId?: Maybe<Scalars['Int']>,
  dimensions?: Maybe<Scalars['String']>,
  lineDescription?: Maybe<Scalars['String']>,
  unitId?: Maybe<Scalars['Int']>,
  qty?: Maybe<Scalars['Decimal']>,
  rate?: Maybe<Scalars['Decimal']>,
  marginRate?: Maybe<Scalars['Decimal']>,
  gst?: Maybe<Scalars['Decimal']>,
};

export enum QuoteRequestStatus {
  NewClaims = 'NewClaims',
  OfferScopeAcc = 'OfferScopeAcc',
  InitialCallMade = 'InitialCallMade',
  AppointmentMade = 'AppointmentMade',
  AwaitingInfo = 'AwaitingInfo',
  AwaitingInfoContents = 'AwaitingInfoContents',
  ClaimFinalised = 'ClaimFinalised',
  JobAuthorised = 'JobAuthorised',
  JobLost = 'JobLost',
  AdditionalItems = 'AdditionalItems',
  WaitingScope = 'WaitingScope',
  WaitingQuotes = 'WaitingQuotes',
  QuoteSubmitted = 'QuoteSubmitted',
  WaitingResult = 'WaitingResult'
}

export enum QuoteRequestType {
  UnDefined = 'UnDefined',
  Scoping = 'Scoping',
  DesktopQuoting = 'DesktopQuoting'
}

export type ReallocateScopingSupplierInput = {
  supplierId: Scalars['Int'],
  availableForQuoting: Scalars['Boolean'],
  note?: Maybe<Scalars['String']>,
};

export type Report = {
   __typename?: 'Report',
  id: Scalars['ID'],
  data?: Maybe<Scalars['Json']>,
  status: ReportStatus,
};

export enum ReportStatus {
  Reporting = 'REPORTING',
  Reported = 'REPORTED'
}

export enum RequestCategory {
  All = 'All',
  Scoping = 'Scoping',
  DesktopQuoting = 'DesktopQuoting',
  Authorised = 'Authorised',
  Lost = 'Lost'
}


export type SelectField = Field & {
   __typename?: 'SelectField',
  id: Scalars['ID'],
  order?: Maybe<Scalars['Int']>,
  grid?: Maybe<Scalars['Grid']>,
  label?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  options?: Maybe<Array<SelectFieldOption>>,
};

export type SelectFieldOption = {
   __typename?: 'SelectFieldOption',
  id: Scalars['ID'],
  label: Scalars['String'],
  value: Scalars['String'],
};

export type SelectOption = {
   __typename?: 'SelectOption',
  label?: Maybe<Scalars['String']>,
  value: Scalars['ID'],
};

export enum Server {
  All = 'ALL',
  Endata = 'ENDATA',
  Iag = 'IAG',
  Alz = 'ALZ',
  Rac = 'RAC',
  Ract = 'RACT',
  Qbe = 'QBE',
  Aig = 'AIG',
  Wbc = 'WBC',
  Testuat_1 = 'TESTUAT_1',
  Testuat_2 = 'TESTUAT_2',
  Tsetpvt = 'TSETPVT'
}

export type ServiceInput = {
  serviceId: Scalars['Int'],
};

export type ServiceValidation = {
   __typename?: 'ServiceValidation',
  server?: Maybe<Server>,
  serviceToken: Scalars['String'],
};


export type SiteCladdingType = {
   __typename?: 'SiteCladdingType',
  claddingTypeId: Scalars['Int'],
  claddingTypeName: Scalars['String'],
  id: Scalars['ID'],
};

export type SiteDwellingAge = {
   __typename?: 'SiteDwellingAge',
  dwellingAgeId: Scalars['Int'],
  dwellingAgeName: Scalars['String'],
  id: Scalars['ID'],
};

export type SiteDwellingType = {
   __typename?: 'SiteDwellingType',
  dwellingTypeId: Scalars['Int'],
  dwellingTypeName: Scalars['String'],
  id: Scalars['ID'],
};

export type SiteFoundationType = {
   __typename?: 'SiteFoundationType',
  foundationTypeId: Scalars['Int'],
  foundationTypeName: Scalars['String'],
  id: Scalars['ID'],
};

export type SiteHouseType = {
   __typename?: 'SiteHouseType',
  houseTypeId: Scalars['Int'],
  houseTypeName: Scalars['String'],
  id: Scalars['ID'],
};

export type SiteIsAClaim = {
   __typename?: 'SiteIsAClaim',
  id: Scalars['ID'],
  isAClaimId: Scalars['Int'],
  isAClaimName: Scalars['String'],
};

export type SiteReportInput = {
  claddingTypeId?: Maybe<Scalars['Int']>,
  dwellingAgeId?: Maybe<Scalars['Int']>,
  dwellingTypeId?: Maybe<Scalars['Int']>,
  foundationTypeId?: Maybe<Scalars['Int']>,
  houseTypeId?: Maybe<Scalars['Int']>,
  isAClaimId?: Maybe<Scalars['Int']>,
  roofTypeId?: Maybe<Scalars['Int']>,
  suppervisorId?: Maybe<Scalars['Int']>,
  estimatorId?: Maybe<Scalars['Int']>,
  claimrecommendationId?: Maybe<Scalars['Int']>,
  reportDate?: Maybe<Scalars['DateString']>,
  emergencyMakeSafeWorks?: Maybe<Scalars['Int']>,
  sumInsuredAdequate?: Maybe<Scalars['Int']>,
  siteReportDescription?: Maybe<Scalars['String']>,
};

export type SiteRoofType = {
   __typename?: 'SiteRoofType',
  id: Scalars['ID'],
  roofTypeId: Scalars['Int'],
  roofTypeName: Scalars['String'],
};

export type SpecialistCategory = {
   __typename?: 'SpecialistCategory',
  id: Scalars['ID'],
  name: Scalars['String'],
  specialistCategoryId: Scalars['Int'],
};

export type SpecialistCategoryWhere = {
  claimId: Scalars['ID'],
  specialistId?: Maybe<Scalars['Int']>,
};

export type SpecialistRequest = {
   __typename?: 'SpecialistRequest',
  actions: Array<Maybe<Action>>,
  id: Scalars['ID'],
  requestedDate?: Maybe<Scalars['DateString']>,
  specialist?: Maybe<Company>,
  specialistCategory?: Maybe<SpecialistCategory>,
  specialistRequestId: Scalars['Int'],
};

export type SpecialistRequestCreateInput = {
  claimId: Scalars['ID'],
  specialistCategoryId: Scalars['Int'],
  specialistId: Scalars['Int'],
};

export type SpecialistRequestEditInput = {
  specialistCategoryId: Scalars['Int'],
};

export type SpecialistRequestPayload = {
   __typename?: 'SpecialistRequestPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<SpecialistRequest>,
  success: Scalars['Boolean'],
};

export type SpecialistRequestUniqueWhere = {
  specialistRequestId: Scalars['Int'],
};

export type SpecialistRequestWhere = {
  claimId: Scalars['ID'],
};

export type SpecialistWhere = {
  claimId: Scalars['ID'],
  specialistCategoryId: Scalars['Int'],
};

export enum State {
  Qld = 'QLD',
  Nsw = 'NSW',
  Vic = 'VIC',
  Wa = 'WA',
  Act = 'ACT',
  Sa = 'SA',
  Tas = 'TAS',
  Nt = 'NT'
}

export type Supervisor = {
   __typename?: 'Supervisor',
  companyId: Scalars['Int'],
  id: Scalars['ID'],
  initials?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  portfolioType?: Maybe<PortfolioType>,
  suppervisorId: Scalars['Int'],
};

export type SupervisorConnection = {
   __typename?: 'SupervisorConnection',
  edges?: Maybe<Array<Maybe<SupervisorEdge>>>,
  items?: Maybe<Array<Maybe<Supervisor>>>,
  pageInfo: PageInfo,
  totalCount?: Maybe<Scalars['Int']>,
};

export type SupervisorCreateInput = {
  name: Scalars['String'],
  initials?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  companyId?: Maybe<Scalars['Int']>,
  portfolioType?: Maybe<PortfolioType>,
};

export type SupervisorEdge = {
   __typename?: 'SupervisorEdge',
  cursor: Scalars['String'],
  node?: Maybe<Supervisor>,
};

export type SupervisorPayload = {
   __typename?: 'SupervisorPayload',
  fieldErrors?: Maybe<Array<Maybe<EntityFieldError>>>,
  messages: Array<Scalars['String']>,
  result?: Maybe<Supervisor>,
  success: Scalars['Boolean'],
};

export type SupervisorUpdateInput = {
  name?: Maybe<Scalars['String']>,
  initials?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
};

export type SupplierManagerIndex = {
  companyId?: Maybe<Scalars['Int']>,
  portfolioType?: Maybe<PortfolioType>,
};

export enum SupplierStatusFilter {
  RequestedAndAvailable = 'RequestedAndAvailable',
  RequestedOnly = 'RequestedOnly',
  AcceptedOnly = 'AcceptedOnly'
}

export enum SupplierTypeFilter {
  ManagerAndSupplier = 'ManagerAndSupplier',
  Supplier = 'Supplier',
  SupplierExcludeScoping = 'SupplierExcludeScoping'
}

export type SwitchField = Field & {
   __typename?: 'SwitchField',
  id: Scalars['ID'],
  order?: Maybe<Scalars['Int']>,
  grid?: Maybe<Scalars['Grid']>,
  label?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type TextAreaField = Field & {
   __typename?: 'TextAreaField',
  id: Scalars['ID'],
  order?: Maybe<Scalars['Int']>,
  grid?: Maybe<Scalars['Grid']>,
  label?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  rows?: Maybe<Scalars['Int']>,
  rowsMax?: Maybe<Scalars['Int']>,
};

export type TextField = Field & {
   __typename?: 'TextField',
  id: Scalars['ID'],
  order?: Maybe<Scalars['Int']>,
  grid?: Maybe<Scalars['Grid']>,
  label?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  company?: Maybe<CompanyProfile>,
  disabled: Scalars['Boolean'],
  hasMultipleAccess: Scalars['Boolean'],
  permitedCompanyIDs: Array<Scalars['Int']>,
  preference?: Maybe<UserPreference>,
  privileges?: Maybe<UserPrivileges>,
  userEmail?: Maybe<Scalars['String']>,
  userId: Scalars['Int'],
  userName: Scalars['String'],
  userPhone?: Maybe<Scalars['String']>,
  userRole?: Maybe<AccessRole>,
};

export type UserCredential = {
  userLogin: Scalars['String'],
  password: Scalars['String'],
};

export type UserPreference = {
   __typename?: 'UserPreference',
  applicationFont: Scalars['String'],
  applicationLanguage: Scalars['String'],
  applicationTheme: Scalars['String'],
  applicationTimeZone?: Maybe<Scalars['Byte']>,
};

export type UserPrivileges = {
   __typename?: 'UserPrivileges',
  menus?: Maybe<Array<Maybe<PrivilegeMenu>>>,
};

export enum UserType {
  Administrator = 'Administrator',
  Builder = 'Builder',
  Restorer = 'Restorer',
  ContentSupplier = 'ContentSupplier'
}

export type UserValidation = {
   __typename?: 'UserValidation',
  accessToken: Scalars['String'],
  refreshToken: Scalars['String'],
  server?: Maybe<Server>,
  token: Scalars['String'],
  user?: Maybe<User>,
};

export type WidgetData = {
   __typename?: 'WidgetData',
  dataSetName: Scalars['String'],
  internalFilterName?: Maybe<Scalars['String']>,
  legend?: Maybe<Scalars['String']>,
  valueDisplay?: Maybe<DataDisplay>,
  valueGroup?: Maybe<Scalars['Byte']>,
  values?: Maybe<Array<Maybe<Scalars['Float']>>>,
  valueSense?: Maybe<DataSense>,
  valueUnit?: Maybe<DataUnit>,
};

export type WidgetGraphType = {
   __typename?: 'WidgetGraphType',
  data?: Maybe<Array<Maybe<WidgetData>>>,
  description?: Maybe<Scalars['String']>,
  extended: Scalars['Boolean'],
  id: Scalars['ID'],
  labels: Array<Scalars['String']>,
  title: Scalars['String'],
  viewName?: Maybe<WidgetViewName>,
  widgetId: Scalars['Int'],
  width?: Maybe<Scalars['Byte']>,
};

export enum WidgetViewName {
  UnDefined = 'UnDefined',
  DataSingle = 'DataSingle',
  DataDouble = 'DataDouble',
  ChartJs = 'ChartJs',
  KpiGear = 'KPIGear',
  ListData = 'ListData',
  ListCheck = 'ListCheck',
  Messages = 'Messages',
  JobTasks = 'JobTasks'
}

export type CommunicationmenuQueryVariables = {};


export type CommunicationmenuQuery = (
  { __typename?: 'Query' }
  & { communications: Maybe<(
    { __typename?: 'ClaimCommunicationConnection' }
    & Pick<ClaimCommunicationConnection, 'totalCount'>
    & { edges: Maybe<Array<Maybe<(
      { __typename?: 'ClaimCommunicationEdge' }
      & { node: Maybe<(
        { __typename?: 'ClaimCommunication' }
        & Pick<ClaimCommunication, 'id' | 'claimRef' | 'message'>
      )> }
    )>>> }
  )> }
);

export type ClaimDetailsCardFragmentFragment = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'AuthenticatedUser' }
    & Pick<AuthenticatedUser, 'userType'>
  )>, managers: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>>, adjusters: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>>, builders: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>>, restorers: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>>, eventTypes: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>>, catCodes: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>>, policyTypes: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>>, policyCovers: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>>, internalAssessors: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>> }
);

export type ClaimDetailsCardMetaFragmentFragment = (
  { __typename?: 'CompanyProfile' }
  & Pick<CompanyProfile, 'contentsref' | 'quickrepair' | 'policyTypeSuppliersView' | 'policyCoverSuppliersView' | 'isToProvideSiteReportView' | 'useInternalAssessor' | 'cm2nd' | 'enableMultipleRisks'>
);

export type CustomerDetailsCardFragmentFragment = (
  { __typename?: 'Query' }
  & { catCodes: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>> }
);

export type CustomerDetailsCardMetaFragmentFragment = (
  { __typename?: 'CompanyProfile' }
  & Pick<CompanyProfile, 'companyName' | 'policyTypeSuppliersView' | 'insrefnumLength' | 'removeHabitableAsbestos' | 'setupcustomerlogin' | 'hideCategoryOfClaim'>
);

export type QuotingBuildersCardFragmentFragment = (
  { __typename?: 'Query' }
  & { builders: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>> }
);

export type QuotingBuildersCardMetaFragmentFragment = (
  { __typename?: 'CompanyProfile' }
  & Pick<CompanyProfile, 'quotesperclaim'>
);

export type QuotingRestorersCardFragmentFragment = (
  { __typename?: 'Query' }
  & { restorers: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>> }
);

export type AddClaimMutationVariables = {
  input: ClaimJobCreate
};


export type AddClaimMutation = (
  { __typename?: 'Mutation' }
  & { createClaimJob: Maybe<(
    { __typename?: 'ClaimJobPayload' }
    & Pick<ClaimJobPayload, 'success' | 'messages'>
    & { fieldErrors: Maybe<Array<Maybe<(
      { __typename?: 'EntityFieldError' }
      & Pick<EntityFieldError, 'fieldName' | 'level' | 'message'>
    )>>>, result: Maybe<(
      { __typename?: 'ClaimJob' }
      & Pick<ClaimJob, 'id' | 'claimId'>
    )> }
  )> }
);

export type AddClaimRootQueryVariables = {
  companyWhere: EnDataPortfolioKey,
  managersWhere?: Maybe<ClaimJobFilter>,
  adjustersWhere?: Maybe<ClaimJobFilter>,
  buildersWhere?: Maybe<ClaimJobFilter>,
  restorersWhere?: Maybe<ClaimJobFilter>,
  eventTypeWhere?: Maybe<ClaimJobFilter>,
  catCodesWhere?: Maybe<ClaimJobFilter>,
  policyTypesWhere?: Maybe<ClaimJobFilter>,
  policyCoversWhere?: Maybe<ClaimJobFilter>,
  internalAssessorsWhere?: Maybe<ClaimJobFilter>
};


export type AddClaimRootQuery = (
  { __typename?: 'Query' }
  & { company: Maybe<(
    { __typename?: 'CompanyProfile' }
    & CustomerDetailsCardMetaFragmentFragment
    & ClaimDetailsCardMetaFragmentFragment
    & QuotingBuildersCardMetaFragmentFragment
  )> }
  & CustomerDetailsCardFragmentFragment
  & ClaimDetailsCardFragmentFragment
  & QuotingBuildersCardFragmentFragment
  & QuotingRestorersCardFragmentFragment
);

export type ChooseCompanyQueryVariables = {};


export type ChooseCompanyQuery = (
  { __typename?: 'Query' }
  & { claimFilterOptions: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>> }
);

export type ClaimMetaContextQueryVariables = {
  where: EnDataEntityKey
};


export type ClaimMetaContextQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'AuthenticatedUser' }
    & AddDocumentMetaFragmentFragment
  )>, user: Maybe<(
    { __typename?: 'User' }
    & { company: Maybe<(
      { __typename?: 'CompanyProfile' }
      & Pick<CompanyProfile, 'companyId'>
    )> }
  )>, claim: Maybe<(
    { __typename?: 'ClaimJob' }
    & Pick<ClaimJob, 'claimId'>
    & AddClaimTypeDialogClaimFragmentFragment
    & AddDocumentClaimFragmentFragment
    & JobInfo_ClaimDetailsCardMetaFragmentFragment
    & JobInfo_CustomerInfoCardMetaFragmentFragment
  )> }
);

export type InfoCardDataFragmentFragment = (
  { __typename?: 'ClaimJob' }
  & Pick<ClaimJob, 'refNumber' | '_incidentAddress' | '_insuredPhone' | 'lodgeDate'>
  & { insurer: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'companyName' | 'policyTypeSuppliersView' | 'policyCoverSuppliersView'>
  )>, insured: Maybe<(
    { __typename?: 'ContactDetail' }
    & Pick<ContactDetail, 'name' | 'phone1' | 'phone2' | 'phone3' | 'email'>
  )>, incidentDetail: Maybe<(
    { __typename?: 'IncidentDetail' }
    & { riskAddress: Maybe<(
      { __typename?: 'Address' }
      & Pick<Address, 'line1' | 'suburb' | 'state' | 'postcode'>
    )>, eventType: Maybe<(
      { __typename?: 'IncidentEvent' }
      & Pick<IncidentEvent, 'eventName'>
    )>, cATCode: Maybe<(
      { __typename?: 'CATCode' }
      & Pick<CatCode, 'cATCodeName'>
    )> }
  )>, policyType: Maybe<(
    { __typename?: 'PolicyType' }
    & Pick<PolicyType, 'policyTypeName'>
  )>, policyCover: Maybe<(
    { __typename?: 'PolicyCover' }
    & Pick<PolicyCover, 'policyCoverName'>
  )>, building: Maybe<(
    { __typename?: 'ClaimPortfolio' }
    & Pick<ClaimPortfolio, 'toCollectExcess' | 'excessValue' | '_providerAndStatus' | '_portfolioTooltips'>
    & { claimStatus: Maybe<(
      { __typename?: 'ClaimStatus' }
      & Pick<ClaimStatus, 'statusName'>
    )>, scopingSupplier: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'companyName' | 'companyPhone1' | 'companyPhone2'>
    )>, authorisedSupplier: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'companyName' | 'companyPhone1' | 'companyPhone2'>
    )>, jobSuppliers: Maybe<Array<Maybe<(
      { __typename?: 'JobSupplier' }
      & { quote: Maybe<(
        { __typename?: 'JobQuote' }
        & { supplier: Maybe<(
          { __typename?: 'Company' }
          & Pick<Company, 'companyName'>
        )>, quoteStatus: Maybe<(
          { __typename?: 'ClaimStatus' }
          & Pick<ClaimStatus, 'statusName'>
        )> }
      )> }
    )>>> }
  )>, restoration: Maybe<(
    { __typename?: 'ClaimPortfolio' }
    & Pick<ClaimPortfolio, 'toCollectExcess' | 'excessValue' | '_providerAndStatus' | '_portfolioTooltips'>
    & { claimStatus: Maybe<(
      { __typename?: 'ClaimStatus' }
      & Pick<ClaimStatus, 'statusName'>
    )>, scopingSupplier: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'companyName' | 'companyPhone1' | 'companyPhone2'>
    )>, authorisedSupplier: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'companyName' | 'companyPhone1' | 'companyPhone2'>
    )>, jobSuppliers: Maybe<Array<Maybe<(
      { __typename?: 'JobSupplier' }
      & { quote: Maybe<(
        { __typename?: 'JobQuote' }
        & { supplier: Maybe<(
          { __typename?: 'Company' }
          & Pick<Company, 'companyName'>
        )>, quoteStatus: Maybe<(
          { __typename?: 'ClaimStatus' }
          & Pick<ClaimStatus, 'statusName'>
        )> }
      )> }
    )>>> }
  )>, contents: Maybe<(
    { __typename?: 'ClaimPortfolio' }
    & Pick<ClaimPortfolio, 'portfolioType' | 'toCollectExcess' | 'excessValue' | '_providerAndStatus' | '_portfolioTooltips'>
    & { claimStatus: Maybe<(
      { __typename?: 'ClaimStatus' }
      & Pick<ClaimStatus, 'statusName'>
    )> }
  )> }
);

export type AddClaimTypeDialogClaimFragmentFragment = (
  { __typename?: 'ClaimJob' }
  & Pick<ClaimJob, 'claimId' | 'hasBuilding' | 'hasContents' | 'hasRestoration' | '_portfolios'>
  & { insurer: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'companyId'>
  )>, incidentDetail: Maybe<(
    { __typename?: 'IncidentDetail' }
    & { riskAddress: Maybe<(
      { __typename?: 'Address' }
      & Pick<Address, 'postcode'>
    )> }
  )> }
);

export type AddClaimTypeDialogQueryVariables = {
  buildersWhere?: Maybe<ClaimJobFilter>,
  restorersWhere?: Maybe<ClaimJobFilter>
};


export type AddClaimTypeDialogQuery = (
  { __typename?: 'Query' }
  & { building: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>>, restoration: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>> }
);

export type AddClaimTypeMutationVariables = {
  input: AddPortfolioInput,
  where: EnDataEntityKey
};


export type AddClaimTypeMutation = (
  { __typename?: 'Mutation' }
  & { claimAddPortfolio: Maybe<(
    { __typename?: 'ClaimPortfolioPayload' }
    & Pick<ClaimPortfolioPayload, 'success' | 'messages'>
  )> }
);

export type AddCommunicationActionQueryVariables = {
  where?: Maybe<ClaimParticipantIndex>
};


export type AddCommunicationActionQuery = (
  { __typename?: 'Query' }
  & { claimParticipants: Maybe<Array<Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'isLossAdjuster'>
    & { group: Company['companyType'], label: Company['companyName'], value: Company['companyId'] }
  )>>> }
);

export type AddCommunicationMutationVariables = {
  input: ClaimCommunicationCreate
};


export type AddCommunicationMutation = (
  { __typename?: 'Mutation' }
  & { createClaimCommunication: Maybe<(
    { __typename?: 'ClaimCommunicationPayload' }
    & Pick<ClaimCommunicationPayload, 'messages' | 'success'>
  )> }
);

export type AddDocumentClaimFragmentFragment = (
  { __typename?: 'ClaimJob' }
  & Pick<ClaimJob, 'claimId' | 'hasBuilding' | 'hasContents' | 'hasRestoration' | '_portfolios'>
  & { insurer: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'isFeeModule'>
  )> }
);

export type AddDocumentMetaFragmentFragment = (
  { __typename?: 'AuthenticatedUser' }
  & Pick<AuthenticatedUser, 'userType'>
);

export type UploadDocumentMutationVariables = {
  input: ClaimDocumentCreate
};


export type UploadDocumentMutation = (
  { __typename?: 'Mutation' }
  & { createClaimDocument: Maybe<(
    { __typename?: 'ClaimDocumentPayload' }
    & Pick<ClaimDocumentPayload, 'success' | 'messages'>
  )> }
);

export type AddJobNoteMutationVariables = {
  input: ClaimNoteCreate
};


export type AddJobNoteMutation = (
  { __typename?: 'Mutation' }
  & { createClaimNote: Maybe<(
    { __typename?: 'ClaimNotePayload' }
    & Pick<ClaimNotePayload, 'success' | 'messages'>
  )> }
);

export type NextStepDialogQueryVariables = {
  where: EnDataEntityKey
};


export type NextStepDialogQuery = (
  { __typename?: 'Query' }
  & { nextSteps: Maybe<Array<Maybe<(
    { __typename?: 'ClaimJobStatusInfo' }
    & Pick<ClaimJobStatusInfo, 'statusName' | 'description' | 'nextStep' | 'portfolioType'>
  )>>> }
);

export type ClaimDetailsQueryVariables = {
  claimId: Scalars['ID']
};


export type ClaimDetailsQuery = (
  { __typename?: 'Query' }
  & { claimJob: Maybe<(
    { __typename?: 'ClaimJob' }
    & InfoCardDataFragmentFragment
    & JobInfoTabFragmentFragment
    & ReportTabFragmentFragment
    & JobNotesFragmentFragment
  )> }
);

export type JobInfo_ClaimDetailsCardFragmentFragment = (
  { __typename?: 'Query' }
  & { managers: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>>, externalAdjusters: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>>, eventTypes: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>>, catCodes: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>>, policyTypes: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>>, policyCovers: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>>, internalAssessors: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>> }
);

export type JobInfo_ClaimDetailsCardMetaFragmentFragment = (
  { __typename?: 'ClaimJob' }
  & Pick<ClaimJob, 'hasContents'>
  & { insurer: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'contentsref' | 'quickrepair' | 'policyTypeSuppliersView' | 'policyCoverSuppliersView' | 'enableMultipleRisks' | 'additionalRefNo' | 'useInternalAssessor' | 'cm2nd'>
  )>, building: Maybe<(
    { __typename?: 'ClaimPortfolio' }
    & Pick<ClaimPortfolio, 'toCollectExcess' | 'excessValue'>
  )>, contents: Maybe<(
    { __typename?: 'ClaimPortfolio' }
    & Pick<ClaimPortfolio, 'toCollectExcess' | 'excessValue'>
  )>, restoration: Maybe<(
    { __typename?: 'ClaimPortfolio' }
    & Pick<ClaimPortfolio, 'toCollectExcess' | 'excessValue'>
  )> }
);

export type JobInfo_CustomerInfoCardMetaFragmentFragment = (
  { __typename?: 'ClaimJob' }
  & { insurer: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'setupcustomerlogin' | 'removeHabitableAsbestos' | 'hideCategoryOfClaim'>
  )>, actions: Array<Maybe<(
    { __typename?: 'Action' }
    & Pick<Action, 'actionType' | 'isDisplay' | 'isDisabled'>
  )>> }
);

export type JobInfo_QuotingBuilderCardFragmentFragment = (
  { __typename?: 'Query' }
  & { quotingBuilders: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>> }
);

export type JobInfo_QuotingRestorerCardFragmentFragment = (
  { __typename?: 'Query' }
  & { quotingRestorers: Maybe<Array<Maybe<(
    { __typename?: 'FilterOption' }
    & Pick<FilterOption, 'value'>
    & { label: FilterOption['name'] }
  )>>> }
);

export type JobInfoTabFragmentFragment = (
  { __typename?: 'ClaimJob' }
  & Pick<ClaimJob, 'id' | 'refNumber' | 'contentsRefNum' | 'lodgeDate' | 'riskname' | 'additionalRefNumber' | '_allocatedBuilder' | '_allocatedRestorer' | 'requireCustomLogin' | 'customLoginEmail' | 'claimDescription'>
  & { insurer: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'companyId' | 'companyName'>
  )>, incidentDetail: Maybe<(
    { __typename?: 'IncidentDetail' }
    & Pick<IncidentDetail, 'incidentDate' | 'hold' | 'habitableProperty' | 'category'>
    & { eventType: Maybe<(
      { __typename?: 'IncidentEvent' }
      & Pick<IncidentEvent, 'eventTypeId'>
    )>, cATCode: Maybe<(
      { __typename?: 'CATCode' }
      & Pick<CatCode, 'cATCodeId'>
    )>, riskAddress: Maybe<(
      { __typename?: 'Address' }
      & Pick<Address, 'line1' | 'line2' | 'suburb' | 'state' | 'postcode'>
    )> }
  )>, caseManager: Maybe<(
    { __typename?: 'ClaimManager' }
    & Pick<ClaimManager, 'managerId'>
  )>, externalLossAdjuster: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'companyId'>
  )>, building: Maybe<(
    { __typename?: 'ClaimPortfolio' }
    & Pick<ClaimPortfolio, 'toCollectExcess' | 'excessValue' | 'sumInsured'>
    & { authorisedSupplier: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'companyName'>
    )>, scopingSupplier: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'companyId' | 'companyName'>
    )>, jobSuppliers: Maybe<Array<Maybe<(
      { __typename?: 'JobSupplier' }
      & { supplier: Maybe<(
        { __typename?: 'Company' }
        & Pick<Company, 'companyId' | 'companyName'>
      )>, quote: Maybe<(
        { __typename?: 'JobQuote' }
        & { supplier: Maybe<(
          { __typename?: 'Company' }
          & Pick<Company, 'companyId' | 'companyName'>
        )> }
      )> }
    )>>> }
  )>, contents: Maybe<(
    { __typename?: 'ClaimPortfolio' }
    & Pick<ClaimPortfolio, 'toCollectExcess' | 'excessValue' | 'sumInsured'>
  )>, restoration: Maybe<(
    { __typename?: 'ClaimPortfolio' }
    & Pick<ClaimPortfolio, 'toCollectExcess' | 'excessValue' | 'sumInsured'>
    & { authorisedSupplier: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'companyName'>
    )>, scopingSupplier: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'companyId' | 'companyName'>
    )>, jobSuppliers: Maybe<Array<Maybe<(
      { __typename?: 'JobSupplier' }
      & { supplier: Maybe<(
        { __typename?: 'Company' }
        & Pick<Company, 'companyId' | 'companyName'>
      )>, quote: Maybe<(
        { __typename?: 'JobQuote' }
        & { supplier: Maybe<(
          { __typename?: 'Company' }
          & Pick<Company, 'companyId' | 'companyName'>
        )> }
      )> }
    )>>> }
  )>, policyType: Maybe<(
    { __typename?: 'PolicyType' }
    & Pick<PolicyType, 'policyTypeId'>
  )>, policyCover: Maybe<(
    { __typename?: 'PolicyCover' }
    & Pick<PolicyCover, 'policyCoverId'>
  )>, homeAssessor: Maybe<(
    { __typename?: 'InternalAssesor' }
    & Pick<InternalAssesor, 'assesorId'>
  )>, brc: Maybe<(
    { __typename?: 'ClaimManager' }
    & Pick<ClaimManager, 'managerId'>
  )>, insured: Maybe<(
    { __typename?: 'ContactDetail' }
    & Pick<ContactDetail, 'salutation' | 'name' | 'email' | 'phone1' | 'phone2' | 'phone3' | 'fax'>
    & { postalAddress: Maybe<(
      { __typename?: 'Address' }
      & Pick<Address, 'line1' | 'line2' | 'suburb' | 'state' | 'postcode'>
    )> }
  )>, tenantDetails: Maybe<(
    { __typename?: 'Contact' }
    & Pick<Contact, 'name' | 'phone1' | 'phone2' | 'phone3'>
  )> }
);

export type JobInfoQueryVariables = {
  managersWhere?: Maybe<ClaimJobFilter>,
  externalAdjustersWhere?: Maybe<ClaimJobFilter>,
  eventTypeWhere?: Maybe<ClaimJobFilter>,
  catCodesWhere?: Maybe<ClaimJobFilter>,
  policyTypesWhere?: Maybe<ClaimJobFilter>,
  policyCoversWhere?: Maybe<ClaimJobFilter>,
  internalAssessorsWhere?: Maybe<ClaimJobFilter>,
  whereQuotingBuilder?: Maybe<ClaimJobFilter>,
  whereQuotingRestorer?: Maybe<ClaimJobFilter>
};


export type JobInfoQuery = (
  { __typename?: 'Query' }
  & { _states: Array<Maybe<(
    { __typename?: 'SelectOption' }
    & Pick<SelectOption, 'label' | 'value'>
  )>>, _claimCategories: Array<Maybe<(
    { __typename?: 'SelectOption' }
    & Pick<SelectOption, 'label' | 'value'>
  )>> }
  & JobInfo_ClaimDetailsCardFragmentFragment
  & JobInfo_QuotingBuilderCardFragmentFragment
  & JobInfo_QuotingRestorerCardFragmentFragment
);

export type JobInfoTabUpdateMutationVariables = {
  input: ClaimJobInput,
  where: EnDataEntityKey
};


export type JobInfoTabUpdateMutation = (
  { __typename?: 'Mutation' }
  & { updateClaimJob: Maybe<(
    { __typename?: 'ClaimJobPayload' }
    & Pick<ClaimJobPayload, 'success' | 'messages'>
    & { fieldErrors: Maybe<Array<Maybe<(
      { __typename?: 'EntityFieldError' }
      & Pick<EntityFieldError, 'fieldName' | 'level' | 'message'>
    )>>> }
  )> }
);

export type JobNoteListFragmentFragment = (
  { __typename?: 'ClaimNote' }
  & Pick<ClaimNote, 'portfolioType' | 'logDate' | 'private' | '_privacy' | 'message'>
  & { user: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userName'>
    & { company: Maybe<(
      { __typename?: 'CompanyProfile' }
      & Pick<CompanyProfile, 'companyName'>
    )> }
  )> }
);

export type JobNotesQueryVariables = {
  where?: Maybe<ClaimItemFilter>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>
};


export type JobNotesQuery = (
  { __typename?: 'Query' }
  & { claimNotes: Maybe<(
    { __typename?: 'ClaimNoteConnection' }
    & { edges: Maybe<Array<Maybe<(
      { __typename?: 'ClaimNoteEdge' }
      & { node: Maybe<(
        { __typename?: 'ClaimNote' }
        & Pick<ClaimNote, 'id'>
        & JobNoteListFragmentFragment
      )> }
    )>>> }
  )> }
);

export type JobNotesFragmentFragment = (
  { __typename?: 'ClaimJob' }
  & { actions: Array<Maybe<(
    { __typename?: 'Action' }
    & Pick<Action, 'actionType' | 'name' | 'isDisplay' | 'isDisabled'>
  )>>, building: Maybe<(
    { __typename?: 'ClaimPortfolio' }
    & { progress: Maybe<(
      { __typename?: 'ClaimProgress' }
      & Pick<ClaimProgress, 'initialCallMade' | 'appointmentBooked'>
    )>, claimStatus: Maybe<(
      { __typename?: 'ClaimStatus' }
      & Pick<ClaimStatus, 'statusId'>
    )>, jobSuppliers: Maybe<Array<Maybe<(
      { __typename?: 'JobSupplier' }
      & { quote: Maybe<(
        { __typename?: 'JobQuote' }
        & Pick<JobQuote, 'id'>
      )> }
    )>>> }
  )>, restoration: Maybe<(
    { __typename?: 'ClaimPortfolio' }
    & { progress: Maybe<(
      { __typename?: 'ClaimProgress' }
      & Pick<ClaimProgress, 'initialCallMade' | 'appointmentBooked'>
    )>, claimStatus: Maybe<(
      { __typename?: 'ClaimStatus' }
      & Pick<ClaimStatus, 'statusId'>
    )>, jobSuppliers: Maybe<Array<Maybe<(
      { __typename?: 'JobSupplier' }
      & { quote: Maybe<(
        { __typename?: 'JobQuote' }
        & Pick<JobQuote, 'id'>
      )> }
    )>>> }
  )> }
);

export type FormCardFragmentFragment = (
  { __typename?: 'Card' }
  & Pick<Card, 'id' | 'grid' | 'order' | 'title'>
  & { fields: Maybe<Array<(
    { __typename: 'DateTimeField' }
    & Pick<DateTimeField, 'name' | 'id' | 'grid' | 'order' | 'label'>
  ) | (
    { __typename: 'FileField' }
    & Pick<FileField, 'name' | 'id' | 'grid' | 'order' | 'label'>
  ) | (
    { __typename: 'GroupField' }
    & Pick<GroupField, 'name' | 'id' | 'grid' | 'order' | 'label'>
    & { fields: Maybe<Array<(
      { __typename: 'DateTimeField' }
      & Pick<DateTimeField, 'name' | 'order' | 'grid' | 'label'>
    ) | (
      { __typename: 'FileField' }
      & Pick<FileField, 'name' | 'order' | 'grid' | 'label'>
    ) | (
      { __typename: 'GroupField' }
      & Pick<GroupField, 'order' | 'grid' | 'label'>
    ) | (
      { __typename: 'InfoField' }
      & Pick<InfoField, 'value' | 'order' | 'grid' | 'label'>
    ) | (
      { __typename: 'SelectField' }
      & Pick<SelectField, 'name' | 'order' | 'grid' | 'label'>
      & { options: Maybe<Array<(
        { __typename?: 'SelectFieldOption' }
        & Pick<SelectFieldOption, 'label' | 'value'>
      )>> }
    ) | (
      { __typename: 'SwitchField' }
      & Pick<SwitchField, 'name' | 'order' | 'grid' | 'label'>
    ) | (
      { __typename: 'TextAreaField' }
      & Pick<TextAreaField, 'name' | 'rows' | 'rowsMax' | 'order' | 'grid' | 'label'>
    ) | (
      { __typename: 'TextField' }
      & Pick<TextField, 'name' | 'order' | 'grid' | 'label'>
    )>> }
  ) | (
    { __typename: 'InfoField' }
    & Pick<InfoField, 'value' | 'id' | 'grid' | 'order' | 'label'>
  ) | (
    { __typename: 'SelectField' }
    & Pick<SelectField, 'name' | 'id' | 'grid' | 'order' | 'label'>
    & { options: Maybe<Array<(
      { __typename?: 'SelectFieldOption' }
      & Pick<SelectFieldOption, 'label' | 'value'>
    )>> }
  ) | (
    { __typename: 'SwitchField' }
    & Pick<SwitchField, 'name' | 'id' | 'grid' | 'order' | 'label'>
  ) | (
    { __typename: 'TextAreaField' }
    & Pick<TextAreaField, 'name' | 'rows' | 'rowsMax' | 'id' | 'grid' | 'order' | 'label'>
  ) | (
    { __typename: 'TextField' }
    & Pick<TextField, 'name' | 'id' | 'grid' | 'order' | 'label'>
  )>> }
);

export type ReportTabFragmentFragment = (
  { __typename?: 'ClaimJob' }
  & Pick<ClaimJob, 'id'>
  & { reportForm: Maybe<(
    { __typename?: 'Form' }
    & Pick<Form, 'title'>
    & { cards: Maybe<Array<(
      { __typename?: 'Card' }
      & Pick<Card, 'id'>
      & FormCardFragmentFragment
    )>> }
  )>, reportData: Maybe<(
    { __typename?: 'Report' }
    & Pick<Report, 'data' | 'status'>
  )> }
);

export type SaveReportMutationVariables = {
  claimId: Scalars['ID'],
  data: Scalars['Json']
};


export type SaveReportMutation = (
  { __typename?: 'Mutation' }
  & { claimReportUpsert: (
    { __typename?: 'Report' }
    & Pick<Report, 'id'>
  ) }
);

export type SubmitReportMutationVariables = {
  claimId: Scalars['ID']
};


export type SubmitReportMutation = (
  { __typename?: 'Mutation' }
  & { claimReportSubmit: (
    { __typename?: 'Report' }
    & Pick<Report, 'id'>
  ) }
);

export type ResetReportMutationVariables = {
  claimId: Scalars['ID']
};


export type ResetReportMutation = (
  { __typename?: 'Mutation' }
  & { claimReportReset: (
    { __typename?: 'Report' }
    & Pick<Report, 'id'>
  ) }
);

export type ClaimListBodyFragment = (
  { __typename?: 'ClaimJob' }
  & Pick<ClaimJob, 'id' | 'hasBuilding' | 'hasContents' | 'hasRestoration' | '_portfolios' | 'refNumber' | 'lodgeDate' | '_requestDate' | '_request' | '_claimValue' | '_claimStatus' | '_claimBuilder' | '_claimRestorer' | '_insuredPhone' | '_incidentAddress'>
  & { insurer: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'companyName'>
  )>, building: Maybe<(
    { __typename?: 'ClaimPortfolio' }
    & Pick<ClaimPortfolio, 'authorisedValue' | 'scopedValue' | 'daysAtStatus'>
    & { jobSuppliers: Maybe<Array<Maybe<(
      { __typename?: 'JobSupplier' }
      & Pick<JobSupplier, 'requestDate' | 'requestType'>
      & { quote: Maybe<(
        { __typename?: 'JobQuote' }
        & Pick<JobQuote, 'total'>
        & { quoteStatus: Maybe<(
          { __typename?: 'ClaimStatus' }
          & Pick<ClaimStatus, 'statusName'>
        )> }
      )> }
    )>>>, claimStatus: Maybe<(
      { __typename?: 'ClaimStatus' }
      & Pick<ClaimStatus, 'statusName'>
    )>, authorisedSupplier: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'companyName'>
    )>, scopingSupplier: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'companyName'>
    )> }
  )>, contents: Maybe<(
    { __typename?: 'ClaimPortfolio' }
    & { jobSuppliers: Maybe<Array<Maybe<(
      { __typename?: 'JobSupplier' }
      & Pick<JobSupplier, 'requestDate' | 'requestType'>
      & { quote: Maybe<(
        { __typename?: 'JobQuote' }
        & Pick<JobQuote, 'total'>
        & { quoteStatus: Maybe<(
          { __typename?: 'ClaimStatus' }
          & Pick<ClaimStatus, 'statusName'>
        )> }
      )> }
    )>>>, claimStatus: Maybe<(
      { __typename?: 'ClaimStatus' }
      & Pick<ClaimStatus, 'statusName'>
    )> }
  )>, restoration: Maybe<(
    { __typename?: 'ClaimPortfolio' }
    & { jobSuppliers: Maybe<Array<Maybe<(
      { __typename?: 'JobSupplier' }
      & Pick<JobSupplier, 'requestDate' | 'requestType'>
      & { quote: Maybe<(
        { __typename?: 'JobQuote' }
        & Pick<JobQuote, 'total'>
        & { quoteStatus: Maybe<(
          { __typename?: 'ClaimStatus' }
          & Pick<ClaimStatus, 'statusName'>
        )> }
      )> }
    )>>>, claimStatus: Maybe<(
      { __typename?: 'ClaimStatus' }
      & Pick<ClaimStatus, 'statusName'>
    )>, authorisedSupplier: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'companyName'>
    )>, scopingSupplier: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'companyName'>
    )> }
  )>, insured: Maybe<(
    { __typename?: 'ContactDetail' }
    & Pick<ContactDetail, 'name' | 'phone1' | 'phone2' | 'phone3' | 'email'>
  )>, incidentDetail: Maybe<(
    { __typename?: 'IncidentDetail' }
    & Pick<IncidentDetail, 'incidentDate'>
    & { riskAddress: Maybe<(
      { __typename?: 'Address' }
      & Pick<Address, 'suburb' | 'state' | 'line1' | 'postcode'>
    )> }
  )> }
);

export type ClaimListFilterQueryVariables = {};


export type ClaimListFilterQuery = (
  { __typename?: 'Query' }
  & { currentUser: Maybe<(
    { __typename?: 'AuthenticatedUser' }
    & { claimFilters: Maybe<Array<Maybe<(
      { __typename?: 'FilterInput' }
      & Pick<FilterInput, 'id' | 'type' | 'label' | 'name'>
      & { options: Maybe<Array<Maybe<(
        { __typename?: 'FilterInputOption' }
        & Pick<FilterInputOption, 'group' | 'label'>
        & { value: FilterInputOption['id'] }
      )>>> }
    )>>> }
  )> }
);

export type ClaimListWaterfallFilterQueryVariables = {
  where: ClaimStatusVolumeWhere
};


export type ClaimListWaterfallFilterQuery = (
  { __typename?: 'Query' }
  & { currentUser: Maybe<(
    { __typename?: 'AuthenticatedUser' }
    & { waterfallFilters: Maybe<Array<(
      { __typename?: 'ClaimStatusVolumeGroup' }
      & Pick<ClaimStatusVolumeGroup, 'id'>
      & { items: Array<(
        { __typename?: 'ClaimStatusVolume' }
        & Pick<ClaimStatusVolume, 'label' | 'claimCount' | 'color'>
        & { value: ClaimStatusVolume['id'] }
      )> }
    )>> }
  )> }
);

export type ClaimListDataQueryVariables = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  where?: Maybe<ClaimJobFilter>
};


export type ClaimListDataQuery = (
  { __typename?: 'Query' }
  & { currentUser: Maybe<(
    { __typename?: 'AuthenticatedUser' }
    & Pick<AuthenticatedUser, 'userType'>
  )>, claimJobs: Maybe<(
    { __typename?: 'ClaimJobConnection' }
    & Pick<ClaimJobConnection, 'totalCount'>
    & { edges: Maybe<Array<Maybe<(
      { __typename?: 'ClaimJobEdge' }
      & { node: Maybe<(
        { __typename?: 'ClaimJob' }
        & ClaimListBodyFragment
      )> }
    )>>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'endCursor' | 'hasNextPage'>
    ) }
  )> }
);

export type CommunicationActionAcknowledgeMutationVariables = {
  where: EnDataPortfolioKey
};


export type CommunicationActionAcknowledgeMutation = (
  { __typename?: 'Mutation' }
  & { claimCommunicationAcknoledge: Maybe<(
    { __typename?: 'ClaimCommunicationPayload' }
    & Pick<ClaimCommunicationPayload, 'messages' | 'success'>
  )> }
);

export type CommunicationActionReplyMutationVariables = {
  input: ClaimCommunicationCreate
};


export type CommunicationActionReplyMutation = (
  { __typename?: 'Mutation' }
  & { createClaimCommunication: Maybe<(
    { __typename?: 'ClaimCommunicationPayload' }
    & Pick<ClaimCommunicationPayload, 'messages' | 'success'>
  )> }
);

export type ClaimCommunicationBodyFragment = (
  { __typename?: 'ClaimCommunication' }
  & Pick<ClaimCommunication, 'id' | 'claimId' | 'portfolioType' | 'claimRef' | 'sendDate' | 'senderName' | 'senderCompanyName' | 'message' | 'senderCompanyId' | 'senderRole' | 'communicationId'>
);

export type CommunicationHeaderFragmentFragment = (
  { __typename?: 'FilterInput' }
  & Pick<FilterInput, 'id' | 'type' | 'label' | 'name'>
  & { options: Maybe<Array<Maybe<(
    { __typename?: 'FilterInputOption' }
    & Pick<FilterInputOption, 'group' | 'label'>
    & { value: FilterInputOption['id'] }
  )>>> }
);

export type CommunicationListFiltersQueryVariables = {};


export type CommunicationListFiltersQuery = (
  { __typename?: 'Query' }
  & { currentUser: Maybe<(
    { __typename?: 'AuthenticatedUser' }
    & { communicationFilters: Maybe<Array<Maybe<(
      { __typename?: 'FilterInput' }
      & CommunicationHeaderFragmentFragment
    )>>> }
  )> }
);

export type CommunicationsDataQueryVariables = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  where?: Maybe<CommunicationFilter>
};


export type CommunicationsDataQuery = (
  { __typename?: 'Query' }
  & { claimCommunications: Maybe<(
    { __typename?: 'ClaimCommunicationConnection' }
    & Pick<ClaimCommunicationConnection, 'totalCount'>
    & { edges: Maybe<Array<Maybe<(
      { __typename?: 'ClaimCommunicationEdge' }
      & { node: Maybe<(
        { __typename?: 'ClaimCommunication' }
        & ClaimCommunicationBodyFragment
      )> }
    )>>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'endCursor' | 'hasNextPage'>
    ) }
  )> }
);

export type KpiAlertDetailsQueryVariables = {
  where: CaseReportIndex,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>
};


export type KpiAlertDetailsQuery = (
  { __typename?: 'Query' }
  & { reportingClaimJobGeneral: Maybe<(
    { __typename?: 'ClaimJobGeneralReportConnection' }
    & { edges: Maybe<Array<Maybe<(
      { __typename?: 'ClaimJobGeneralReportEdge' }
      & { node: Maybe<(
        { __typename?: 'ClaimJobGeneral' }
        & Pick<ClaimJobGeneral, 'id' | 'portfolioType' | 'refNumber' | 'insuredName' | 'caseManagerName' | 'daysAtStatus'>
        & { status: Maybe<(
          { __typename?: 'ClaimStatus' }
          & Pick<ClaimStatus, 'statusName'>
        )> }
      )> }
    )>>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'endCursor' | 'hasNextPage'>
    ) }
  )> }
);

export type DashboardHeaderFragmentFragment = (
  { __typename?: 'FilterInput' }
  & Pick<FilterInput, 'id' | 'type' | 'label' | 'name'>
  & { options: Maybe<Array<Maybe<(
    { __typename?: 'FilterInputOption' }
    & Pick<FilterInputOption, 'group' | 'label'>
    & { value: FilterInputOption['id'] }
  )>>> }
);

export type DashboardFiltersQueryVariables = {};


export type DashboardFiltersQuery = (
  { __typename?: 'Query' }
  & { currentUser: Maybe<(
    { __typename?: 'AuthenticatedUser' }
    & Pick<AuthenticatedUser, 'userType'>
    & { dashboardFilters: Maybe<Array<Maybe<(
      { __typename?: 'FilterInput' }
      & DashboardHeaderFragmentFragment
    )>>> }
  )>, dashboardFilters: Maybe<Array<Maybe<(
    { __typename?: 'FilterElement' }
    & Pick<FilterElement, 'id' | 'name'>
    & { options: Maybe<Array<Maybe<(
      { __typename?: 'FilterOption' }
      & Pick<FilterOption, 'group' | 'value'>
      & { label: FilterOption['name'] }
    )>>> }
  )>>> }
);

export type DashboardKpiQueryVariables = {
  where: DashboardWidgetIndex
};


export type DashboardKpiQuery = (
  { __typename?: 'Query' }
  & { dashboardWidgets: Maybe<Array<Maybe<(
    { __typename?: 'WidgetGraphType' }
    & Pick<WidgetGraphType, 'title' | 'viewName' | 'labels' | 'description'>
    & { data: Maybe<Array<Maybe<(
      { __typename?: 'WidgetData' }
      & Pick<WidgetData, 'dataSetName' | 'internalFilterName' | 'legend' | 'valueDisplay' | 'valueGroup' | 'valueUnit' | 'valueSense' | 'values'>
    )>>> }
  )>>> }
);

export type AppRootQueryVariables = {};


export type AppRootQuery = (
  { __typename?: 'Query' }
  & { currentUser: Maybe<(
    { __typename?: 'AuthenticatedUser' }
    & Pick<AuthenticatedUser, '_appRoutes' | '_rootRoute'>
    & { _customisation: Maybe<(
      { __typename?: 'AppCustomization' }
      & Pick<AppCustomization, 'alias' | 'favicon' | 'logo' | 'companyLogo'>
    )> }
  )> }
);

export type LoginQueryVariables = {};


export type LoginQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'AuthenticatedUser' }
    & Pick<AuthenticatedUser, 'id' | 'name'>
  )> }
);

export type SigninMutationVariables = {
  input: UserCredential
};


export type SigninMutation = (
  { __typename?: 'Mutation' }
  & { userAuthenticateAllServer: Maybe<Array<Maybe<(
    { __typename?: 'UserValidation' }
    & Pick<UserValidation, 'accessToken' | 'refreshToken'>
    & { user: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userName'>
    )> }
  )>>> }
);

export const ClaimDetailsCardFragmentFragmentDoc = gql`
    fragment ClaimDetailsCardFragment on Query {
  me: currentUser {
    userType
  }
  managers: claimFilterOptions(where: $managersWhere) {
    label: name
    value
  }
  adjusters: claimFilterOptions(where: $adjustersWhere) {
    label: name
    value
  }
  builders: claimFilterOptions(where: $buildersWhere) {
    label: name
    value
  }
  restorers: claimFilterOptions(where: $restorersWhere) {
    label: name
    value
  }
  eventTypes: claimFilterOptions(where: $eventTypeWhere) {
    label: name
    value
  }
  catCodes: claimFilterOptions(where: $catCodesWhere) {
    label: name
    value
  }
  policyTypes: claimFilterOptions(where: $policyTypesWhere) {
    label: name
    value
  }
  policyCovers: claimFilterOptions(where: $policyCoversWhere) {
    label: name
    value
  }
  internalAssessors: claimFilterOptions(where: $internalAssessorsWhere) {
    label: name
    value
  }
}
    `;
export const ClaimDetailsCardMetaFragmentFragmentDoc = gql`
    fragment ClaimDetailsCardMetaFragment on CompanyProfile {
  contentsref
  quickrepair
  policyTypeSuppliersView
  policyCoverSuppliersView
  isToProvideSiteReportView
  useInternalAssessor
  cm2nd
  enableMultipleRisks
}
    `;
export const CustomerDetailsCardFragmentFragmentDoc = gql`
    fragment CustomerDetailsCardFragment on Query {
  catCodes: claimFilterOptions(where: $catCodesWhere) {
    label: name
    value
  }
}
    `;
export const CustomerDetailsCardMetaFragmentFragmentDoc = gql`
    fragment CustomerDetailsCardMetaFragment on CompanyProfile {
  companyName
  policyTypeSuppliersView
  insrefnumLength
  removeHabitableAsbestos
  setupcustomerlogin
  hideCategoryOfClaim
}
    `;
export const QuotingBuildersCardFragmentFragmentDoc = gql`
    fragment QuotingBuildersCardFragment on Query {
  builders: claimFilterOptions(where: $buildersWhere) {
    label: name
    value
  }
}
    `;
export const QuotingBuildersCardMetaFragmentFragmentDoc = gql`
    fragment QuotingBuildersCardMetaFragment on CompanyProfile {
  quotesperclaim
}
    `;
export const QuotingRestorersCardFragmentFragmentDoc = gql`
    fragment QuotingRestorersCardFragment on Query {
  restorers: claimFilterOptions(where: $restorersWhere) {
    label: name
    value
  }
}
    `;
export const InfoCardDataFragmentFragmentDoc = gql`
    fragment InfoCardDataFragment on ClaimJob {
  insurer {
    companyName
    policyTypeSuppliersView
    policyCoverSuppliersView
  }
  refNumber
  insured {
    name
    phone1
    phone2
    phone3
    email
  }
  incidentDetail {
    riskAddress {
      line1
      suburb
      state
      postcode
    }
    eventType {
      eventName
    }
    cATCode {
      cATCodeName
    }
  }
  _incidentAddress @client
  insured {
    name
    phone1
    phone2
    phone3
    email
  }
  _insuredPhone @client
  lodgeDate
  incidentDetail {
    eventType {
      eventName
    }
  }
  incidentDetail {
    cATCode {
      cATCodeName
    }
  }
  policyType {
    policyTypeName
  }
  policyCover {
    policyCoverName
  }
  insurer {
    policyTypeSuppliersView
    policyCoverSuppliersView
  }
  building {
    claimStatus {
      statusName
    }
    scopingSupplier {
      companyName
      companyPhone1
      companyPhone2
    }
    authorisedSupplier {
      companyName
      companyPhone1
      companyPhone2
    }
    jobSuppliers {
      quote {
        supplier {
          companyName
        }
        quoteStatus: quoteJobStatus {
          statusName
        }
      }
    }
    toCollectExcess
    excessValue
    _providerAndStatus @client
    _portfolioTooltips @client
  }
  restoration {
    claimStatus {
      statusName
    }
    scopingSupplier {
      companyName
      companyPhone1
      companyPhone2
    }
    authorisedSupplier {
      companyName
      companyPhone1
      companyPhone2
    }
    jobSuppliers {
      quote {
        supplier {
          companyName
        }
        quoteStatus: quoteJobStatus {
          statusName
        }
      }
    }
    toCollectExcess
    excessValue
    _providerAndStatus @client
    _portfolioTooltips @client
  }
  contents {
    portfolioType
    claimStatus {
      statusName
    }
    toCollectExcess
    excessValue
    _providerAndStatus @client
    _portfolioTooltips @client
  }
}
    `;
export const AddClaimTypeDialogClaimFragmentFragmentDoc = gql`
    fragment AddClaimTypeDialogClaimFragment on ClaimJob {
  claimId
  hasBuilding
  hasContents
  hasRestoration
  _portfolios @client
  insurer {
    companyId
  }
  incidentDetail {
    riskAddress {
      postcode
    }
  }
}
    `;
export const AddDocumentClaimFragmentFragmentDoc = gql`
    fragment AddDocumentClaimFragment on ClaimJob {
  claimId
  hasBuilding
  hasContents
  hasRestoration
  _portfolios @client
  insurer {
    isFeeModule
  }
}
    `;
export const AddDocumentMetaFragmentFragmentDoc = gql`
    fragment AddDocumentMetaFragment on AuthenticatedUser {
  userType
}
    `;
export const JobInfo_ClaimDetailsCardFragmentFragmentDoc = gql`
    fragment JobInfo_ClaimDetailsCardFragment on Query {
  managers: claimFilterOptions(where: $managersWhere) {
    label: name
    value
  }
  externalAdjusters: claimFilterOptions(where: $externalAdjustersWhere) {
    label: name
    value
  }
  eventTypes: claimFilterOptions(where: $eventTypeWhere) {
    label: name
    value
  }
  catCodes: claimFilterOptions(where: $catCodesWhere) {
    label: name
    value
  }
  policyTypes: claimFilterOptions(where: $policyTypesWhere) {
    label: name
    value
  }
  policyCovers: claimFilterOptions(where: $policyCoversWhere) {
    label: name
    value
  }
  internalAssessors: claimFilterOptions(where: $internalAssessorsWhere) {
    label: name
    value
  }
}
    `;
export const JobInfo_ClaimDetailsCardMetaFragmentFragmentDoc = gql`
    fragment JobInfo_ClaimDetailsCardMetaFragment on ClaimJob {
  hasContents
  insurer {
    contentsref
    quickrepair
    policyTypeSuppliersView
    policyCoverSuppliersView
    enableMultipleRisks
    additionalRefNo
    useInternalAssessor
    cm2nd
  }
  building {
    toCollectExcess
    excessValue
  }
  contents {
    toCollectExcess
    excessValue
  }
  restoration {
    toCollectExcess
    excessValue
  }
}
    `;
export const JobInfo_CustomerInfoCardMetaFragmentFragmentDoc = gql`
    fragment JobInfo_CustomerInfoCardMetaFragment on ClaimJob {
  insurer {
    setupcustomerlogin
    removeHabitableAsbestos
    hideCategoryOfClaim
  }
  actions {
    actionType
    isDisplay
    isDisabled
  }
}
    `;
export const JobInfo_QuotingBuilderCardFragmentFragmentDoc = gql`
    fragment JobInfo_QuotingBuilderCardFragment on Query {
  quotingBuilders: claimFilterOptions(where: $whereQuotingBuilder) {
    label: name
    value
  }
}
    `;
export const JobInfo_QuotingRestorerCardFragmentFragmentDoc = gql`
    fragment JobInfo_QuotingRestorerCardFragment on Query {
  quotingRestorers: claimFilterOptions(where: $whereQuotingRestorer) {
    label: name
    value
  }
}
    `;
export const JobInfoTabFragmentFragmentDoc = gql`
    fragment JobInfoTabFragment on ClaimJob {
  id
  insurer {
    companyId
    companyName
  }
  incidentDetail {
    incidentDate
    hold
    eventType {
      eventTypeId
    }
    cATCode {
      cATCodeId
    }
    riskAddress {
      line1
      line2
      suburb
      state
      postcode
    }
    habitableProperty
    category
  }
  caseManager {
    managerId
  }
  externalLossAdjuster {
    companyId
  }
  refNumber
  contentsRefNum
  lodgeDate
  incidentDetail {
    hold
  }
  incidentDetail {
    eventType {
      eventTypeId
    }
  }
  incidentDetail {
    cATCode {
      cATCodeId
    }
  }
  building {
    toCollectExcess
    excessValue
    sumInsured
    authorisedSupplier {
      companyName
    }
    scopingSupplier {
      companyId
      companyName
    }
    jobSuppliers {
      supplier {
        companyId
        companyName
      }
      quote {
        supplier {
          companyId
          companyName
        }
      }
    }
  }
  contents {
    toCollectExcess
    excessValue
    sumInsured
  }
  restoration {
    toCollectExcess
    excessValue
    sumInsured
    authorisedSupplier {
      companyName
    }
    scopingSupplier {
      companyId
      companyName
    }
    jobSuppliers {
      supplier {
        companyId
        companyName
      }
      quote {
        supplier {
          companyId
          companyName
        }
      }
    }
  }
  policyType {
    policyTypeId
  }
  policyCover {
    policyCoverId
  }
  riskname
  additionalRefNumber
  homeAssessor {
    assesorId
  }
  brc {
    managerId
  }
  building {
    authorisedSupplier {
      companyName
    }
    scopingSupplier {
      companyId
      companyName
    }
    jobSuppliers {
      supplier {
        companyId
        companyName
      }
      quote {
        supplier {
          companyId
          companyName
        }
      }
    }
  }
  _allocatedBuilder @client
  restoration {
    authorisedSupplier {
      companyName
    }
    scopingSupplier {
      companyId
      companyName
    }
    jobSuppliers {
      supplier {
        companyId
        companyName
      }
      quote {
        supplier {
          companyId
          companyName
        }
      }
    }
  }
  _allocatedRestorer @client
  insured {
    salutation
    name
    email
    phone1
    phone2
    phone3
    fax
    postalAddress {
      line1
      line2
      suburb
      state
      postcode
    }
  }
  incidentDetail {
    riskAddress {
      line1
      line2
      suburb
      state
      postcode
    }
    habitableProperty
    category
  }
  requireCustomLogin
  customLoginEmail
  tenantDetails {
    name
    phone1
    phone2
    phone3
  }
  claimDescription
}
    `;
export const JobNoteListFragmentFragmentDoc = gql`
    fragment JobNoteListFragment on ClaimNote {
  portfolioType
  logDate
  private
  _privacy @client
  message
  user {
    userName
    company {
      companyName
    }
  }
}
    `;
export const JobNotesFragmentFragmentDoc = gql`
    fragment JobNotesFragment on ClaimJob {
  actions {
    actionType
    name
    isDisplay
    isDisabled
  }
  building {
    progress {
      initialCallMade
      appointmentBooked
    }
    claimStatus {
      statusId
    }
    jobSuppliers {
      quote {
        id
      }
    }
  }
  restoration {
    progress {
      initialCallMade
      appointmentBooked
    }
    claimStatus {
      statusId
    }
    jobSuppliers {
      quote {
        id
      }
    }
  }
}
    `;
export const FormCardFragmentFragmentDoc = gql`
    fragment FormCardFragment on Card {
  id
  grid
  order
  title
  fields {
    __typename
    id
    grid
    order
    label
    ... on InfoField {
      value
    }
    ... on TextField {
      name
    }
    ... on TextAreaField {
      name
      rows
      rowsMax
    }
    ... on SelectField {
      name
      options {
        label
        value
      }
    }
    ... on SwitchField {
      name
    }
    ... on FileField {
      name
    }
    ... on DateTimeField {
      name
    }
    ... on GroupField {
      name
      fields {
        __typename
        order
        grid
        label
        ... on InfoField {
          value
        }
        ... on TextField {
          name
        }
        ... on TextAreaField {
          name
          rows
          rowsMax
        }
        ... on SelectField {
          name
          options {
            label
            value
          }
        }
        ... on SwitchField {
          name
        }
        ... on FileField {
          name
        }
        ... on DateTimeField {
          name
        }
      }
    }
  }
}
    `;
export const ReportTabFragmentFragmentDoc = gql`
    fragment ReportTabFragment on ClaimJob {
  id
  reportForm {
    title
    cards {
      id
      ...FormCardFragment
    }
  }
  reportData {
    data
    status
  }
}
    ${FormCardFragmentFragmentDoc}`;
export const ClaimListBodyFragmentDoc = gql`
    fragment ClaimListBody on ClaimJob {
  id
  hasBuilding
  hasContents
  hasRestoration
  _portfolios @client
  refNumber
  insurer {
    companyName
  }
  lodgeDate
  building {
    jobSuppliers {
      requestDate
      requestType
      quote {
        total
        quoteStatus {
          statusName
        }
      }
    }
    authorisedValue
    scopedValue
    claimStatus {
      statusName
    }
    authorisedSupplier {
      companyName
    }
    scopingSupplier {
      companyName
    }
    daysAtStatus
  }
  contents {
    jobSuppliers {
      requestDate
      requestType
      quote {
        total
        quoteStatus {
          statusName
        }
      }
    }
    claimStatus {
      statusName
    }
  }
  restoration {
    jobSuppliers {
      requestDate
      requestType
      quote {
        total
        quoteStatus {
          statusName
        }
      }
    }
    claimStatus {
      statusName
    }
    authorisedSupplier {
      companyName
    }
    scopingSupplier {
      companyName
    }
  }
  _requestDate @client
  _request @client
  insured {
    name
    phone1
    phone2
    phone3
    email
  }
  incidentDetail {
    riskAddress {
      suburb
      state
      line1
      postcode
    }
    incidentDate
  }
  building {
    authorisedValue
    scopedValue
  }
  building {
    jobSuppliers {
      quote {
        total
        quoteStatus {
          statusName
        }
      }
    }
  }
  contents {
    jobSuppliers {
      quote {
        total
        quoteStatus {
          statusName
        }
      }
    }
  }
  restoration {
    jobSuppliers {
      quote {
        total
        quoteStatus {
          statusName
        }
      }
    }
  }
  _claimValue @client
  building {
    jobSuppliers {
      quote {
        quoteStatus {
          statusName
        }
      }
    }
  }
  building {
    claimStatus {
      statusName
    }
  }
  contents {
    jobSuppliers {
      quote {
        quoteStatus {
          statusName
        }
      }
    }
  }
  contents {
    claimStatus {
      statusName
    }
  }
  restoration {
    jobSuppliers {
      quote {
        quoteStatus {
          statusName
        }
      }
    }
  }
  restoration {
    claimStatus {
      statusName
    }
  }
  _claimStatus @client
  building {
    authorisedSupplier {
      companyName
    }
    scopingSupplier {
      companyName
    }
  }
  _claimBuilder @client
  restoration {
    authorisedSupplier {
      companyName
    }
    scopingSupplier {
      companyName
    }
  }
  _claimRestorer @client
  building {
    claimStatus {
      statusName
    }
  }
  building {
    daysAtStatus
  }
  restoration {
    claimStatus {
      statusName
    }
  }
  contents {
    claimStatus {
      statusName
    }
  }
  refNumber
  insured {
    name
    phone1
    phone2
    phone3
    email
  }
  _insuredPhone @client
  incidentDetail {
    incidentDate
    riskAddress {
      line1
      suburb
      state
      postcode
    }
  }
  _incidentAddress @client
}
    `;
export const ClaimCommunicationBodyFragmentDoc = gql`
    fragment ClaimCommunicationBody on ClaimCommunication {
  id
  claimId
  portfolioType
  claimRef
  sendDate
  senderName
  senderCompanyName
  message
  senderCompanyId
  senderRole
  communicationId
}
    `;
export const CommunicationHeaderFragmentFragmentDoc = gql`
    fragment CommunicationHeaderFragment on FilterInput {
  id
  type
  label
  name
  options {
    group
    label
    value: id
  }
}
    `;
export const DashboardHeaderFragmentFragmentDoc = gql`
    fragment DashboardHeaderFragment on FilterInput {
  id
  type
  label
  name
  options {
    group
    label
    value: id
  }
}
    `;
export const CommunicationmenuDocument = gql`
    query Communicationmenu {
  communications: claimCommuications(first: 2, where: {boxes: Inbox, acknowledged: false}) {
    totalCount
    edges {
      node {
        id
        claimRef
        message
      }
    }
  }
}
    `;

/**
 * __useCommunicationmenuQuery__
 *
 * To run a query within a React component, call `useCommunicationmenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunicationmenuQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunicationmenuQuery({
 *   variables: {
 *   },
 * });
 */
export function useCommunicationmenuQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunicationmenuQuery, CommunicationmenuQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunicationmenuQuery, CommunicationmenuQueryVariables>(CommunicationmenuDocument, baseOptions);
      }
export function useCommunicationmenuLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunicationmenuQuery, CommunicationmenuQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunicationmenuQuery, CommunicationmenuQueryVariables>(CommunicationmenuDocument, baseOptions);
        }
export type CommunicationmenuQueryHookResult = ReturnType<typeof useCommunicationmenuQuery>;
export type CommunicationmenuLazyQueryHookResult = ReturnType<typeof useCommunicationmenuLazyQuery>;
export type CommunicationmenuQueryResult = ApolloReactCommon.QueryResult<CommunicationmenuQuery, CommunicationmenuQueryVariables>;
export const AddClaimDocument = gql`
    mutation AddClaim($input: ClaimJobCreate!) {
  createClaimJob(input: $input) {
    success
    messages
    fieldErrors {
      fieldName
      level
      message
    }
    result {
      id
      claimId
    }
  }
}
    `;
export type AddClaimMutationFn = ApolloReactCommon.MutationFunction<AddClaimMutation, AddClaimMutationVariables>;

/**
 * __useAddClaimMutation__
 *
 * To run a mutation, you first call `useAddClaimMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddClaimMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addClaimMutation, { data, loading, error }] = useAddClaimMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddClaimMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddClaimMutation, AddClaimMutationVariables>) {
        return ApolloReactHooks.useMutation<AddClaimMutation, AddClaimMutationVariables>(AddClaimDocument, baseOptions);
      }
export type AddClaimMutationHookResult = ReturnType<typeof useAddClaimMutation>;
export type AddClaimMutationResult = ApolloReactCommon.MutationResult<AddClaimMutation>;
export type AddClaimMutationOptions = ApolloReactCommon.BaseMutationOptions<AddClaimMutation, AddClaimMutationVariables>;
export const AddClaimRootDocument = gql`
    query AddClaimRoot($companyWhere: ENDataPortfolioKey!, $managersWhere: ClaimJobFilter, $adjustersWhere: ClaimJobFilter, $buildersWhere: ClaimJobFilter, $restorersWhere: ClaimJobFilter, $eventTypeWhere: ClaimJobFilter, $catCodesWhere: ClaimJobFilter, $policyTypesWhere: ClaimJobFilter, $policyCoversWhere: ClaimJobFilter, $internalAssessorsWhere: ClaimJobFilter) {
  ...CustomerDetailsCardFragment
  ...ClaimDetailsCardFragment
  ...QuotingBuildersCardFragment
  ...QuotingRestorersCardFragment
  company(where: $companyWhere) {
    ...CustomerDetailsCardMetaFragment
    ...ClaimDetailsCardMetaFragment
    ...QuotingBuildersCardMetaFragment
  }
}
    ${CustomerDetailsCardFragmentFragmentDoc}
${ClaimDetailsCardFragmentFragmentDoc}
${QuotingBuildersCardFragmentFragmentDoc}
${QuotingRestorersCardFragmentFragmentDoc}
${CustomerDetailsCardMetaFragmentFragmentDoc}
${ClaimDetailsCardMetaFragmentFragmentDoc}
${QuotingBuildersCardMetaFragmentFragmentDoc}`;

/**
 * __useAddClaimRootQuery__
 *
 * To run a query within a React component, call `useAddClaimRootQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddClaimRootQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddClaimRootQuery({
 *   variables: {
 *      companyWhere: // value for 'companyWhere'
 *      managersWhere: // value for 'managersWhere'
 *      adjustersWhere: // value for 'adjustersWhere'
 *      buildersWhere: // value for 'buildersWhere'
 *      restorersWhere: // value for 'restorersWhere'
 *      eventTypeWhere: // value for 'eventTypeWhere'
 *      catCodesWhere: // value for 'catCodesWhere'
 *      policyTypesWhere: // value for 'policyTypesWhere'
 *      policyCoversWhere: // value for 'policyCoversWhere'
 *      internalAssessorsWhere: // value for 'internalAssessorsWhere'
 *   },
 * });
 */
export function useAddClaimRootQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AddClaimRootQuery, AddClaimRootQueryVariables>) {
        return ApolloReactHooks.useQuery<AddClaimRootQuery, AddClaimRootQueryVariables>(AddClaimRootDocument, baseOptions);
      }
export function useAddClaimRootLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AddClaimRootQuery, AddClaimRootQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AddClaimRootQuery, AddClaimRootQueryVariables>(AddClaimRootDocument, baseOptions);
        }
export type AddClaimRootQueryHookResult = ReturnType<typeof useAddClaimRootQuery>;
export type AddClaimRootLazyQueryHookResult = ReturnType<typeof useAddClaimRootLazyQuery>;
export type AddClaimRootQueryResult = ApolloReactCommon.QueryResult<AddClaimRootQuery, AddClaimRootQueryVariables>;
export const ChooseCompanyDocument = gql`
    query ChooseCompany {
  claimFilterOptions(where: {subject: "insurers"}) {
    label: name
    value
  }
}
    `;

/**
 * __useChooseCompanyQuery__
 *
 * To run a query within a React component, call `useChooseCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useChooseCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChooseCompanyQuery({
 *   variables: {
 *   },
 * });
 */
export function useChooseCompanyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ChooseCompanyQuery, ChooseCompanyQueryVariables>) {
        return ApolloReactHooks.useQuery<ChooseCompanyQuery, ChooseCompanyQueryVariables>(ChooseCompanyDocument, baseOptions);
      }
export function useChooseCompanyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ChooseCompanyQuery, ChooseCompanyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ChooseCompanyQuery, ChooseCompanyQueryVariables>(ChooseCompanyDocument, baseOptions);
        }
export type ChooseCompanyQueryHookResult = ReturnType<typeof useChooseCompanyQuery>;
export type ChooseCompanyLazyQueryHookResult = ReturnType<typeof useChooseCompanyLazyQuery>;
export type ChooseCompanyQueryResult = ApolloReactCommon.QueryResult<ChooseCompanyQuery, ChooseCompanyQueryVariables>;
export const ClaimMetaContextDocument = gql`
    query ClaimMetaContext($where: ENDataEntityKey!) {
  me: currentUser {
    ...AddDocumentMetaFragment
  }
  user: me {
    company {
      companyId
    }
  }
  claim: claimJob(where: $where) {
    claimId
    ...AddClaimTypeDialogClaimFragment
    ...AddDocumentClaimFragment
    ...JobInfo_ClaimDetailsCardMetaFragment
    ...JobInfo_CustomerInfoCardMetaFragment
  }
}
    ${AddDocumentMetaFragmentFragmentDoc}
${AddClaimTypeDialogClaimFragmentFragmentDoc}
${AddDocumentClaimFragmentFragmentDoc}
${JobInfo_ClaimDetailsCardMetaFragmentFragmentDoc}
${JobInfo_CustomerInfoCardMetaFragmentFragmentDoc}`;

/**
 * __useClaimMetaContextQuery__
 *
 * To run a query within a React component, call `useClaimMetaContextQuery` and pass it any options that fit your needs.
 * When your component renders, `useClaimMetaContextQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClaimMetaContextQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useClaimMetaContextQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ClaimMetaContextQuery, ClaimMetaContextQueryVariables>) {
        return ApolloReactHooks.useQuery<ClaimMetaContextQuery, ClaimMetaContextQueryVariables>(ClaimMetaContextDocument, baseOptions);
      }
export function useClaimMetaContextLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ClaimMetaContextQuery, ClaimMetaContextQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ClaimMetaContextQuery, ClaimMetaContextQueryVariables>(ClaimMetaContextDocument, baseOptions);
        }
export type ClaimMetaContextQueryHookResult = ReturnType<typeof useClaimMetaContextQuery>;
export type ClaimMetaContextLazyQueryHookResult = ReturnType<typeof useClaimMetaContextLazyQuery>;
export type ClaimMetaContextQueryResult = ApolloReactCommon.QueryResult<ClaimMetaContextQuery, ClaimMetaContextQueryVariables>;
export const AddClaimTypeDialogDocument = gql`
    query AddClaimTypeDialog($buildersWhere: ClaimJobFilter, $restorersWhere: ClaimJobFilter) {
  building: claimFilterOptions(where: $buildersWhere) {
    label: name
    value
  }
  restoration: claimFilterOptions(where: $restorersWhere) {
    label: name
    value
  }
}
    `;

/**
 * __useAddClaimTypeDialogQuery__
 *
 * To run a query within a React component, call `useAddClaimTypeDialogQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddClaimTypeDialogQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddClaimTypeDialogQuery({
 *   variables: {
 *      buildersWhere: // value for 'buildersWhere'
 *      restorersWhere: // value for 'restorersWhere'
 *   },
 * });
 */
export function useAddClaimTypeDialogQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AddClaimTypeDialogQuery, AddClaimTypeDialogQueryVariables>) {
        return ApolloReactHooks.useQuery<AddClaimTypeDialogQuery, AddClaimTypeDialogQueryVariables>(AddClaimTypeDialogDocument, baseOptions);
      }
export function useAddClaimTypeDialogLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AddClaimTypeDialogQuery, AddClaimTypeDialogQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AddClaimTypeDialogQuery, AddClaimTypeDialogQueryVariables>(AddClaimTypeDialogDocument, baseOptions);
        }
export type AddClaimTypeDialogQueryHookResult = ReturnType<typeof useAddClaimTypeDialogQuery>;
export type AddClaimTypeDialogLazyQueryHookResult = ReturnType<typeof useAddClaimTypeDialogLazyQuery>;
export type AddClaimTypeDialogQueryResult = ApolloReactCommon.QueryResult<AddClaimTypeDialogQuery, AddClaimTypeDialogQueryVariables>;
export const AddClaimTypeDocument = gql`
    mutation AddClaimType($input: AddPortfolioInput!, $where: ENDataEntityKey!) {
  claimAddPortfolio(input: $input, where: $where) {
    success
    messages
  }
}
    `;
export type AddClaimTypeMutationFn = ApolloReactCommon.MutationFunction<AddClaimTypeMutation, AddClaimTypeMutationVariables>;

/**
 * __useAddClaimTypeMutation__
 *
 * To run a mutation, you first call `useAddClaimTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddClaimTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addClaimTypeMutation, { data, loading, error }] = useAddClaimTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useAddClaimTypeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddClaimTypeMutation, AddClaimTypeMutationVariables>) {
        return ApolloReactHooks.useMutation<AddClaimTypeMutation, AddClaimTypeMutationVariables>(AddClaimTypeDocument, baseOptions);
      }
export type AddClaimTypeMutationHookResult = ReturnType<typeof useAddClaimTypeMutation>;
export type AddClaimTypeMutationResult = ApolloReactCommon.MutationResult<AddClaimTypeMutation>;
export type AddClaimTypeMutationOptions = ApolloReactCommon.BaseMutationOptions<AddClaimTypeMutation, AddClaimTypeMutationVariables>;
export const AddCommunicationActionDocument = gql`
    query AddCommunicationAction($where: ClaimParticipantIndex) {
  claimParticipants(where: $where) {
    group: companyType
    label: companyName
    value: companyId
    isLossAdjuster
  }
}
    `;

/**
 * __useAddCommunicationActionQuery__
 *
 * To run a query within a React component, call `useAddCommunicationActionQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddCommunicationActionQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddCommunicationActionQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useAddCommunicationActionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AddCommunicationActionQuery, AddCommunicationActionQueryVariables>) {
        return ApolloReactHooks.useQuery<AddCommunicationActionQuery, AddCommunicationActionQueryVariables>(AddCommunicationActionDocument, baseOptions);
      }
export function useAddCommunicationActionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AddCommunicationActionQuery, AddCommunicationActionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AddCommunicationActionQuery, AddCommunicationActionQueryVariables>(AddCommunicationActionDocument, baseOptions);
        }
export type AddCommunicationActionQueryHookResult = ReturnType<typeof useAddCommunicationActionQuery>;
export type AddCommunicationActionLazyQueryHookResult = ReturnType<typeof useAddCommunicationActionLazyQuery>;
export type AddCommunicationActionQueryResult = ApolloReactCommon.QueryResult<AddCommunicationActionQuery, AddCommunicationActionQueryVariables>;
export const AddCommunicationDocument = gql`
    mutation AddCommunication($input: ClaimCommunicationCreate!) {
  createClaimCommunication(input: $input) {
    messages
    success
  }
}
    `;
export type AddCommunicationMutationFn = ApolloReactCommon.MutationFunction<AddCommunicationMutation, AddCommunicationMutationVariables>;

/**
 * __useAddCommunicationMutation__
 *
 * To run a mutation, you first call `useAddCommunicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommunicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommunicationMutation, { data, loading, error }] = useAddCommunicationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCommunicationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddCommunicationMutation, AddCommunicationMutationVariables>) {
        return ApolloReactHooks.useMutation<AddCommunicationMutation, AddCommunicationMutationVariables>(AddCommunicationDocument, baseOptions);
      }
export type AddCommunicationMutationHookResult = ReturnType<typeof useAddCommunicationMutation>;
export type AddCommunicationMutationResult = ApolloReactCommon.MutationResult<AddCommunicationMutation>;
export type AddCommunicationMutationOptions = ApolloReactCommon.BaseMutationOptions<AddCommunicationMutation, AddCommunicationMutationVariables>;
export const UploadDocumentDocument = gql`
    mutation UploadDocument($input: ClaimDocumentCreate!) {
  createClaimDocument(input: $input) {
    success
    messages
  }
}
    `;
export type UploadDocumentMutationFn = ApolloReactCommon.MutationFunction<UploadDocumentMutation, UploadDocumentMutationVariables>;

/**
 * __useUploadDocumentMutation__
 *
 * To run a mutation, you first call `useUploadDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadDocumentMutation, { data, loading, error }] = useUploadDocumentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUploadDocumentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UploadDocumentMutation, UploadDocumentMutationVariables>) {
        return ApolloReactHooks.useMutation<UploadDocumentMutation, UploadDocumentMutationVariables>(UploadDocumentDocument, baseOptions);
      }
export type UploadDocumentMutationHookResult = ReturnType<typeof useUploadDocumentMutation>;
export type UploadDocumentMutationResult = ApolloReactCommon.MutationResult<UploadDocumentMutation>;
export type UploadDocumentMutationOptions = ApolloReactCommon.BaseMutationOptions<UploadDocumentMutation, UploadDocumentMutationVariables>;
export const AddJobNoteDocument = gql`
    mutation AddJobNote($input: ClaimNoteCreate!) {
  createClaimNote(input: $input) {
    success
    messages
  }
}
    `;
export type AddJobNoteMutationFn = ApolloReactCommon.MutationFunction<AddJobNoteMutation, AddJobNoteMutationVariables>;

/**
 * __useAddJobNoteMutation__
 *
 * To run a mutation, you first call `useAddJobNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddJobNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addJobNoteMutation, { data, loading, error }] = useAddJobNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddJobNoteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddJobNoteMutation, AddJobNoteMutationVariables>) {
        return ApolloReactHooks.useMutation<AddJobNoteMutation, AddJobNoteMutationVariables>(AddJobNoteDocument, baseOptions);
      }
export type AddJobNoteMutationHookResult = ReturnType<typeof useAddJobNoteMutation>;
export type AddJobNoteMutationResult = ApolloReactCommon.MutationResult<AddJobNoteMutation>;
export type AddJobNoteMutationOptions = ApolloReactCommon.BaseMutationOptions<AddJobNoteMutation, AddJobNoteMutationVariables>;
export const NextStepDialogDocument = gql`
    query NextStepDialog($where: ENDataEntityKey!) {
  nextSteps: claimNextStep(where: $where) {
    statusName
    description
    nextStep
    portfolioType
  }
}
    `;

/**
 * __useNextStepDialogQuery__
 *
 * To run a query within a React component, call `useNextStepDialogQuery` and pass it any options that fit your needs.
 * When your component renders, `useNextStepDialogQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNextStepDialogQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useNextStepDialogQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NextStepDialogQuery, NextStepDialogQueryVariables>) {
        return ApolloReactHooks.useQuery<NextStepDialogQuery, NextStepDialogQueryVariables>(NextStepDialogDocument, baseOptions);
      }
export function useNextStepDialogLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NextStepDialogQuery, NextStepDialogQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<NextStepDialogQuery, NextStepDialogQueryVariables>(NextStepDialogDocument, baseOptions);
        }
export type NextStepDialogQueryHookResult = ReturnType<typeof useNextStepDialogQuery>;
export type NextStepDialogLazyQueryHookResult = ReturnType<typeof useNextStepDialogLazyQuery>;
export type NextStepDialogQueryResult = ApolloReactCommon.QueryResult<NextStepDialogQuery, NextStepDialogQueryVariables>;
export const ClaimDetailsDocument = gql`
    query ClaimDetails($claimId: ID!) {
  claimJob(where: {id: $claimId}) {
    ...InfoCardDataFragment
    ...JobInfoTabFragment
    ...ReportTabFragment
    ...JobNotesFragment
  }
}
    ${InfoCardDataFragmentFragmentDoc}
${JobInfoTabFragmentFragmentDoc}
${ReportTabFragmentFragmentDoc}
${JobNotesFragmentFragmentDoc}`;

/**
 * __useClaimDetailsQuery__
 *
 * To run a query within a React component, call `useClaimDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useClaimDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClaimDetailsQuery({
 *   variables: {
 *      claimId: // value for 'claimId'
 *   },
 * });
 */
export function useClaimDetailsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ClaimDetailsQuery, ClaimDetailsQueryVariables>) {
        return ApolloReactHooks.useQuery<ClaimDetailsQuery, ClaimDetailsQueryVariables>(ClaimDetailsDocument, baseOptions);
      }
export function useClaimDetailsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ClaimDetailsQuery, ClaimDetailsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ClaimDetailsQuery, ClaimDetailsQueryVariables>(ClaimDetailsDocument, baseOptions);
        }
export type ClaimDetailsQueryHookResult = ReturnType<typeof useClaimDetailsQuery>;
export type ClaimDetailsLazyQueryHookResult = ReturnType<typeof useClaimDetailsLazyQuery>;
export type ClaimDetailsQueryResult = ApolloReactCommon.QueryResult<ClaimDetailsQuery, ClaimDetailsQueryVariables>;
export const JobInfoDocument = gql`
    query JobInfo($managersWhere: ClaimJobFilter, $externalAdjustersWhere: ClaimJobFilter, $eventTypeWhere: ClaimJobFilter, $catCodesWhere: ClaimJobFilter, $policyTypesWhere: ClaimJobFilter, $policyCoversWhere: ClaimJobFilter, $internalAssessorsWhere: ClaimJobFilter, $whereQuotingBuilder: ClaimJobFilter, $whereQuotingRestorer: ClaimJobFilter) {
  ...JobInfo_ClaimDetailsCardFragment
  ...JobInfo_QuotingBuilderCardFragment
  ...JobInfo_QuotingRestorerCardFragment
  _states @client {
    label @client
    value @client
  }
  _claimCategories @client {
    label @client
    value @client
  }
}
    ${JobInfo_ClaimDetailsCardFragmentFragmentDoc}
${JobInfo_QuotingBuilderCardFragmentFragmentDoc}
${JobInfo_QuotingRestorerCardFragmentFragmentDoc}`;

/**
 * __useJobInfoQuery__
 *
 * To run a query within a React component, call `useJobInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobInfoQuery({
 *   variables: {
 *      managersWhere: // value for 'managersWhere'
 *      externalAdjustersWhere: // value for 'externalAdjustersWhere'
 *      eventTypeWhere: // value for 'eventTypeWhere'
 *      catCodesWhere: // value for 'catCodesWhere'
 *      policyTypesWhere: // value for 'policyTypesWhere'
 *      policyCoversWhere: // value for 'policyCoversWhere'
 *      internalAssessorsWhere: // value for 'internalAssessorsWhere'
 *      whereQuotingBuilder: // value for 'whereQuotingBuilder'
 *      whereQuotingRestorer: // value for 'whereQuotingRestorer'
 *   },
 * });
 */
export function useJobInfoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobInfoQuery, JobInfoQueryVariables>) {
        return ApolloReactHooks.useQuery<JobInfoQuery, JobInfoQueryVariables>(JobInfoDocument, baseOptions);
      }
export function useJobInfoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobInfoQuery, JobInfoQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobInfoQuery, JobInfoQueryVariables>(JobInfoDocument, baseOptions);
        }
export type JobInfoQueryHookResult = ReturnType<typeof useJobInfoQuery>;
export type JobInfoLazyQueryHookResult = ReturnType<typeof useJobInfoLazyQuery>;
export type JobInfoQueryResult = ApolloReactCommon.QueryResult<JobInfoQuery, JobInfoQueryVariables>;
export const JobInfoTabUpdateDocument = gql`
    mutation JobInfoTabUpdate($input: ClaimJobInput!, $where: ENDataEntityKey!) {
  updateClaimJob(input: $input, where: $where) {
    success
    messages
    fieldErrors {
      fieldName
      level
      message
    }
  }
}
    `;
export type JobInfoTabUpdateMutationFn = ApolloReactCommon.MutationFunction<JobInfoTabUpdateMutation, JobInfoTabUpdateMutationVariables>;

/**
 * __useJobInfoTabUpdateMutation__
 *
 * To run a mutation, you first call `useJobInfoTabUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJobInfoTabUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [jobInfoTabUpdateMutation, { data, loading, error }] = useJobInfoTabUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useJobInfoTabUpdateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<JobInfoTabUpdateMutation, JobInfoTabUpdateMutationVariables>) {
        return ApolloReactHooks.useMutation<JobInfoTabUpdateMutation, JobInfoTabUpdateMutationVariables>(JobInfoTabUpdateDocument, baseOptions);
      }
export type JobInfoTabUpdateMutationHookResult = ReturnType<typeof useJobInfoTabUpdateMutation>;
export type JobInfoTabUpdateMutationResult = ApolloReactCommon.MutationResult<JobInfoTabUpdateMutation>;
export type JobInfoTabUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<JobInfoTabUpdateMutation, JobInfoTabUpdateMutationVariables>;
export const JobNotesDocument = gql`
    query JobNotes($where: ClaimItemFilter, $first: Int, $after: String) {
  claimNotes(where: $where, first: $first, after: $after) {
    edges {
      node {
        id
        ...JobNoteListFragment
      }
    }
  }
}
    ${JobNoteListFragmentFragmentDoc}`;

/**
 * __useJobNotesQuery__
 *
 * To run a query within a React component, call `useJobNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobNotesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useJobNotesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobNotesQuery, JobNotesQueryVariables>) {
        return ApolloReactHooks.useQuery<JobNotesQuery, JobNotesQueryVariables>(JobNotesDocument, baseOptions);
      }
export function useJobNotesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobNotesQuery, JobNotesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobNotesQuery, JobNotesQueryVariables>(JobNotesDocument, baseOptions);
        }
export type JobNotesQueryHookResult = ReturnType<typeof useJobNotesQuery>;
export type JobNotesLazyQueryHookResult = ReturnType<typeof useJobNotesLazyQuery>;
export type JobNotesQueryResult = ApolloReactCommon.QueryResult<JobNotesQuery, JobNotesQueryVariables>;
export const SaveReportDocument = gql`
    mutation SaveReport($claimId: ID!, $data: Json!) {
  claimReportUpsert(claimId: $claimId, data: $data) {
    id
  }
}
    `;
export type SaveReportMutationFn = ApolloReactCommon.MutationFunction<SaveReportMutation, SaveReportMutationVariables>;

/**
 * __useSaveReportMutation__
 *
 * To run a mutation, you first call `useSaveReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveReportMutation, { data, loading, error }] = useSaveReportMutation({
 *   variables: {
 *      claimId: // value for 'claimId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSaveReportMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveReportMutation, SaveReportMutationVariables>) {
        return ApolloReactHooks.useMutation<SaveReportMutation, SaveReportMutationVariables>(SaveReportDocument, baseOptions);
      }
export type SaveReportMutationHookResult = ReturnType<typeof useSaveReportMutation>;
export type SaveReportMutationResult = ApolloReactCommon.MutationResult<SaveReportMutation>;
export type SaveReportMutationOptions = ApolloReactCommon.BaseMutationOptions<SaveReportMutation, SaveReportMutationVariables>;
export const SubmitReportDocument = gql`
    mutation SubmitReport($claimId: ID!) {
  claimReportSubmit(claimId: $claimId) {
    id
  }
}
    `;
export type SubmitReportMutationFn = ApolloReactCommon.MutationFunction<SubmitReportMutation, SubmitReportMutationVariables>;

/**
 * __useSubmitReportMutation__
 *
 * To run a mutation, you first call `useSubmitReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitReportMutation, { data, loading, error }] = useSubmitReportMutation({
 *   variables: {
 *      claimId: // value for 'claimId'
 *   },
 * });
 */
export function useSubmitReportMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SubmitReportMutation, SubmitReportMutationVariables>) {
        return ApolloReactHooks.useMutation<SubmitReportMutation, SubmitReportMutationVariables>(SubmitReportDocument, baseOptions);
      }
export type SubmitReportMutationHookResult = ReturnType<typeof useSubmitReportMutation>;
export type SubmitReportMutationResult = ApolloReactCommon.MutationResult<SubmitReportMutation>;
export type SubmitReportMutationOptions = ApolloReactCommon.BaseMutationOptions<SubmitReportMutation, SubmitReportMutationVariables>;
export const ResetReportDocument = gql`
    mutation ResetReport($claimId: ID!) {
  claimReportReset(claimId: $claimId) {
    id
  }
}
    `;
export type ResetReportMutationFn = ApolloReactCommon.MutationFunction<ResetReportMutation, ResetReportMutationVariables>;

/**
 * __useResetReportMutation__
 *
 * To run a mutation, you first call `useResetReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetReportMutation, { data, loading, error }] = useResetReportMutation({
 *   variables: {
 *      claimId: // value for 'claimId'
 *   },
 * });
 */
export function useResetReportMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetReportMutation, ResetReportMutationVariables>) {
        return ApolloReactHooks.useMutation<ResetReportMutation, ResetReportMutationVariables>(ResetReportDocument, baseOptions);
      }
export type ResetReportMutationHookResult = ReturnType<typeof useResetReportMutation>;
export type ResetReportMutationResult = ApolloReactCommon.MutationResult<ResetReportMutation>;
export type ResetReportMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetReportMutation, ResetReportMutationVariables>;
export const ClaimListFilterDocument = gql`
    query ClaimListFilter {
  currentUser {
    claimFilters {
      id
      type
      label
      name
      options {
        group
        label
        value: id
      }
    }
  }
}
    `;

/**
 * __useClaimListFilterQuery__
 *
 * To run a query within a React component, call `useClaimListFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useClaimListFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClaimListFilterQuery({
 *   variables: {
 *   },
 * });
 */
export function useClaimListFilterQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ClaimListFilterQuery, ClaimListFilterQueryVariables>) {
        return ApolloReactHooks.useQuery<ClaimListFilterQuery, ClaimListFilterQueryVariables>(ClaimListFilterDocument, baseOptions);
      }
export function useClaimListFilterLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ClaimListFilterQuery, ClaimListFilterQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ClaimListFilterQuery, ClaimListFilterQueryVariables>(ClaimListFilterDocument, baseOptions);
        }
export type ClaimListFilterQueryHookResult = ReturnType<typeof useClaimListFilterQuery>;
export type ClaimListFilterLazyQueryHookResult = ReturnType<typeof useClaimListFilterLazyQuery>;
export type ClaimListFilterQueryResult = ApolloReactCommon.QueryResult<ClaimListFilterQuery, ClaimListFilterQueryVariables>;
export const ClaimListWaterfallFilterDocument = gql`
    query ClaimListWaterfallFilter($where: ClaimStatusVolumeWhere!) {
  currentUser {
    waterfallFilters(where: $where) {
      id
      items {
        value: id
        label
        claimCount
        color
      }
    }
  }
}
    `;

/**
 * __useClaimListWaterfallFilterQuery__
 *
 * To run a query within a React component, call `useClaimListWaterfallFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useClaimListWaterfallFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClaimListWaterfallFilterQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useClaimListWaterfallFilterQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ClaimListWaterfallFilterQuery, ClaimListWaterfallFilterQueryVariables>) {
        return ApolloReactHooks.useQuery<ClaimListWaterfallFilterQuery, ClaimListWaterfallFilterQueryVariables>(ClaimListWaterfallFilterDocument, baseOptions);
      }
export function useClaimListWaterfallFilterLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ClaimListWaterfallFilterQuery, ClaimListWaterfallFilterQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ClaimListWaterfallFilterQuery, ClaimListWaterfallFilterQueryVariables>(ClaimListWaterfallFilterDocument, baseOptions);
        }
export type ClaimListWaterfallFilterQueryHookResult = ReturnType<typeof useClaimListWaterfallFilterQuery>;
export type ClaimListWaterfallFilterLazyQueryHookResult = ReturnType<typeof useClaimListWaterfallFilterLazyQuery>;
export type ClaimListWaterfallFilterQueryResult = ApolloReactCommon.QueryResult<ClaimListWaterfallFilterQuery, ClaimListWaterfallFilterQueryVariables>;
export const ClaimListDataDocument = gql`
    query ClaimListData($first: Int, $after: String, $where: ClaimJobFilter) {
  currentUser {
    userType
  }
  claimJobs(first: $first, after: $after, where: $where) @connection(key: "claimJobs", filter: ["where"]) {
    totalCount
    edges {
      node {
        ...ClaimListBody
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${ClaimListBodyFragmentDoc}`;

/**
 * __useClaimListDataQuery__
 *
 * To run a query within a React component, call `useClaimListDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useClaimListDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClaimListDataQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useClaimListDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ClaimListDataQuery, ClaimListDataQueryVariables>) {
        return ApolloReactHooks.useQuery<ClaimListDataQuery, ClaimListDataQueryVariables>(ClaimListDataDocument, baseOptions);
      }
export function useClaimListDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ClaimListDataQuery, ClaimListDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ClaimListDataQuery, ClaimListDataQueryVariables>(ClaimListDataDocument, baseOptions);
        }
export type ClaimListDataQueryHookResult = ReturnType<typeof useClaimListDataQuery>;
export type ClaimListDataLazyQueryHookResult = ReturnType<typeof useClaimListDataLazyQuery>;
export type ClaimListDataQueryResult = ApolloReactCommon.QueryResult<ClaimListDataQuery, ClaimListDataQueryVariables>;
export const CommunicationActionAcknowledgeDocument = gql`
    mutation CommunicationActionAcknowledge($where: ENDataPortfolioKey!) {
  claimCommunicationAcknoledge(where: $where) {
    messages
    success
  }
}
    `;
export type CommunicationActionAcknowledgeMutationFn = ApolloReactCommon.MutationFunction<CommunicationActionAcknowledgeMutation, CommunicationActionAcknowledgeMutationVariables>;

/**
 * __useCommunicationActionAcknowledgeMutation__
 *
 * To run a mutation, you first call `useCommunicationActionAcknowledgeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommunicationActionAcknowledgeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [communicationActionAcknowledgeMutation, { data, loading, error }] = useCommunicationActionAcknowledgeMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCommunicationActionAcknowledgeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CommunicationActionAcknowledgeMutation, CommunicationActionAcknowledgeMutationVariables>) {
        return ApolloReactHooks.useMutation<CommunicationActionAcknowledgeMutation, CommunicationActionAcknowledgeMutationVariables>(CommunicationActionAcknowledgeDocument, baseOptions);
      }
export type CommunicationActionAcknowledgeMutationHookResult = ReturnType<typeof useCommunicationActionAcknowledgeMutation>;
export type CommunicationActionAcknowledgeMutationResult = ApolloReactCommon.MutationResult<CommunicationActionAcknowledgeMutation>;
export type CommunicationActionAcknowledgeMutationOptions = ApolloReactCommon.BaseMutationOptions<CommunicationActionAcknowledgeMutation, CommunicationActionAcknowledgeMutationVariables>;
export const CommunicationActionReplyDocument = gql`
    mutation CommunicationActionReply($input: ClaimCommunicationCreate!) {
  createClaimCommunication(input: $input) {
    messages
    success
  }
}
    `;
export type CommunicationActionReplyMutationFn = ApolloReactCommon.MutationFunction<CommunicationActionReplyMutation, CommunicationActionReplyMutationVariables>;

/**
 * __useCommunicationActionReplyMutation__
 *
 * To run a mutation, you first call `useCommunicationActionReplyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommunicationActionReplyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [communicationActionReplyMutation, { data, loading, error }] = useCommunicationActionReplyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCommunicationActionReplyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CommunicationActionReplyMutation, CommunicationActionReplyMutationVariables>) {
        return ApolloReactHooks.useMutation<CommunicationActionReplyMutation, CommunicationActionReplyMutationVariables>(CommunicationActionReplyDocument, baseOptions);
      }
export type CommunicationActionReplyMutationHookResult = ReturnType<typeof useCommunicationActionReplyMutation>;
export type CommunicationActionReplyMutationResult = ApolloReactCommon.MutationResult<CommunicationActionReplyMutation>;
export type CommunicationActionReplyMutationOptions = ApolloReactCommon.BaseMutationOptions<CommunicationActionReplyMutation, CommunicationActionReplyMutationVariables>;
export const CommunicationListFiltersDocument = gql`
    query CommunicationListFilters {
  currentUser {
    communicationFilters {
      ...CommunicationHeaderFragment
    }
  }
}
    ${CommunicationHeaderFragmentFragmentDoc}`;

/**
 * __useCommunicationListFiltersQuery__
 *
 * To run a query within a React component, call `useCommunicationListFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunicationListFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunicationListFiltersQuery({
 *   variables: {
 *   },
 * });
 */
export function useCommunicationListFiltersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunicationListFiltersQuery, CommunicationListFiltersQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunicationListFiltersQuery, CommunicationListFiltersQueryVariables>(CommunicationListFiltersDocument, baseOptions);
      }
export function useCommunicationListFiltersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunicationListFiltersQuery, CommunicationListFiltersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunicationListFiltersQuery, CommunicationListFiltersQueryVariables>(CommunicationListFiltersDocument, baseOptions);
        }
export type CommunicationListFiltersQueryHookResult = ReturnType<typeof useCommunicationListFiltersQuery>;
export type CommunicationListFiltersLazyQueryHookResult = ReturnType<typeof useCommunicationListFiltersLazyQuery>;
export type CommunicationListFiltersQueryResult = ApolloReactCommon.QueryResult<CommunicationListFiltersQuery, CommunicationListFiltersQueryVariables>;
export const CommunicationsDataDocument = gql`
    query CommunicationsData($first: Int, $after: String, $where: CommunicationFilter) {
  claimCommunications: claimCommuications(first: $first, after: $after, where: $where) @connection(key: "claimCommunications", filter: ["where"]) {
    totalCount
    edges {
      node {
        ...ClaimCommunicationBody
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${ClaimCommunicationBodyFragmentDoc}`;

/**
 * __useCommunicationsDataQuery__
 *
 * To run a query within a React component, call `useCommunicationsDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunicationsDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunicationsDataQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCommunicationsDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunicationsDataQuery, CommunicationsDataQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunicationsDataQuery, CommunicationsDataQueryVariables>(CommunicationsDataDocument, baseOptions);
      }
export function useCommunicationsDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunicationsDataQuery, CommunicationsDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunicationsDataQuery, CommunicationsDataQueryVariables>(CommunicationsDataDocument, baseOptions);
        }
export type CommunicationsDataQueryHookResult = ReturnType<typeof useCommunicationsDataQuery>;
export type CommunicationsDataLazyQueryHookResult = ReturnType<typeof useCommunicationsDataLazyQuery>;
export type CommunicationsDataQueryResult = ApolloReactCommon.QueryResult<CommunicationsDataQuery, CommunicationsDataQueryVariables>;
export const KpiAlertDetailsDocument = gql`
    query KpiAlertDetails($where: CaseReportIndex!, $first: Int, $after: String) {
  reportingClaimJobGeneral(where: $where, first: $first, after: $after) {
    edges {
      node {
        id
        portfolioType
        refNumber
        insuredName
        caseManagerName
        status {
          statusName
        }
        daysAtStatus
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    `;

/**
 * __useKpiAlertDetailsQuery__
 *
 * To run a query within a React component, call `useKpiAlertDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useKpiAlertDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKpiAlertDetailsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useKpiAlertDetailsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<KpiAlertDetailsQuery, KpiAlertDetailsQueryVariables>) {
        return ApolloReactHooks.useQuery<KpiAlertDetailsQuery, KpiAlertDetailsQueryVariables>(KpiAlertDetailsDocument, baseOptions);
      }
export function useKpiAlertDetailsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<KpiAlertDetailsQuery, KpiAlertDetailsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<KpiAlertDetailsQuery, KpiAlertDetailsQueryVariables>(KpiAlertDetailsDocument, baseOptions);
        }
export type KpiAlertDetailsQueryHookResult = ReturnType<typeof useKpiAlertDetailsQuery>;
export type KpiAlertDetailsLazyQueryHookResult = ReturnType<typeof useKpiAlertDetailsLazyQuery>;
export type KpiAlertDetailsQueryResult = ApolloReactCommon.QueryResult<KpiAlertDetailsQuery, KpiAlertDetailsQueryVariables>;
export const DashboardFiltersDocument = gql`
    query DashboardFilters {
  currentUser {
    userType
    dashboardFilters {
      ...DashboardHeaderFragment
    }
  }
  dashboardFilters {
    id
    name
    options {
      group
      label: name
      value
    }
  }
}
    ${DashboardHeaderFragmentFragmentDoc}`;

/**
 * __useDashboardFiltersQuery__
 *
 * To run a query within a React component, call `useDashboardFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardFiltersQuery({
 *   variables: {
 *   },
 * });
 */
export function useDashboardFiltersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DashboardFiltersQuery, DashboardFiltersQueryVariables>) {
        return ApolloReactHooks.useQuery<DashboardFiltersQuery, DashboardFiltersQueryVariables>(DashboardFiltersDocument, baseOptions);
      }
export function useDashboardFiltersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DashboardFiltersQuery, DashboardFiltersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DashboardFiltersQuery, DashboardFiltersQueryVariables>(DashboardFiltersDocument, baseOptions);
        }
export type DashboardFiltersQueryHookResult = ReturnType<typeof useDashboardFiltersQuery>;
export type DashboardFiltersLazyQueryHookResult = ReturnType<typeof useDashboardFiltersLazyQuery>;
export type DashboardFiltersQueryResult = ApolloReactCommon.QueryResult<DashboardFiltersQuery, DashboardFiltersQueryVariables>;
export const DashboardKpiDocument = gql`
    query DashboardKpi($where: DashboardWidgetIndex!) {
  dashboardWidgets(where: $where) {
    title
    viewName
    labels
    description
    data {
      dataSetName
      internalFilterName
      legend
      valueDisplay
      valueGroup
      valueUnit
      valueSense
      values
    }
  }
}
    `;

/**
 * __useDashboardKpiQuery__
 *
 * To run a query within a React component, call `useDashboardKpiQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardKpiQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardKpiQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDashboardKpiQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DashboardKpiQuery, DashboardKpiQueryVariables>) {
        return ApolloReactHooks.useQuery<DashboardKpiQuery, DashboardKpiQueryVariables>(DashboardKpiDocument, baseOptions);
      }
export function useDashboardKpiLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DashboardKpiQuery, DashboardKpiQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DashboardKpiQuery, DashboardKpiQueryVariables>(DashboardKpiDocument, baseOptions);
        }
export type DashboardKpiQueryHookResult = ReturnType<typeof useDashboardKpiQuery>;
export type DashboardKpiLazyQueryHookResult = ReturnType<typeof useDashboardKpiLazyQuery>;
export type DashboardKpiQueryResult = ApolloReactCommon.QueryResult<DashboardKpiQuery, DashboardKpiQueryVariables>;
export const AppRootDocument = gql`
    query AppRoot {
  currentUser {
    _appRoutes @client
    _rootRoute @client
    _customisation @client {
      alias
      favicon
      logo
      companyLogo
    }
  }
}
    `;

/**
 * __useAppRootQuery__
 *
 * To run a query within a React component, call `useAppRootQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppRootQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppRootQuery({
 *   variables: {
 *   },
 * });
 */
export function useAppRootQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AppRootQuery, AppRootQueryVariables>) {
        return ApolloReactHooks.useQuery<AppRootQuery, AppRootQueryVariables>(AppRootDocument, baseOptions);
      }
export function useAppRootLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AppRootQuery, AppRootQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AppRootQuery, AppRootQueryVariables>(AppRootDocument, baseOptions);
        }
export type AppRootQueryHookResult = ReturnType<typeof useAppRootQuery>;
export type AppRootLazyQueryHookResult = ReturnType<typeof useAppRootLazyQuery>;
export type AppRootQueryResult = ApolloReactCommon.QueryResult<AppRootQuery, AppRootQueryVariables>;
export const LoginDocument = gql`
    query Login {
  me: currentUser {
    id
    name
  }
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoginQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        return ApolloReactHooks.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, baseOptions);
      }
export function useLoginLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, baseOptions);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = ApolloReactCommon.QueryResult<LoginQuery, LoginQueryVariables>;
export const SigninDocument = gql`
    mutation Signin($input: UserCredential!) {
  userAuthenticateAllServer(input: $input) {
    accessToken
    refreshToken
    user {
      userName
    }
  }
}
    `;
export type SigninMutationFn = ApolloReactCommon.MutationFunction<SigninMutation, SigninMutationVariables>;

/**
 * __useSigninMutation__
 *
 * To run a mutation, you first call `useSigninMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSigninMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinMutation, { data, loading, error }] = useSigninMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSigninMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SigninMutation, SigninMutationVariables>) {
        return ApolloReactHooks.useMutation<SigninMutation, SigninMutationVariables>(SigninDocument, baseOptions);
      }
export type SigninMutationHookResult = ReturnType<typeof useSigninMutation>;
export type SigninMutationResult = ApolloReactCommon.MutationResult<SigninMutation>;
export type SigninMutationOptions = ApolloReactCommon.BaseMutationOptions<SigninMutation, SigninMutationVariables>;