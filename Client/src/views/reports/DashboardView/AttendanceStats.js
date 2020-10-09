import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {ThemeProvider} from "@nivo/core";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useHttpClient } from "src/hooks/http-hook";
import { ResponsiveBar } from '@nivo/bar';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(() => ({
  root: {},
  page: {
    alignItems: 'center',
    textAlign: 'center',
    paddingLeft: 100
  }
}));

const AttendanceStats = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme1 = {
    tooltip: {
      container: {
        background: 'white',
        color: 'inherit',
        fontSize: '14px',
        borderRadius: '2px',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
        padding: '5px 9px'
      },
    }
  };

  const { isLoading, error, sendRequest } = useHttpClient();

  const [masterData, setMasterData] = useState([]);
  const [data, setData] = useState([]);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setData(() => {
      return masterData.slice((page-1)*10, page*10);
    });
  }, [page]);

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await sendRequest(
          //  TODO: CHANGE BACK TO PROD
          `${process.env.REACT_APP_DEV_URL}/data/attendanceChart`,
          "GET",
          null,
          {}
        );

        if (responseData) {
          setMasterData(() => {
            return responseData;
          });
          setData(() => {
            return responseData.slice(0, 10);
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (data.length === 0) {
      getData();
    }
  }, [isLoading, sendRequest, error]);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={(
          <Button
            endIcon={<ArrowDropDownIcon />}
            size="small"
            variant="text"
          >
            Last Month
          </Button>
        )}
        title="Attendance Statistics"
      />
      <Divider />
      <CardContent>
        <Box
          height={400}
          position="relative"
        >
          <ThemeProvider theme={theme1}>
            <ResponsiveBar
              groupMode="grouped"
              data={data}
              keys={[ 'Needed', 'Confirmed', 'Attended' ]}
              indexBy="Event"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              colors={{ scheme: 'pastel2' }}
              borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Event ID',
                legendPosition: 'middle',
                legendOffset: 32
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Number of Volunteers',
                legendPosition: 'middle',
                legendOffset: -40
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
              legends={[
                {
                  dataFrom: 'keys',
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: 'left-to-right',
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemOpacity: 1
                      }
                    }
                  ]
                }
              ]}
              animate={true}
              motionStiffness={90}
              motionDamping={15}
            />
          </ThemeProvider>
        </Box>
          <Pagination
            className={classes.page}
            showFirstButton
            showLastButton
            count={masterData.length%10}
            page={page}
            onChange={handleChange} />
      </CardContent>
    </Card>
  );
};

AttendanceStats.propTypes = {
  className: PropTypes.string
};

export default AttendanceStats;
