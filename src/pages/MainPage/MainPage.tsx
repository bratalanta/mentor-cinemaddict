/* eslint-disable no-console */
import React, { useEffect } from 'react';
import Films from '../../components/Films/Films';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Popup from '../../components/Popup/Popup';
import Sort from '../../components/Sort/Sort';
import { fish } from '../../mock/fishFilms';
import filmsState from '../../store/filmsState';
import { observer } from 'mobx-react-lite';
import popupState from '../../store/popupState';
import commentsState from '../../store/commentsState';
import { commentList } from '../../mock/fishComments';

const MainPage = observer(() => {
  useEffect(() => {
    filmsState.setMovieList(fish);
    commentsState.setCommentList(commentList);
  }, []);

  const getActiveFilm = (id: string) => {
    const film = filmsState.filmsList.find((item) => item.id === id);
    if (film) {
      return <Popup {...film} />;
    }
  };

  return (
    <>
      <Header />
      <Navigation />
      <Sort />
      <Films />
      <Footer />
      {getActiveFilm(popupState.activeId)}
    </>
  );
});

export default MainPage;
