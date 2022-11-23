/* eslint-disable no-console */
import React, { useEffect } from 'react';
import Films from '../../components/Films/Films';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Popup from '../../components/Popup/Popup';
import Sort from '../../components/Sort/Sort';
import { dataBase } from '../../dataBase/dataBase';
import movies from '../../store/movies';
import { observer } from 'mobx-react-lite';
import popup from '../../store/Popup';

const MainPage = observer(() => {
  useEffect(() => {
    movies.setMovieList(dataBase);
  }, []);

  const getActiveFilm = (id: string) => {
    const film = movies.movieList.find((item) => item.id === id);
    return film ? <Popup {...film} /> : false;
  };

  return (
    <>
      <Header />
      <Navigation />
      <Sort />
      <Films />
      <Footer />
      {getActiveFilm(popup.activeId)}
    </>
  );
});

export default MainPage;
