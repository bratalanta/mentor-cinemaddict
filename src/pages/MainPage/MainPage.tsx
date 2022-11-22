import React from 'react';
import Films from '../../components/Films/Films';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Sort from '../../components/Sort/Sort';

function MainPage() {
  return (
    <>
      <Header />
      <Navigation />
      <Sort />
      <Films />
      <Footer />
    </>
  );
}

export default MainPage;
