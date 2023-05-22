import React, {useState} from "react";
import { useQuery } from "@apollo/client";

import {
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  ListItemText,
  SelectChangeEvent,
  Grid,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { GET_COLORS_TYPES } from "../../apollo-client/AdvancedSearch";
import Prueba from "../Loader/Prueba";
import CreateTable from "./Table";

const AdvancedSearch = () => {
  const { loading, error, data } = useQuery(GET_COLORS_TYPES);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  const [minWeight, setMinWeight] = useState("");
  const [maxWeight, setMaxWeight] = useState("");
  const [searchName, setSearchName] = useState("");
  const [type, setType] = useState<string[]>([]);
  const [isBaby, setIsBaby] = useState(false);
  const [color, setColor] = useState("");

  const [minWeightTable, setMinWeightTable] = useState("");
  const [maxWeightTable, setMaxWeightTable] = useState("");
  const [searchNameTable, setSearchNameTable] = useState("");
  const [typeTable, setTypeTable] = useState<string[]>([]);
  const [isBabyTable, setIsBabyTable] = useState(false);
  const [colorTable, setColorTable] = useState("");

  const handleChangeBaby = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBaby(event.target.checked);
  };
  const handleChangeColor = (event: SelectChangeEvent) => {
    setColor(event.target.value as string);
  };
  const handleChangeType = (event: SelectChangeEvent<typeof type>) => {
    const {
      target: { value },
    } = event;
    setType(typeof value === "string" ? value.split(",") : value);
  };

  // Format items in Types filter
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 224,
      },
    },
  };

  const removeFilters = () => {
    setMinWeight("");
    setMaxWeight("");
    setSearchName("");
    setType([]);
    setIsBaby(false);
    setColor("");
  };

  const applyFilters = () => {
    setMinWeightTable(minWeight);
    setMaxWeightTable(maxWeight);
    setSearchNameTable(searchName);
    setTypeTable(type);
    setIsBabyTable(isBaby);
    setColorTable(color);
  };

  if (loading) return <Prueba />;
  if (error) return <p>Error :</p>;

  return (
    <>
      <Grid
        display={"flex"}
        flexDirection={"row"}
        mt={"30px"}
        flexWrap={"wrap"}
        gap={"10px"}
        justifyContent={"space-around"}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Grid item >
          <TextField
            id="name"
            label="Pokemon Name"
            variant="outlined"
            value={searchName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearchName(event.target.value);
            }}
          />
        </Grid>

        <Grid item>
          <TextField
            id="outlined-basic2"
            label="Min Weight"
            variant="outlined"
            type="number"
            value={minWeight}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setMinWeight(event.target.value);
            }}
          />
        </Grid>

        <Grid item>
          <TextField
            id="outlined-basic3"
            label="Max Weight"
            variant="outlined"
            type="number"
            value={maxWeight}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setMaxWeight(event.target.value);
            }}
          />
        </Grid>

        <Grid item>
          <FormControl sx={{ width: 224 }}>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={color}
              label="Color"
              onChange={handleChangeColor}
            >
              <MenuItem value={"%"}>all</MenuItem>
              {data.color.map(({ name, id }: { name: string; id: number }) => (
                <MenuItem value={name} key={id}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item>
          <FormControl sx={{ width: 224 }}>
            <InputLabel id="demo-multiple-checkbox-label">Type</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={type}
              defaultChecked
              onChange={handleChangeType}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {data.type.map(({ name, id }: { name: string; id: number }) => (
                <MenuItem key={id} value={name}>
                  <Checkbox checked={type.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        display={"flex"}
        margin={"20px 5px 20px 5px"}
        justifyContent={"flex-end"}
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={isBaby} onChange={handleChangeBaby} />}
            label="Is baby"
          />
        </FormGroup>
      </Grid>

      <Grid
        display={"flex"}
        gap={'10px'}
        margin={"20px 5px 20px 5px"}
        justifyContent={"flex-end"}
      >
        <Button size="small" variant="contained" onClick={removeFilters}>
          Remove filters
        </Button>
        <Button size="large" variant="contained" onClick={applyFilters}>
          Search
        </Button>
      </Grid>

      <Grid display={"flex"} flexDirection={"column"} width={"100%"}>
        <CreateTable
          pageNumber={(page - 1) * 20}
          searchName={"%".concat(searchNameTable).concat("%")}
          minWeight={minWeightTable ? minWeightTable : 0}
          maxWeight={maxWeightTable ? maxWeightTable : 100000}
          color={colorTable ? colorTable : "%"}
          isBaby={isBabyTable}
          type={
            typeTable[0]
              ? typeTable
              : data.type.map(({ name }: { name: string }) => name)
          }
        />
      </Grid>
    </>
  );
};

export default AdvancedSearch;
