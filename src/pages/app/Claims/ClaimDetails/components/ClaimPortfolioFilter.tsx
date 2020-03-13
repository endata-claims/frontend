import React from 'react'
import PortfolioFilter, { PortfolioType } from 'components/WaterfallFilter/PortfolioFilter'
import { useClaimMeta } from '../ClaimMetaContext'

const ClaimPortfolioFilter = ({ setPortfolio }: any) => {
  const claimMeta = useClaimMeta()
  const portfolios = claimMeta?.claim?._portfolios
  if (!portfolios) return null

  return <Filter portfolios={portfolios} setPortfolio={setPortfolio} />
}
export default ClaimPortfolioFilter

const Filter = ({ portfolios, setPortfolio }: any) => {
  const [value, setValue] = React.useState<PortfolioType>(portfolios[0])

  React.useEffect(() => {
    setPortfolio(value)
  }, [value, setPortfolio])

  return <PortfolioFilter portfolios={portfolios} value={value} setValue={setValue} />
}