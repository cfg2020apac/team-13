import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  Link
} from '@material-ui/core';
import EventDetails from './EventDetails';

const events = [
  {
    name: 'Feed people',
    dateTime: '10/10/20 7:00'
  },
  {
    name: 'Feed people',
    dateTime: '10/10/20 7:00'
  },
  {
    name: 'Feed people',
    dateTime: '10/10/20 7:00'
  },
  {
    name: 'Feed people',
    dateTime: '10/10/20 7:00'
  },
  {
    name: 'Feed people',
    dateTime: '10/10/20 7:00'
  },
];

const useStyles = makeStyles(() => ({
  root: {}
}));

const NgoDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="Available events requested"
          title="Events"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <EventDetails events={events}/>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Link href="/ngo/request">
            <Button
              color="secondary"
              variant="contained"
            >
              Request Events
            </Button>
          </Link>
        </Box>
      </Card>
    </form>
  );
};

NgoDetails.propTypes = {
  className: PropTypes.string
};

export default NgoDetails;
