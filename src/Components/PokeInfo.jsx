import React from "react";
import {
  Grid,
  Paper,
  Typography,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";

import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { themeType } from "../utils/ThemeColor";

const PokeInfo = ({
  name,
  type,
  ability,
  move,
  imgSrc,
  id,
  preEvolution,
  finalEvolution,
  data,
}) => {
  const alt = `img-${name}`;

  const sxItemBox={
    justifyContent:"space-around",
    border:' 2px solid #1d1b1bae',
    borderRadius: '5px',
    margin:'5px',
  }
  
  return (
    <Grid item sx={{ margin: "30px 0px" }}>
        <Paper elevation={15}>
          <Grid container justifyContent="flex-start" padding={1}>
            <Typography>{id}</Typography>
          </Grid>

          <Grid container justifyContent="center">
            <Grid item container justifyContent="center" sx={{width:'100%', height:'80%'}}>             
              <img src={imgSrc} alt={alt} width='30%'/>
            </Grid>
          </Grid>

          <Grid container justifyContent="center">
            <Typography variant="h5">{name}</Typography>
          </Grid>

          <Grid container justifyContent="center" marginTop={3}>
            <Grid container justifyContent="center" padding={1}>
              <Typography variant="subtitle2">Types:</Typography>
              <Grid item xs={8} textAlign="end">
                {type?.map((one, i) => (
                  <Typography
                    key={i}
                    display="inline"
                    sx={{ padding: "5px", margin:'2px', backgroundColor:`${themeType(one.type.name)}`, borderRadius:'10px' }}
                  >
                    <LabelImportantIcon
                      sx={{ fontSize: "10px", margin: "0px 5px 0px 5px"}}
                    />
                    {one.type.name}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Grid>

          {data ? (
            <Grid container justifyContent="center" marginTop={3}>
              <Grid item>
                <Typography variant="subtitle2">Stats:</Typography>
              </Grid>

              <Grid container justifyContent="center">
                {data.map((item, i) => (
                  <Grid
                    container
                    item
                    key={i}
                    xs={5}
                    sx={sxItemBox}
                  >
                    <Grid item>
                      <Typography>
                        {item.stat.name}: {item.base_stat}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ) : (
            ""
          )}

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
              <Grid item>
                <Typography variant="subtitle2">Ability:</Typography>
              </Grid>
              <Grid container justifyContent="center">
                {ability?.map((one, i) => (
                  <Grid
                    container
                    item
                    key={i}
                    xs={5}
                    sx={sxItemBox}
                  >
                    <Grid item>
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
                  maxWidth: "60%",
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

          <Grid
            container
            justifyContent="center"
            textAlign="center"
            padding={1}
            sx={{ padding: "30px" }}
          >
            {preEvolution ? (
              <Grid item xs={6} justifyContent="center">
                <Typography variant="subtitle1">
                  Pre Evolution: {preEvolution}
                </Typography>
              </Grid>
            ) : (
              <Grid item xs={6} justifyContent="center">
                <Typography variant="subtitle1">
                  Pre Evolution: No tiene
                </Typography>
              </Grid>
            )}
            {finalEvolution ? (
              <Grid item xs={6}>
                <Typography variant="subtitle1">
                  Final Evolution: {finalEvolution}
                </Typography>
              </Grid>
            ) : (
              <Grid item xs={6} justifyContent="center">
                <Typography variant="subtitle1">
                  Final Evolution: No tiene
                </Typography>
              </Grid>
            )}
          </Grid>
        </Paper>
    </Grid>
  );
};

export default PokeInfo;
