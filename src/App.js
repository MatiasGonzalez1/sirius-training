import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Container from '@mui/material/Container';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export const App = ()=> {
  return (
    <div className="App">
      <Container>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

