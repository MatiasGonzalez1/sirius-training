import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Container from '@mui/material/Container';
import {Routes, Route} from 'react-router-dom';
import OnePoke from './pages/OnePoke';
import GridList from './pages/GridList';
import AdvancedSearch from './pages/AdvancedSearch';
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
            <Route path='/advanced-search' element={<AdvancedSearch/>}/>
            {/* <Route path='/pokeList' element={<TableList/>}/>
            <Route path='/pokeList/:id' element={<OnePoke/>}/> 
            Se debe renovar ésta porción de código por un switch
            que cambie de estilo grid a table
            */}
            <Route path='/poke/:id' element={<OnePoke/>}/>
          </Routes>
      </Container>
    </div>
  );
}

