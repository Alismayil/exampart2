
import './App.css'
import { Route, Routes ,  } from "react-router-dom";
import HomePage from './pages/home';
import Aboutpage from './pages/about';
import PortfolioPage from './pages/portfolio';
import PricingPage from './pages/pricing';
import ContactsPage from './pages/contacts';
import AddPage from './pages/add';
import Navbar from './layout/navbar';
import {Helmet} from "react-helmet";
import Footer from './layout/footer';
import BasketPage from './pages/basket';
import WishlistPage from './pages/wishlist';
import DetailPage from './pages/detail';

function App() {

  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/portfolio" element={<PortfolioPage/>} />
        <Route path="/pricing" element={<PricingPage/>} />
        <Route path="/contacts" element={<ContactsPage/>} />
        <Route path="/add" element={<AddPage/>} />
        <Route path="/basket" element={<BasketPage/>} />
        <Route path="/wishlist" element={<WishlistPage/>} />
        <Route path="/detail/:id" element={<DetailPage/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
