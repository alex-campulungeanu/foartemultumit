import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {Container, Card, CardHeader, CardContent, CardActions, Collapse, Avatar, IconButton, Typography} from '@material-ui/core'
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {format, parseISO} from 'date-fns'

import styles from '../styles/Review.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 20
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ReviewItem = ({review}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const createdFormated = format(parseISO(review.created), 'dd/MM/yyyy')

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    // <a className={styles.card}>
    //   <h3>{review.user.name}</h3>
    //   <div dangerouslySetInnerHTML={{ __html: review.content }} />
    // </a>
    <Container maxWidth='lg'>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {review.user.name.charAt(0)}
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={review.user.name}
          subheader={`${review.title} - ${createdFormated}`}
        />
        <CardContent>
          <Typography variant="h4" color="textPrimary" component="p">
            {/* {review.content} */}
            <span dangerouslySetInnerHTML = {{__html: review.content}} />
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Replies:</Typography>
            <Typography paragraph>
              This should print the replies on reviews
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Container>
  )
}

export default ReviewItem