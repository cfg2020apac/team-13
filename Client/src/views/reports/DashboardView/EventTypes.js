import React, {useEffect, useState} from 'react';
import { useHttpClient } from "src/hooks/http-hook";
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
    makeStyles,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { ResponsivePie } from '@nivo/pie';

const useStyles = makeStyles(() => ({
    root: {}
}));

const EventTypes = ({ className, ...rest }) => {
    const classes = useStyles();
  const { isLoading, error, sendRequest } = useHttpClient();
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

  const [data, setData] = useState([]);
  const mappings = {
    "Integrated": "Integrated",
    "Hunger & homelessness": "Hunger & homelessness",
    "Environmental education": "Environmental education",
    "Children and youth": "Children & youth",
    "Hungers and homeless": "Hunger & homelessness",
    "Elderly": "Elderly",
    "People with mental illness": "People with mental illness",
    "Refugees and asylum seekers": "Refugees and asylum seekers",
    "Other": "Other",
    "Animals": "Animals",
    "Women": "Women"
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await sendRequest(
          //  TODO: CHANGE BACK TO PROD
          `${process.env.REACT_APP_DEV_URL}/data/typeChart`,
          "GET",
          null,
          {}
        );

        if (responseData) {
          setData(() => {
            const ages = [];
            for (let key in responseData) {
              const obj = {};
              obj["value"] = obj["label"]? obj["label"] + responseData[key] : responseData[key];
              obj["id"] = mappings[key];
              obj["label"] = mappings[key];
              ages.push(obj);
            }
            return ages;
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
                title="Event Types"
            />
            <Divider />
            <CardContent>
                <Box
                    height={400}
                    position="relative"
                >
                    <ThemeProvider theme={theme1}>
                    <ResponsivePie
                        theme={theme1}
                        data={data}
                        margin={{ top: 40, right: 10, bottom: 80, left: 120 }}
                        innerRadius={0.5}
                        padAngle={0.7}
                        cornerRadius={3}
                        colors={{ scheme: 'pastel1' }}
                        borderWidth={2}
                        borderColor={{ from: 'color' }}
                        radialLabelsSkipAngle={2}
                        radialLabelsTextXOffset={6}
                        radialLabelsTextColor="#333333"
                        radialLabelsLinkOffset={0}
                        radialLabelsLinkDiagonalLength={16}
                        radialLabelsLinkHorizontalLength={36}
                        radialLabelsLinkStrokeWidth={1}
                        radialLabelsLinkColor={{ from: 'color' }}
                        slicesLabelsSkipAngle={10}
                        slicesLabelsTextColor="#333333"
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                        legends={[
                            {
                                anchor: 'left',
                                direction: 'column',
                                translateX: -120,
                                translateY: -80,
                                itemWidth: 100,
                                itemHeight: 22,
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
                    </ThemeProvider>
                </Box>
            </CardContent>
        </Card>
    );
};

EventTypes.propTypes = {
    className: PropTypes.string
};

export default EventTypes;
