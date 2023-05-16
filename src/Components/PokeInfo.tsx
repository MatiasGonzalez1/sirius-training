import React from "react";
import { InfoPokemon } from "../@types/pokemon";
import {
  Grid,
  Paper,
  Typography,
  ListItem,
  List,
  ListItemText,
  Link,
  Button,
} from "@mui/material";

import { LabelImportant } from "@mui/icons-material";

import { themeType } from "../utils/ThemeColor";

const PokeInfo: React.FC<InfoPokemon> = ({
  name,
  type,
  ability,
  move,
  imgSrc,
  id,
  preEvolution,
  evolution,
  finalEvolution,
  evolves_from_species_id,
  hrefNext,
  hrefFinal,
  data,
  chain1,
  chain2,
  chainFinal,
  chain1Id
}) => {
  const alt = `img-${name}`;

  const sxItemBox = {
    margin: "5px",
    textAlign: "start",
    padding: "0px 10px",
    minWidth: "200px"
  };

  const sxImg = {
    height: "80%",
    "&:hover": {},
  };

  return (
    <Grid item sx={{ margin: "30px 0px", minWidth: "80%",justifyContent:'center'}}>
      <Paper elevation={15}>
        {/* poke id */}
        <Grid container justifyContent="flex-start" padding={1}>
          <Typography>{id}</Typography>
        </Grid>

        {/* image */}
        <Grid container justifyContent="center">
          <Grid item container justifyContent="center" lg={12} sx={sxImg}>
            <img src={imgSrc} alt={alt} width="30%" />
          </Grid>
        </Grid>

        {/* name */}
        <Grid container justifyContent="center">
          <Typography variant="h5">{name}</Typography>
        </Grid>

        {/* type */}
        <Grid container justifyContent="center" marginTop={3}>
          <Grid container justifyContent="center" padding={1}>
            <Grid item xs={8} textAlign="center">
              {type?.map((one:any, i:any) => (
                <Typography
                  key={i}
                  display="inline"
                  sx={{
                    padding: "5px",
                    margin: "2px",
                    backgroundColor:themeType(one.pokemon_v2_type.name),
                    borderRadius: "10px",
                  }}
                >
                  <LabelImportant
                    sx={{ fontSize: "10px", margin: "0px 5px 0px 5px" }}
                  />
                  {one.pokemon_v2_type.name}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          width="100%"
          justifyContent={'center'}
          flexWrap="wrap"
          gap="60px"
        >
          {/* stats */}
          {data ? (
            <Grid
              container
              justifyContent="center"
              marginTop={3}
              width="400px"
              borderRadius='0px 10px 0px 10px'
              border='1px solid #63378a'
              marginLeft={1} 
              marginRight={1}
              >
              <Grid item>
                <Typography variant="subtitle2" p={'10px'} borderBottom={'1px solid gray'}>Stats:</Typography>
              </Grid>

              <Grid container width="100%" justifyContent={'center'}>
                <Grid
                  container
                  item
                  flexDirection="column"
                  xs={8}
                  sm={3}
                  md={3}
                  lg={4}
                  sx={sxItemBox}
                >
                  {data.map((item:any, i:number) => (
                    <Grid item key={i}>
                      <Typography variant="subtitle2">
                        {item.pokemon_v2_stat.name}: {item.base_stat}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          ) : (
            ""
          )}

          {/* ability */}

          {ability ? (
            // <List>
            //  {ability.map((one)=>(
            //   <ListItem key={one.ability.name}>
            //   <ListItemText>
            //   {one.ability.name}
            //   </ListItemText>
            // </ListItem>
            //  ))
            //  }
            // </List>
            //   <Grid container justifyContent="flex-start" padding={10} mt="-30px">
            //     <InputLabel id="ability">Ability</InputLabel>
            //     <ul>
            //       {ability?.map((one) => (
            //         <Typography key={one.ability.name}>{one.ability.name}</Typography>
            //       ))}
            //     </ul>
            //   </Grid>
            // ) : (
            //   ""
            <Grid container justifyContent="center" marginTop={3} marginLeft={1} marginRight={1} width="400px" minHeight='150px' borderRadius='10px 0px 10px 0px'
            border='1px solid #63378a'>
              <Grid item>
                <Typography variant="subtitle2" p={'10px'} mb={-5} borderBottom={'1px solid gray'}>Ability:</Typography>
              </Grid>

              <Grid container width="100%" justifyContent={'center'}>
                {ability?.map((one: any, i) => (
                  <Grid
                    container
                    item
                    key={i}
                    xs={8}
                    sm={3}
                    md={3}
                    lg={4}
                    sx={sxItemBox}
                  >
                    <Grid item mb={'-40px'}>
                      <Typography variant="subtitle2">
                        {i + 1}-{one.pokemon_v2_ability.name}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ) : null}
        </Grid>

        {/* moves */}
        {
          move ? (
            <Grid container justifyContent="center" marginTop={5}>
              <Typography
                variant="subtitle2"
                sx={{ padding: "10px", height: "40px", display: "block" }}
              >
                Moves:
              </Typography>
              <List
                sx={{
                  width: "80%",
                  maxWidth: "66%",
                  bgcolor: "background.paper",
                  position: "relative",
                  overflow: "auto",
                  maxHeight: 150,
                  border: "1px solid #63378a",
                  borderRadius: "5px",
                  "& ul": { padding: 0 },
                }}
              >
                {move?.map((one:any, i) => (
                  <ListItem
                    key={i}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#0a0a0ac7",
                        color: "#fff",
                      },
                    }}
                  >
                    <ListItemText>
                      <Typography variant="subtitle2">
                        {i + 1} - {one.pokemon_v2_move.name}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ) : null
          // <Grid
          //   container
          //   justifyContent="flex-start"
          //   padding={10}
          //   mt="-100px"
          // >
          //   <InputLabel id="moves">Moves</InputLabel>
          //   <Select fullWidth labelId="move" label="Move">
          //     {move?.map((one) => (
          //       <MenuItem key={one.move.name}>{one.move.name}</MenuItem>
          //     ))}
          //   </Select>
          // </Grid>
        }
        {/* Evolution chain */}
        <Grid
        container
        justifyContent="center"
        textAlign="center"
        padding={1}
          sx={{ padding: "30px" }}
        >
          <Grid item xs={12}>
            <Typography>
                All evolution Chain:
          </Typography>
          </Grid>
          
        
        {/* {chain1? (
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              lg={2}
              flexWrap="wrap"
              justifyContent="space-around"
            >
              
                <Typography variant="subtitle2"></Typography>
                {chain1 && (
                  <Button
                    sx={{ padding: "5px", width: "200px" }}
                    href={`/poke/${chain1Id}`}
                  >
                    {chain1}
                  </Button>
                )}
              </Grid>
        ) : null} */}

        {chain2 ? (
          // <Grid
          //   container
          //   justifyContent="center"
          //   textAlign="center"
          //   padding={1}
          //   sx={{ padding: "30px" }}
          //   >
            <Grid
              item
              xs={12}
              sm={4}
              md={6}
              lg={6}
              flexWrap="wrap"
              justifyContent="space-around"
              >
              
                <Typography variant="subtitle2"></Typography>
              
                {chain2 && chain2.map((item:any, index:number)=>
                (
                   item === chain2[0]?
                  <Button
                    sx={{ padding: "5px", width: "200px"}}
                    key={index}
                    href={`/poke/${item.id}`}
                  >
                  
                    {`${index +1} - ${item.name}`}
                    
                  </Button>
                   : <Button
                   sx={{ padding: "5px", width: "200px" }}
                   key={index}
                   href={`/poke/${item.id}`}
                 >
                   {`${index +1} - ${item.name}`}
                   
                 </Button>
                ))
                  
                }
              
            </Grid>
        ) : null}
        {chainFinal? (
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              lg={2}
              flexWrap="wrap"
              justifyContent="space-around"
            >
                
                <Typography variant="subtitle2"></Typography>
                
                {chainFinal.map((name:string, i:number) => (
                  <Button
                    sx={{ padding: "5px", width: "200px" }}
                    key={i}
                    href={`/poke/${name}`}
                  >
                    {name}
                  </Button>
                ))}
              </Grid>
        ) : null}
        </Grid>
        {/* evolutions */}
        <Grid
          container
          justifyContent="center"
          textAlign="center"
          padding={1}
          sx={{ padding: "30px" }}
        >
          {preEvolution ? (
            <Grid item xs={4} justifyContent="center">
              <Typography variant="subtitle1">
                Pre Evolution:{" "}
                <Link href={`/poke/${evolves_from_species_id}`} underline="none">
                  {name}
                </Link>
              </Typography>
            </Grid>
          ) : (
            <Grid item xs={4} justifyContent="center">
              {/* <Typography variant="subtitle1">Pokemon Base</Typography> */}
            </Grid>
          )}
          {evolution && (
            <Grid item xs={4}>
              <Typography variant="subtitle1">
                Evolution:{" "}
                <Link href={hrefNext} underline="none">
                  {evolution}
                </Link>
              </Typography>
            </Grid>
          )}
          {/* {finalEvolution &&
          finalEvolution !== name &&
          finalEvolution !== undefined ? (
            <Grid item xs={4}>
              <Typography variant="subtitle1">
                Final Evolution:{" "}
                <Link href={hrefFinal} underline="none">
                  {finalEvolution}
                </Link> 
              </Typography>
            </Grid>
          ) : null} */}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PokeInfo;
