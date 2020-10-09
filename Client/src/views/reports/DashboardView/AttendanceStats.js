import React from 'react';
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
  useTheme,
  makeStyles,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar'

const useStyles = makeStyles(() => ({
  root: {}
}));

const AttendanceStats = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
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

  let data = [
    {
      "Event": "6866",
      "Needed": 200,
      "Confirmed": 98,
      "Attended": 80
    },
    {
      "Event": "6867",
      "Needed": 20,
      "Confirmed": 15,
      "Attended": 15
    },
    {
      "Event": "6868",
      "Needed": 60,
      "Confirmed": 34,
      "Attended": 23
    },
    {
      "Event": "6869",
      "Needed": 80,
      "Confirmed": 79,
      "Attended": 79
    },
    {
      "Event": "6870",
      "Needed": 40,
      "Confirmed": 40,
      "Attended": 37
    }
    ];

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
      </CardContent>
    </Card>
  );
};

AttendanceStats.propTypes = {
  className: PropTypes.string
};

export default AttendanceStats;
