import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Container from '@mui/material/Container';
import {Routes, Route} from 'react-router-dom';
// import Fetch from './utils/Fetch';

export const App = ()=> {
  return (
    <div className="App">
      {/* <Fetch/> */}
      <Container>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </Container>
    </div>
  );
}

