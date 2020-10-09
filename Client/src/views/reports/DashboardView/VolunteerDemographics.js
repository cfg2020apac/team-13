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

const VolunteerDemographics = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const data = [
    {
      "id": "Female",
      "label": "Female",
      "value": 63,
      "color": "hsl(3,100%,83%)"
    },
    {
      "id": "Male",
      "label": "Male",
      "value": 55,
      "color": "hsl(200,66%,56%)"
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
      )} title="Volunteer Demographics" />
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
                itemWidth: 70,
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

VolunteerDemographics.propTypes = {
  className: PropTypes.string
};

export default VolunteerDemographics;
