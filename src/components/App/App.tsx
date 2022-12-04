import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import Films from '../Films/Films';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='all' index element={<Films />} />
        <Route path=':filter' element={<Films />} />
      </Route>
    </Routes>
  );
};

export default App;
