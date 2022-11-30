import React, { useEffect } from 'react';
import Films from '../../components/Films/Films';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Sort from '../../components/Sort/Sort';
import { fishFilms } from '../../fishData/fishFilms';
import filmsState from '../../store/FilmsState';
import { observer } from 'mobx-react-lite';
import commentsState from '../../store/CommentsState';
import { fishComments } from '../../fishData/fishComments';

const MainPage = observer(() => {
  useEffect(() => {
    filmsState.setMovieList(fishFilms);
    commentsState.setCommentList(fishComments);
  }, []);

  return (
    <>
      <Header />
      <Navigation />
      <Sort />
      <Films />
      <Footer />
    </>
  );
});

export default MainPage;
