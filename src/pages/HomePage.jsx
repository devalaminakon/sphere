import Banner from '../components/Banner'
import Category from '../components/Category'
import FlashSale from '../components/FlashSale'
import Offers from '../components/Offers'
import SearchSection from '../components/SearchSection'
import Services from '../components/Services'

const HomePage = () => {
  return (
    <>
      <Banner />
      <Services />
      <Category />
      <Offers />
      <FlashSale />
      <SearchSection />
    </>
  )
}

export default HomePage