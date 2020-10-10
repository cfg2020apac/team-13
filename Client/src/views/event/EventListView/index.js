import React, { useState, useEffect } from 'react';
import { useHttpClient } from "src/hooks/http-hook";
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import EventCard from './EventCard';
import Heatmap from './Heatmap';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const ProductList = () => {
  const classes = useStyles();
  const [events, setEvents] = useState([]);
  const { isLoading, error, sendRequest } = useHttpClient();

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
          setEvents(responseData);
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (events.length === 0) {
      getData();
    }
  }, [isLoading, sendRequest, error]);

  return (
    <Page
      className={classes.root}
      title="Events"
    >
      <Container maxWidth={false}>
        <Toolbar data={events}/>
        <Heatmap/>
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {events.map((event) => (
              <Grid
                item
                key={event.id}
                lg={4}
                md={6}
                xs={12}
              >
                <EventCard
                  className={classes.productCard}
                  event={event}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Page>
  );
};

export default ProductList;
