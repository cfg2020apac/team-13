import React, { useState } from 'react';
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
  const [volunteers] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Volunteers"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results volunteers={volunteers} />
        </Box>
      </Container>
    </Page>
  );
};

export default NgoListView;
