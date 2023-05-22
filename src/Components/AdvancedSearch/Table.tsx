import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link as LinkUI,
  Pagination,
  PaginationItem,
  Grid,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { GOTTA_CATCH_THEM_FILTER } from "../../apollo-client/AdvancedSearch";
import { Pokemon } from "../../@types/tyPesSearch";
import { useQuery } from "@apollo/client";
import Prueba from "../Loader/Prueba";

const CreateTable: React.FC<Pokemon> = ({
  pageNumber,
  searchName,
  minWeight,
  maxWeight,
  color,
  isBaby,
  type,
}) => {
  const { loading, error, data } = useQuery(GOTTA_CATCH_THEM_FILTER, {
    variables: {
      pageNumber,
      searchName,
      minWeight,
      maxWeight,
      color,
      isBaby,
      type,
    },
  });

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  if (loading) return <Prueba />;
  if (error) return <p>Error :</p>;
  if (!data.pokemonsCount.aggregate.count)
    return <Typography>Pokemon not found, please search again</Typography>;
  return (
    <Grid flexDirection={"column"} display={"flex"} justifyContent={"center"}>
      <Grid item margin={"20px 5px 20px 5px"} alignSelf={"center"}>
        <Pagination
          page={page}
          count={Math.ceil(data.pokemonsCount.aggregate.count / 20)}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`${item.page === 1 ? "" : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </Grid>

      <Grid item>
        <TableContainer component={Paper} sx={{ backgroundColor: "#FAFFFF" }}>
          <Table sx={{ minWidth: 700 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Color</StyledTableCell>
                <StyledTableCell align="right">Weight</StyledTableCell>
                <StyledTableCell align="right">Type 1</StyledTableCell>
                <StyledTableCell align="right">Type 2</StyledTableCell>
                <StyledTableCell align="right">Is baby</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.pokemons.map(
                ({
                  id,
                  name,
                  weight,
                  specy,
                  types,
                }: {
                  id: number;
                  name: string;
                  weight: number;
                  specy: { is_baby: boolean; color: { name: string } };
                  types: { type: { name: string } }[];
                }) => (
                  <StyledTableRow key={id}>
                    <StyledTableCell component="th" scope="row">
                      <LinkUI underline="none" href={`/poke/${id}`}>
                        {name}
                      </LinkUI>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {specy.color.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{weight}</StyledTableCell>
                    <StyledTableCell align="right">
                      {types[0].type.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {types[1] ? types[1].type.name : ""}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {specy.is_baby ? "true" : "false"}
                    </StyledTableCell>
                  </StyledTableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default CreateTable;
