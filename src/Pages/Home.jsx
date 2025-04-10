// src/Pages/Home.jsx
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import AutoSwiper from '../components/Swiper'
import Footer from '../components/Footer'
import Cards from '../components/FlashSaleCards'
import CategoriesCards from '../components/CategoriesCards'
import PromoBanner from '../components/PromoBanner'
import AddSection from '../components/AddSection'
import TrendingCards from '../components/TrendingCards'
import PopularCards from '../components/PopularCards'
import ServiceHighlights from '../components/ServiceHighlights'

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <AutoSwiper />
      <CategoriesCards />
      <PromoBanner />
      <TrendingCards />
      <AddSection />
      <Cards />
      <PopularCards />
      <ServiceHighlights />
      <Footer />
    </>
  )
}

export default Home