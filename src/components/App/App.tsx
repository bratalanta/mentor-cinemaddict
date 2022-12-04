import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import Films from '../Films/Films';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Navigate to='/all' />} />
        <Route path='/:filter' element={<Films />} />
      </Route>
    </Routes>
  );
};

export default App;
