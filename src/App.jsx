
import React from 'react';
import Header from './components/Header/Header';
import ContactInfo from './components/ContactInfo/ContactInfo';
import PolicyCard from './components/PolicyCard/PolicyCard';
import PriceList from './components/PriceList/PriceList';
import Footer from './components/Footer/Footer';
import CategoryList from './components/CategoryList/CategoryList';
import OrderItems from './components/OrderItems/OrderItems';
function App() {

  return (
    <div>
      <Header />
      <ContactInfo />
      <PolicyCard />
      <CategoryList />
      <PriceList />
      <OrderItems />
      <Footer />
    </div>
  )
}

export default App
