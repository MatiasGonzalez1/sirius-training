import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';  
import Typography from '@mui/material/Typography';

const Pokelist = ({name,
  type,
  ability,
  imgSrc,
  id,
  href,
  evolution,
  data,})=> {

    const alt = `img-${name}`;

  return (
    <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper'}}>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={alt} src={imgSrc} sx={{width:'80px', height:'80px'}} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component='h2'
                variant="body1"
                color="text.primary"
              >
                {type?.map((one, i) => (
            <ListItemText justifyContent="center" key={i}>
              <Typography>{one.type.name}</Typography>
            </ListItemText>
          ))}
              </Typography>
              {href}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}

export default Pokelist;