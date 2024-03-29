import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';

const user = {
  avatar: '',
  city: 'Hong Kong',
  country: 'Hong Kong',
  jobTitle: 'NGO',
  name: 'Feeding Hong Kong',
  location: 'Wan Chai Station',
  description: 'Feeding poor people',
  staff: 50,
  covid: ["Face Masks", "Hand Sanitizer"]
};

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const Ngo = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
          <Box mt={2}>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h3"
            >
              {user.name}
            </Typography>
          </Box>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {user.description}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {user.location}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            No. of staff: {user.staff}+
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="secondary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};

Ngo.propTypes = {
  className: PropTypes.string
};

export default Ngo;
