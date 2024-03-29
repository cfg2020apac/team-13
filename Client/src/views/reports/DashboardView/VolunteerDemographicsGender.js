import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  Button
} from '@material-ui/core';
import { useHttpClient } from "src/hooks/http-hook";
import { ResponsivePie } from '@nivo/pie';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";


const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
  }
}));

const VolunteerDemographicsGender = ({ className, ...rest }) => {
  const classes = useStyles();
  const { isLoading, error, sendRequest } = useHttpClient();

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await sendRequest(
          //  TODO: CHANGE BACK TO PROD
          `${process.env.REACT_APP_DEV_URL}/data/genderChart`,
          "GET",
          null,
          {}
        );

        if (responseData) {
          setData(() => {
            const genders = [];
            for (let key in responseData) {
              const obj = {};
              obj["id"] = key;
              obj["label"] = key;
              obj["value"] = responseData[key];
              genders.push(obj);
            }
            return genders;
          });
        }
        console.log(responseData);
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
      <CardHeader action={(
        <Button
          endIcon={<ArrowDropDownIcon />}
          size="small"
          variant="text"
        >
          Last Month
        </Button>
      )} title="Volunteer Gender Demographics" />
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

VolunteerDemographicsGender.propTypes = {
  className: PropTypes.string
};

export default VolunteerDemographicsGender;
