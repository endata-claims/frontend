import { Resolvers, gql } from '@apollo/client'
// import { print } from 'graphql'

export default {
  Query: {
    _states: () => {
      return [
        { label: 'ACT' , value: 'ACT' },
        { label: 'NSW' , value: 'NSW' },
        { label: 'NT' , value: 'NT' },
        { label: 'QLD' , value: 'QLD' },
        { label: 'SA' , value: 'SA' },
        { label: 'TAS' , value: 'TAS' },
        { label: 'VIC' , value: 'VIC' },
        { label: 'WA' , value: 'WA' }
      ]
    },
    _claimCategories: () => {
      return [
        { label: 'Non - Urgent' , value: 'NonUrgent' },
        { label: 'Semi - Urgent' , value: 'SemiUrgent' },
        { label: 'Urgent' , value: 'Urgent' },
      ]
    },
  },
  AuthenticatedUser: {
    _appRoutes: async (_, __ , { client }) => {
      const state = await client.query({
        query: gql`
          query appRoutes {
            me {
              privileges {
                menus {
                  name: nodeName
                }
              }
            }
          }
        `
      })
      const routes = state?.data?.me?.privileges?.menus.map(({ name }: any) => `/app/${name.toLowerCase()}`)
      return routes
    },
    _rootRoute: async (_, __, { client }) => {
      const state = await client.query({
        query: gql`
          query appRoutes {
            me {
              privileges {
                menus {
                  name: nodeName
                }
              }
            }
          }
        `
      })
      const routes = state?.data?.me?.privileges?.menus.map(({ name }: any) => `${name.toLowerCase()}`)
      const rootPath =
        routes?.includes('dashboard') ? 'dashboard' :
        routes?.includes('claims') ? 'claims' :
        routes?.includes('reports') ? 'reports' :
        'settings'

      return `/app/${rootPath}`
    },
    _customisation: async (_, __, { client }) => {
      const state = await client.query({
        query: gql`
          query appRoutes {
            me {
              company {
                customisation {
                  alias: applicationAlias
                  favicon: applicationFavicon
                  logo: applicationLogo
                  companyLogo: displayCompanyLogo
                }
              }
            }
          }
        `
      })
      const customisation = state?.data?.me?.company?.customisation

      return customisation
    },
    // _claims: async (root, args, { client }, info) => {
    //   const fragmentString = info?.field.selectionSet
    //     ? print(info.field.selectionSet)
    //     : ''
    //   const fragmentMap = info?.fragmentMap
    //     ? Object.values(info.fragmentMap).map(frag => print(frag)).join(' ')
    //     : ''

    //   const state = await client.query({
    //     query: gql`
    //       query _claims($first: Int, $after: String, $where: ClaimJobFilter) {
    //         claimJobs(first: $first, after: $after, where: $where) @connection(key: "claimJobs", filter: ["where"])
    //         ${fragmentString}
    //       }
    //       ${fragmentMap}
    //     `,
    //     variables: args,
    //     fetchPolicy: 'no-cache'
    //   })

    //   const claims = state?.data?.claimJobs

    //   return claims
    // }
  },
  ClaimJob: {
    _portfolios: async ({ hasBuilding, hasContents, hasRestoration }) => {
      const _portfolios = []

      if(hasBuilding) _portfolios.push('Building')
      if(hasContents) _portfolios.push('Contents')
      if(hasRestoration) _portfolios.push('Restoration')

      return _portfolios.length ? _portfolios : null
    },
    _requestDate: async (root, __, { client }) => {
      const user = await client.query({ query: gql`query _claimValue { currentUser { userType }}`})
      const userType = user?.data?.currentUser?.userType

      const requestDate =
        userType === 'Builder' ? root?.building?.jobSuppliers[0]?.requestDate :
        userType === 'Restorer' ? root?.restoration?.jobSuppliers[0]?.requestDate :
        userType === 'ContentSupplier' ? root?.contents?.jobSuppliers[0]?.requestDate :
        '-'

      return requestDate
    },
    _request: async (root, __, { client }) => {
      const user = await client.query({ query: gql`query _claimValue { currentUser { userType }}`})
      const userType = user?.data?.currentUser?.userType
      const request =
        userType === 'Builder' ? root?.building?.jobSuppliers[0]?.requestType :
        userType === 'Restorer' ? root?.restoration?.jobSuppliers[0]?.requestType :
        userType === 'ContentSupplier' ? root?.contents?.jobSuppliers[0]?.requestType :
        '-'

      return request
    },
    _insuredPhone: (root) => {
      const { phone1, phone2, phone3 } = root.insured
      return [phone1, phone2, phone3].filter(x => x).join(', ')
    },
    _incidentAddress: (root) => {
      if(root?.incidentDetail?.riskAddress) {
        const { line1, suburb, state, postcode } = root.incidentDetail.riskAddress
        return `${line1} ${suburb} ${state}, ${postcode}`
      }

      return null
    },
    _claimValue: async (root, __, { client }) => {
      const user = await client.query({ query: gql`query _claimValue { currentUser { userType }}`})
      const userType = user?.data?.currentUser?.userType

      const value =
        userType === 'Administrator' ? (root?.building?.authorisedValue || root?.building?.scopedValue) :
        userType === 'Builder' ? root?.building?.jobSuppliers[0]?.quote?.total :
        userType === 'Restorer' ? root?.restoration?.jobSuppliers[0]?.quote?.total :
        userType === 'ContentSupplier' ? root?.contents?.jobSuppliers[0]?.quote?.total :
        '-'

      return value ? `$${value}` : `-`
    },
    _claimStatus: async (root, __, { client }) => {
      const user = await client.query({ query: gql`query _claimValue { currentUser { userType }}`})
      const userType = user?.data?.currentUser?.userType
      const status =
        userType === 'Builder' ? (root?.building?.jobSuppliers[0]?.quote?.quoteStatus?.statusName || root?.building?.claimStatus?.statusName) :
        userType === 'Restorer' ? (root?.restoration?.jobSuppliers[0]?.quote?.quoteStatus?.statusName || root?.restoration?.claimStatus?.statusName) :
        userType === 'ContentSupplier' ? (root?.contents?.jobSuppliers[0]?.quote?.quoteStatus?.statusName || root?.contents?.claimStatus?.statusName) :
        '-'

      return status
    },
    _claimBuilder: root => {
      return (root?.building?.authorisedSupplier?.companyName || root?.building?.scopingSupplier?.companyName) ?? '-'
    },
    _claimRestorer: root => {
      return (root?.restoration?.authorisedSupplier?.companyName || root?.restoration?.scopingSupplier?.companyName) ?? '-'
    },
    _allocatedBuilder: async (root, __, { client }) => {
      const user = await client.query({ query: gql`query _claimValue { currentUser { userType }}`})
      const userType = user?.data?.currentUser?.userType
      if(userType === 'Builder') {
        return root?.building?.jobSuppliers?.quote?.supplier?.companyName ?? 'N/a'
      }

      return root?.building?.authorisedSupplier?.companyName || root?.building?.scopingSupplier?.companyName || 'N/a'
    },
    _allocatedRestorer: async (root, __, { client }) => {
      const user = await client.query({ query: gql`query _claimValue { currentUser { userType }}`})
      const userType = user?.data?.currentUser?.userType
      if(userType === 'Restorer') {
        return root?.restoration?.jobSuppliers?.quote?.supplier?.companyName ?? 'N/a'
      }

      return root?.restoration?.authorisedSupplier?.companyName || root?.restoration?.scopingSupplier?.companyName || 'N/a'
    },
    // _jobNotes: root => root
  },
  ClaimPortfolio: {
    _providerAndStatus: async (root, __, { client }) => {
      if(root.portfolioType === 'Contents') {
        const { claimStatus, toCollectExcess, excessValue } = root
        return `${claimStatus.statusName} ${toCollectExcess ? `, Excess - $${excessValue}` : ''}`
      }

      const user = await client.query({ query: gql`query _claimValue { currentUser { userType }}`})
      const userType = user?.data?.currentUser?.userType
      const status = getPortfolioStatus(root, userType)
      return status
    },
    _portfolioTooltips: root => {
      const supplier = root.authorisedSupplier || root.scopingSupplier || null
      if (!supplier) return null

      const name = supplier?.companyName ? `${supplier?.companyName?.split('-')[0].trim()}\n` : ''
      const phone1 = supplier?.companyPhone1 ? `${supplier?.companyPhone1}\n` : ''
      const phone2 = supplier?.companyPhone2 ? `${supplier?.companyPhone2}` : ''

      return `${name}${phone1}${phone2}`
    }
  },
  // ClaimNoteConnection: {
  //   _isDisplayInitialCallMade: async (root, __, { client }) => {
  //     const user = await client.query({ query: gql`query _claimValue { currentUser { userType }}` })
  //     console.log(user)

  //     return null
  //   }
  //   // _isDisplayApointmentMade
  //   // _isDisplayChangeApointment
  //   // _isDisplayNewJobNote
  // },
  ClaimNote: {
    _privacy: root => {
      return root?.private === 1 ? 'Private' : 'Public'
    }
  },
  // _ClaimJobNoteConnection: {
  //   _isDisplayInitialCallMade: () => {
  //     return true
  //   }
  // }
} as Resolvers

const getPortfolioStatus = (value: any, role: any) => {
  let name, status
  const excess = value.toCollectExcess ? `- $${value.excessValue}` : null
  if (role === 'Restorer') {
    name = value.jobSuppliers && value.jobSuppliers[0] && value.jobSuppliers[0].quote && value.jobSuppliers[0].quote.supplier ? value.jobSuppliers[0].quote.supplier.companyName : ''
    status = value.jobSuppliers && value.jobSuppliers[0] && value.jobSuppliers[0].quote ? value.jobSuppliers[0].quote.quoteStatus.statusName : ''
  }
  else {
    name = value.authorisedSupplier ? value.authorisedSupplier.companyName : value.scopingSupplier ? value.scopingSupplier.companyName : null
    status = value.claimStatus.statusName
  }

  return `${name ? name : ''}${status ? `, ${status}` : ''}${excess ? `, Excess ${excess}` : ''}`
}