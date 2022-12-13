import { Navigate, Route, Routes } from 'react-router-dom';
import { FilterOption } from '../../const';
import MainPage from '../../pages/MainPage/MainPage';
import Films from '../Films/Films';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route
          path='/'
          element={<Navigate to={FilterOption['All movies']} />}
        />
        <Route path='/:filter' element={<Films />} />
      </Route>
    </Routes>
  );
};

export default App;
