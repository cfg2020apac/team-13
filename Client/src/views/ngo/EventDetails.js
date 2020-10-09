import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  CardHeader,
  Divider,
  Grid,
  Typography,
  makeStyles,
  Link
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 245,
    margin: '10px'
  },
  body: {
    display: 'flex',
    flex: '1 1 auto',
    flexWrap: "wrap",
    height: '100%'
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 10,
  },
});

const EventDetails = ({className, ...rest}) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.body}>
        {rest.events.map((event) => {
          return (
            <>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {event.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {event.dateTime}
                </Typography>
              </CardContent>
              <CardActions>
                <Button color="secondary" size="small">View More</Button>
              </CardActions>
            </Card>
            </>
          )
        })}
      </Box>
    </>
  )
}

export default EventDetails
