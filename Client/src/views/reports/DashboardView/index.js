import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import PercentageSignups from './PercentageSignups';
import TotalVolunteers from './TotalVolunteers';
import EventTypes from "./EventTypes";
import VolunteerDemographicsAge from "./VolunteerDemographicsAge";
import VolunteerDemographicsGender from "./VolunteerDemographicsGender";
import AttendanceStats from "./AttendanceStats";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  pie: {
    fontWeight: 'bold',
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="HandsOn Hong Kong"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={6}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalVolunteers />
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xl={3}
            xs={12}
          >
            <PercentageSignups />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
            className={classes.pie}
          >
            <EventTypes />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
            className={classes.pie}
          >
            <VolunteerDemographicsAge />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
            className={classes.pie}
          >
            <VolunteerDemographicsGender />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
            className={classes.pie}
          >
            <AttendanceStats />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
