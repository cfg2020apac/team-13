import React, {useEffect, useState} from 'react';
import { useHttpClient } from "src/hooks/http-hook";
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const NgoListView = () => {
  const classes = useStyles();
  const [volunteers, setVolunteers] = useState([]);
  const { isLoading, error, sendRequest } = useHttpClient();

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await sendRequest(
          //  TODO: CHANGE BACK TO PROD
          `${process.env.REACT_APP_DEV_URL}/web/allNGOs`,
          "GET",
          null,
          {}
        );

        if (responseData) {
          setVolunteers(() => {
            return responseData;
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (volunteers.length === 0) {
      getData();
    }
  }, [isLoading, sendRequest, error]);

  return (
    <Page
      className={classes.root}
      title="NGOs"
    >
      <Container maxWidth={false}>
        <Toolbar data={volunteers}/>
        <Box mt={3}>
          <Results volunteers={volunteers} />
        </Box>
      </Container>
    </Page>
  );
};

export default NgoListView;
