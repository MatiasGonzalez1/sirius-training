import React from "react";
import Switch from '@mui/material/Switch';
import GridList from "./GridList";
import Container from '@mui/material/Container';
import TableList from './TableList';


  
const Home = () => {

  return (
    <Container>
       <Switch label='Grid' color='secondary' defaultChecked/>
      <GridList/>
      <TableList/>
    </Container>  
  );
};


export default Home;