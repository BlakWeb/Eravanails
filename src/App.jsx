
import React from 'react';
import Header from './components/Header/Header';
import ContactInfo from './components/ContactInfo/ContactInfo';
import PolicyCard from './components/PolicyCard/PolicyCard';
import PriceList from './components/PriceList/PriceList';
import Footer from './components/Footer/Footer';
import CategoryList from './components/CategoryList/CategoryList';
function App() {

  return (
    <div>
      <Header />
      <ContactInfo />
      <PolicyCard />
      <CategoryList />
      <PriceList />
      <Footer />
    </div>
  )
}

export default App
