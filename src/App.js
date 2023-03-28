import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Container from '@mui/material/Container';
import {Routes, Route} from 'react-router-dom';
import OnePoke from './pages/OnePoke';
import GridList from './pages/GridList';
import TableList from './pages/TableList';
//El archivo fetch es unicamente de prueba
// import Fetch from './utils/Fetch';

export const App = ()=> {
  return (
    <div className="App">
      {/* <Fetch/> */}
      <Container>
          <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/poke' element={<GridList/>}/>
            <Route path='/poke/:id' element={<OnePoke/>}/>
          </Routes>
      </Container>
    </div>
  );
}

