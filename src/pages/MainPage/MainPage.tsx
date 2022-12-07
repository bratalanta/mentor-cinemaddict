import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Sort from '../../components/Sort/Sort';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import filmsState from '../../store/FilmsState';
import Loader from '../../components/Loader/Loader';
import { FetchStatus } from '../../const';
import Error from '../../components/Error/Error';
import { Outlet } from 'react-router-dom';

const MainPage = observer(() => {
  useEffect(() => {
    filmsState.fetchMovieList();
  }, []);
  if (filmsState.fetchStatus === FetchStatus.Pending) {
    return <Loader />;
  }
  if (filmsState.fetchStatus === FetchStatus.Rejected) {
    return <Error />;
  }
  return (
    <>
      <Header />
      <Navigation />
      <Sort />
      <Outlet />
      <Footer />
    </>
  );
});

export default MainPage;
