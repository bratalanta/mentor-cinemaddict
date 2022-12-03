import Films from '../../components/Films/Films';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Sort from '../../components/Sort/Sort';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import FilmsState from '../../store/FilmsState';
import Loader from '../../components/Loader/Loader';
import { FetchStatus } from '../../const';
import Error from '../../components/Error/Error';

const MainPage = observer(() => {
  useEffect(() => {
    FilmsState.fetchMovieList();
  }, []);
  if (FilmsState.fetchStatus === FetchStatus.Pending) {
    return <Loader />;
  }
  if (FilmsState.fetchStatus === FetchStatus.Rejected) {
    return <Error />;
  }
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
