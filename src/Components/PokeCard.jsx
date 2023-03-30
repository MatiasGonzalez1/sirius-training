import React from "react";
import {
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";

import LabelImportantIcon from "@mui/icons-material/LabelImportant";

const PokeCard = ({
  name,
  type,
  imgSrc,
  id,
  href,
  preEvolution,
  finalEvolution,
  data,
}) => {

  const alt = `img-${name}`;

  const sxHover = {
    boxShadow: 3,
    "&:hover": {
      transiton: "5s",  
      transform: "scale(1.02)",
      border: "1px solid #0c0b0b4f",
    },
  };

  return (
    <Grid item xs={8} md={6} lg={4} maxWidth="500px">
      <Link href={href} underline="none">
        <Paper elevation={15} sx={sxHover}>
          <Grid container justifyContent="flex-start" padding={1}>
            <Typography>{id}</Typography>
          </Grid>

          <Grid container justifyContent="center">
            <Grid item container justifyContent="center">
              <img src={imgSrc} alt={alt} style={{ width: "150px" }} />
            </Grid>
          </Grid>

          <Grid container justifyContent="center">
            <Typography variant="h5">{name}</Typography>
          </Grid>

          <Grid container justifyContent="center">
            <Grid container justifyContent="space-around" padding={1}>
              <Typography variant="subtitle2">Types:</Typography>
              <Grid item xs={8} textAlign="end">
                {type?.map((one, i) => (
                  <Typography
                    key={i}
                    display="inline"
                    sx={{padding:'5px 0'}}
                  >
                    <LabelImportantIcon sx={{fontSize:'10px', margin:'0px 5px 0px 5px'}} />
                    {one.type.name}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Grid>

          {data ? (
            <Grid container justifyContent="center">
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
                    justifyContent="space-around"
                    border={1}
                    margin={1}
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

          <Grid container justifyContent="flex-center">
            {preEvolution ? (
              <Grid item xs={4}>
                <Typography variant="subtitle2">
                  Pre Evolution: {preEvolution}
                </Typography>
              </Grid>
            ) : (
              ""
            )}
            {finalEvolution ? (
              <Grid item xs={4}>
                <Typography variant="subtitle2">
                  Final Evolution: {finalEvolution}
                </Typography>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        </Paper>
      </Link>
    </Grid>
  );
};

export default PokeCard;
