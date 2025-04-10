import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Auth from '../Pages/Auth'
import Offers from '../Pages/Offers'
import DailyDeals from '../Pages/DailyDeals'
import FlashSale from '../Pages/FlashSale'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/daily-deals" element={<DailyDeals />} />
      <Route path="/flash-sale" element={<FlashSale/>} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  )
}

export default Router