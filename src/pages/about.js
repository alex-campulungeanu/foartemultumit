import React, { useState } from 'react';
import { Grid, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, Paper, Step, Stepper, StepLabel, StepContent, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import Meta from '../components/Meta'

// const useStyles = makeStyles(theme => ({
//   root: {
//     flex: 0.8,
//     alignContent: 'flex-start',
//     alignItems: 'flex-start',
//     textAlign: 'right'
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
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

const steps = ['Emag', 'Link', 'Home Page']

const getStepContent = (step) => {
  switch(step) {
    case 0:
      return ' Go to www.emag.ro'
    case 1:
      return 'Copied link should have the format: https://www.emag.ro/url/pd/product_code/'
    case 2:
      return 'Go to Home page'
  }
}

const about = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => setActiveStep(0)

  return (
    <div className={classes.root}>
      <Meta title='About'/>
      <Typography variant="h2" color="textPrimary" component="p">
        How to use the app ...
      </Typography>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div>
                  <Button 
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button 
                    variant='contained'
                    color='primary'
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </StepContent>
            </Step>
          )
        })}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
        <Typography>All steps completed - you&apos;re finished</Typography>
        <Button onClick={handleReset} className={classes.button}>
          Read again
        </Button>
      </Paper> 
      )}
    </div>

    // <React.Fragment>
    //   <Meta title='About'/>
    //   <Typography variant="h2" color="textPrimary" component="p">
    //     How to...
    //   </Typography>
    //   <List className={classes.root}>
    //     {details.map((item, idx) => {
    //       return (
    //         <ListItem>
    //           <ListItemAvatar>
    //             <Avatar>
    //               {item.icon}
    //             </Avatar>
    //           </ListItemAvatar>
    //           <ListItemText primary={item.label} secondary={item.data} />
    //         </ListItem>
    //       )
    //     })}
    //   </List>
    // </React.Fragment>
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