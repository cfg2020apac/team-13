import React from 'react';
import {useState, useEffect} from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import { useHttpClient } from "src/hooks/http-hook";
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
  const { isLoading, error, sendRequest } = useHttpClient();

  // const [dataSets, setDataSets] = useState([]);
  // const [currentData, setCurrentData] = useState({
  //   timestamp: "",
  //   ecg_data: [],
  // });
  // const [chartData, setChartData] = useState();
  //
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const responseData = await sendRequest(
  //         //  TODO: CHANGE BACK TO PROD
  //         `${process.env.REACT_APP_PROD_URL}/data/ecg`,
  //         "GET",
  //         null,
  //         {}
  //       );
  //
  //       if (responseData) {
  //         const latestData = responseData.data[0];
  //
  //         setDataSets((prev) => {
  //           prev = responseData.data;
  //           return prev;
  //         });
  //
  //         setCurrentData((prev) => {
  //           prev = latestData;
  //           prev.ecg_data = latestData.ecg_data;
  //           return prev;
  //         });
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //
  //   if (currentData.ecg_data.length === 0) {
  //     getData();
  //   }
  // }, [isLoading, currentData, sendRequest, setCurrentData, error]);

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
