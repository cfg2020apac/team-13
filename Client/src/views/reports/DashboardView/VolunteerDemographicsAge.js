import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  makeStyles,
  useTheme, Button
} from '@material-ui/core';
import { ResponsivePie } from '@nivo/pie';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";


const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
  }
}));

const VolunteerDemographicsAge = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const data = [
    {
      "id": "below 25",
      "label": "below 25",
      "value": 63,
      "color": "hsl(272,7%,41%)"
    },
    {
      "id": "25-40",
      "label": "25-40",
      "value": 55,
      "color": "hsl(47,53%,92%)"
    },
    {
      "id": "above 40",
      "label": "above 40",
      "value": 90,
      "color": "hsl(3,83%,95%)"
    }
  ];

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader action={(
        <Button
          endIcon={<ArrowDropDownIcon />}
          size="small"
          variant="text"
        >
          Last Month
        </Button>
      )} title="Volunteer Age Demographics" />
      <Divider />
      <CardContent>
        <Box
          height={300}
          position="relative"
        >
          <ResponsivePie
            data={data}
            margin={{ top: 40, right: 40, bottom: 50, left: 40 }}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: 'pastel1' }}
            borderWidth={2}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
            enableRadialLabels={false}
            sliceLabel={function(e){return e.id+" ("+e.value+")"}}
            slicesLabelsSkipAngle={4}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            isInteractive={false}
            legends={[
              {
                anchor: 'bottom',
                direction: 'row',
                translateY: 50,
                itemWidth: 80,
                itemHeight: 25,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#000'
                    }
                  }
                ]
              }
            ]}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

VolunteerDemographicsAge.propTypes = {
  className: PropTypes.string
};

export default VolunteerDemographicsAge;
