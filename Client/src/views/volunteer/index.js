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
import OpportunitiesDetails from './OpportunitiesDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
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
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <Typography color="textPrimary" variant="h3">
                Suggested Opportunities
              </Typography>
              <Typography color="textSecondary" variant="h4">
                Edit your skills and preferences to refine these suggestions
              </Typography>
              <OpportunitiesDetails events={events}/>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Page>
  )
}

export default NgoHome;
