import { gql } from '@apollo/client'

export default gql`
  extend type Query {
    _states: [SelectOption]!
    _claimCategories: [SelectOption]!
  }
  type SelectOption {
    label: String
    value: ID!
  }

  extend type AuthenticatedUser {
    _appRoutes: [String!]
    _rootRoute: String!
    _customisation: AppCustomization
  }
  type AppCustomization {
    alias: String
    favicon: String
    logo: String
    companyLogo: String
  }

  extend type ClaimJob {
    _portfolios: [PortfolioType!]
    _requestDate: String
    _request: String
    _insuredPhone: String
    _incidentAddress: String
    _claimValue: String
    _claimStatus: String

    _claimBuilder: String
    _claimRestorer: String

    _allocatedBuilder: String
    _allocatedRestorer: String
  }

  extend type ClaimPortfolio {
    _providerAndStatus: String
    _portfolioTooltips: String
  }

  # input ClaimWhereInput {
  #   keyWords: String

  #   createDateFrom: Date
  #   createDateTo: Date

  #   incidentDate: DateString
  #   incidentDateFrom: DateString
  #   incidentDateTo: DateString

  #   managerTeams: [String]
  #   insurers: [ID!]
  #   managers: [ID!]
  #   adjusters: [ID!]
  #   buildingSuppliers: [ID!]
  #   contentsSuppliers: [ID!]
  #   restorationSuppliers: [ID!]
  #   internalAssessors: [ID!]

  #   catCodes: [ID!]
  #   eventTypes: [ID!]
  #   states: [State]
  # }
`