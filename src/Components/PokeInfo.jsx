import React from "react";
import {
  Grid,
  Paper,
  Typography,
  ListItem,
  List,
  ListItemText,
  Link,
} from "@mui/material";

import {LabelImportant} from "@mui/icons-material";

import { themeType } from "../utils/ThemeColor";

const PokeInfo = ({
  name,
  type,
  ability,
  move,
  imgSrc,
  id,
  preEvolution,
  evolution,
  finalEvolution,
  hrefPre,
  hrefNext,
  hrefFinal,
  data,
  chain,
}) => {
  const alt = `img-${name}`;

  const sxItemBox={
    margin:'5px',
    textAlign:'start',
    padding:'0px 10px',
    minWidth:'200px'
  }
  
  const sxImg={
    height:'80%',
    "&:hover": {
     
    },
  }

  return (
    <Grid item sx={{ margin: "30px 0px", minWidth:'80%' }}>
        <Paper elevation={15} > 
          {/* poke id */}
          <Grid container justifyContent="flex-start" padding={1}>
            <Typography>{id}</Typography>
          </Grid>

{/* image */}
          <Grid container justifyContent="center">
            <Grid item container justifyContent="center" lg={12}  sx={sxImg}>             
              <img src={imgSrc} alt={alt} width='30%'/>
            </Grid>
          </Grid>

{/* name */}
          <Grid container justifyContent="center">
            <Typography variant="h5">{name}</Typography>
          </Grid>

{/* type */}
          <Grid container
          justifyContent="center" marginTop={3}>
            <Grid container justifyContent="center" padding={1}>
              <Grid item xs={8} textAlign="center">
                {type?.map((one, i) => (

     <Typography
                    key={i}
                    display="inline"
                    sx={{ padding: "5px", margin:'2px', backgroundColor:`${themeType(one.type.name)}`, borderRadius:'10px' }}
                  >
                    <LabelImportant
                      sx={{ fontSize: "10px", margin: "0px 5px 0px 5px"}}
                    />
                    {one.type.name}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Grid>

{/* stats */}
          {data ? (
            <Grid container justifyContent='center' marginTop={3}>
              <Grid item>
                <Typography variant="subtitle2">Stats:</Typography>
              </Grid>

              <Grid container
              width='66%'
              >
                <Grid
                    container
                    item
                    flexDirection='column'
                    xs={1}
                    sm={2}
                    md={3}
                    lg ={6}
                    sx={sxItemBox}
                  >
                {data.map((item, i) => (
                  
                    <Grid item key={i}>                     

                      <Typography variant="subtitle2">
                        {item.stat.name}: {item.base_stat}
                      </Typography>
                    </Grid> ))}
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
            <Grid container justifyContent="center" marginTop={3}>
              <Grid item >
                <Typography variant="subtitle2">Ability:</Typography>
              </Grid>

              <Grid container width='66%' >
                {ability?.map((one, i) => (
                  <Grid
                    container
                    item
                    key={i}
                    flexDirection='column'
                    xs={1}
                    sm={2}
                    md={3}
                    lg ={6}
                    
                    sx={sxItemBox}
                  >
                    <Grid item >
                      <Typography variant='body1'>
                        {i + 1}- 
                      
                      {one.ability.name}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ) : (
            ""
          )}

{/* moves */}
          {move ? (
            <Grid container justifyContent="center" marginTop={2}>
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
                  border: "1px solid #1d1b1bae",
                  borderRadius: "5px",
                  "& ul": { padding: 0 },
                }}
              >
                {move?.map((one, i) => (
                  <ListItem
                    key={one.move.name}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#0a0a0ac7",
                        color: "#fff",
                      },
                    }}
                  >
                    <ListItemText><Typography>
                    {i + 1} - {one.move.name}

                    </Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ) : (
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
            ""
          )}
{/* Evolution chain */}
 {<Grid
            container
            justifyContent="center"
            textAlign="center"
            padding={1}
            sx={{ padding: "30px", border:'1px solid red' }}
          >
            <Typography> All evolution Chain:
              <Typography variant="subtitle2">
                2° step
              </Typography>
              {chain?.map((name, i)=>(
              <Link sx={{padding:'5px', display:'block'}} key={i} href={`/poke/${name}`} >
                {name}
              </Link>            
            ))}
            </Typography>
           
          </Grid>}


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
                  Pre Evolution: <Link href={hrefPre} underline="none">{preEvolution}</Link>
                </Typography>
              </Grid>
            ): (
              <Grid item xs={4} justifyContent="center">
                <Typography variant="subtitle1">
                Pokemon Base
                </Typography>
              </Grid>
            )}
            {evolution && (
              <Grid item xs={4}>  
                <Typography variant="subtitle1">
                  Evolution: <Link href={hrefNext} underline="none">{evolution}</Link>
                </Typography>
                
              </Grid>
            )}
            {finalEvolution && finalEvolution !== name && finalEvolution !== undefined ? (
              <Grid item xs={4}>
                <Typography variant="subtitle1">
                  Final Evolution: <Link href={hrefFinal} underline="none">{finalEvolution}</Link>
                </Typography>
              </Grid>
            ) : (
              <Grid item xs={4} justifyContent="center">
                <Typography variant="subtitle1">
                Final Evolution
                </Typography>
              </Grid>
            )
            }
          </Grid>
        </Paper>
    </Grid>
  );
};

export default PokeInfo;
