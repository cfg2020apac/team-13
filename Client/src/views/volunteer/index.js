import React from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Card,
  Grid,
  makeStyles,
  IconButton,
  CardMedia,
  Button
} from '@material-ui/core';
import Page from 'src/components/Page';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Volunteer from './Volunteer';
import VolunteerDetails from './VolunteerDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  card: {
    backgroundColor: theme.palette.card.main,
    alignItems: 'center',
    color: theme.palette.primary.main,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  box: {
    paddingTop: theme.spacing(8)
  },
  icon: {
    marginTop: theme.spacing(3),
    width: 48,
    height: 48,
  },
  rowCard: {
    marginBottom: theme.spacing(3),
  },
  button: {
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(6),
    fontSize: 16,
    border: '2px solid',
  }
}));

const NgoHome = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="NGO Home"
    >
      <Container>
        <Box mt={3}>
          <Grid
              container
              spacing={3}
            >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <Volunteer/>
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <VolunteerDetails/>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Page>
  )
}

export default NgoHome;
