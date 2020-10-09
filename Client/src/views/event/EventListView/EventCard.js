import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  }
}));

const EventCard = ({ className, event, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="center"
          mb={3}
        >
          <Avatar
            alt="Event"
            src={event.media}
            variant="square"
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {event["NGOName"]}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {event["Title"]}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {event["Description"]}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {event["Location"]}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {`${moment(event["Start"]).format('MM/DD/YY, h:mm:ss a')} - ${moment(event["End"]).format('MM/DD/YY, h:mm:ss a')}`}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          Minimum Age: {event["AgeRequirement"]}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid
          container
          justify="space-between"
          spacing={2}
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <AccessTimeIcon
              className={classes.statsIcon}
              color="action"
            />
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              Updated 2hr ago
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              {`${event["CurrentlySignedUp"]} / ${event["Needed"]}`}
              {' '}
              Signups
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

EventCard.propTypes = {
  className: PropTypes.string,
  event: PropTypes.object.isRequired
};

export default EventCard;
