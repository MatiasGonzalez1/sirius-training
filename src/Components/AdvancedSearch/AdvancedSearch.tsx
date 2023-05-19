import { Grid, TableBody, TableContainer,TableRow, TableHead, Paper,Table, TableCell, TextField, Typography, Box, Button } from "@mui/material";
import { tableCellClasses } from '@mui/material/TableCell';
// import { TableComponent } from "./TableComponent";
import ButtonReusable from "../Button/ButtonReusable";
import { GOTTA_CATCH_THEM_FILTER } from "../../apollo-client/AdvancedSearch";
import { ApolloLink, useLazyQuery} from "@apollo/client";
import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import { Pokemon } from '../../@types/tyPesSearch';
import { Link } from 'react-router-dom';

const AdvancedSearch = () => {
  const [getPoke, response]= useLazyQuery(GOTTA_CATCH_THEM_FILTER);
  const [resToApi, setResToApi] = useState([])
  const [searchByName, setSearchByName] = useState('');

  const fetchPoke =  (name:string)=>{
     getPoke({variables:{nameToSearch:name}})
    .then((response)=>{
      setResToApi(response.data.pokemon_v2_pokemon)
    })
      // setResToApi(response.data)
  };

  console.log(resToApi)

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  
  // const createData = (
  //   id: any,
  //   name: string,
  //   weight: number,
  //   color: string,
  //   type: string)=>{
  //   return {name, id, weight, color, type };
  // }
  
  // const rows = [
  //   createData(resToApi.id, 'name', 1, 'blue', 'red'),
  // ];

  return (
    <Grid>
      <ButtonReusable text="Return to List" hrefButton="/poke" />
      <Grid item>
        <Grid item sx={{ textAlign: "center" }}>
          <Typography variant="h4">Advanced search</Typography>
        </Grid>
        <Grid item>
          <Box
            display={"flex"}
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Grid>
              <TextField
                label="Name"
                id="name"
                value={searchByName}
                onChange={(e)=> setSearchByName(e.target.value)}
                size="small"
              />
            </Grid>
            <Grid>
              <TextField
                label="Min-Weight"
                type="number"
                id="min-weight"
                defaultValue=""
                size="small"
              />
            </Grid>
             <Grid>
              <TextField
                label="Max-Weight"
                type="number"
                id="max-weight"
                defaultValue=""
                size="small"
              />
            </Grid>
          </Box>
        </Grid>
        <Button onClick={(e)=> searchByName === '' ? e.preventDefault() : fetchPoke(`%${searchByName}%`)}>Search</Button>
      </Grid>
      <Grid item>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Weight</StyledTableCell>
            <StyledTableCell align="right">Color</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">IsBaby</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resToApi.map((row:Pokemon) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                <Link to={`/poke/${row.id}`}>
                {row.name}
                </Link>
              </StyledTableCell>
              <StyledTableCell align="right">{row.weight}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.types[0].type.name}</StyledTableCell> */}
              {/* <StyledTableCell align="right">{row.type}</StyledTableCell> */}
              <StyledTableCell align="right">{row.weight}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>
    </Grid>
  );
};
export default AdvancedSearch;
