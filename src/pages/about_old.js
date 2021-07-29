import React from 'react';
import { Grid, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import Meta from '../components/Meta'

const useStyles = makeStyles(theme => ({
  root: {
    flex: 0.8,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'right'
  },
}));


const details = [
  {
    label: 'Home',
    data: 'Go to Home',
    icon: <HomeIcon />,
  },
  {
    label: 'Emag',
    data: 'Go to www.emag.ro',
    icon: <ShoppingCartIcon />,
  },
  {
    label: 'Copy',
    data: 'Copy link should have the format: https://www.emag.ro/url/pd/product_code/',
    icon: <FileCopyIcon />,
  },
  
]

const about = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Meta title='About'/>
      <Typography variant="h2" color="textPrimary" component="p">
        How to...
      </Typography>
      <List className={classes.root}>
        {details.map((item, idx) => {
          return (
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {item.icon}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.label} secondary={item.data} />
            </ListItem>
          )
        })}
      </List>
    </React.Fragment>
    // <div>
    //   <Meta title='About'/>
    //   <Grid 
    //     direction="row"
    //     justifyContent="center"
    //     alignItems="center"
    //   >
    //     <Typography variant="h2" color="textPrimary" component="p">How to...</Typography>
    //     <Grid>1. visit www.emag.ro</Grid>
    //     <Grid>2. fill the input with link in the format https://www.emag.ro/url/pd/product_code/</Grid>
    //   </Grid>

    // </div>
  )
}

export default about