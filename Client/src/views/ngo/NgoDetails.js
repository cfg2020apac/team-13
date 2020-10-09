import React, { useState, useEffect } from 'react';
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
import { useHttpClient } from "src/hooks/http-hook";

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
  const { isLoading, error, sendRequest } = useHttpClient();

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await sendRequest(
          //  TODO: CHANGE BACK TO PROD
          `${process.env.REACT_APP_DEV_URL}/web/upcomingEvents`,
          "GET",
          null,
          {}
        );

        if (responseData) {
          setData(responseData);
        }
        // console.log(responseData)
      } catch (err) {
        console.log(err);
      }
    };

    if (data.length === 0) {
      getData();
    }
  }, [isLoading, sendRequest, error]);

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          title="Events"
          subheader="Available events requested"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <EventDetails events={data}/>
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
