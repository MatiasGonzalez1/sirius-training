import './App.css';
import {Home, NotFound, OnePoke, GridList} from './pages';
import Container from '@mui/material/Container';
import {Routes, Route} from 'react-router-dom';
import AdvancedSearch from './Components/AdvancedSearch/AdvancedSearch';
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

