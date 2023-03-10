import './App.css';
import Home from './Components/Home';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
function App() {
  return (
    <div className="App">
      <Container>
       <Grid container spacing={5}>
         <Home/>
       </Grid>
      </Container>
    </div>
  );
}

export default App;
