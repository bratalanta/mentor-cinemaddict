import Films from '../Films/Films';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Sort from '../Sort/Sort';
// import Popup from '../Popup/Popup';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Navigation />
      <Sort />
      <Films />
      <Footer />
      {/* <Popup /> */}
    </>
  );
}

export default App;
