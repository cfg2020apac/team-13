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

const useStyles = makeStyles(() => ({
    root: {}
}));

const EventTypes = ({ className, ...rest }) => {
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

    const data = [
        {
            "id": "Integrated",
            "label": "Integrated",
            "value": 90,
            "color": "hsl(41, 70%, 50%)"
        },
        {
            "id": "Hunger & homelessness",
            "label": "Hunger & homelessness",
            "value": 165,
            "color": "hsl(311, 70%, 50%)"
        },
        {
            "id": "Environmental education",
            "label": "Environmental education",
            "value": 524,
            "color": "hsl(253, 70%, 50%)"
        },
        {
            "id": "Children and youth",
            "label": "Children and youth",
            "value": 241,
            "color": "hsl(261, 70%, 50%)"
        },
        {
            "id": "Elderly",
            "label": "Elderly",
            "value": 458,
            "color": "hsl(72, 70%, 50%)"
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
                        margin={{ top: 40, right: 80, bottom: 80, left: 90 }}
                        innerRadius={0.5}
                        padAngle={0.7}
                        cornerRadius={3}
                        colors={{ scheme: 'pastel1' }}
                        borderWidth={2}
                        borderColor={{ from: 'color', modifiers: [ [ 'darker', '2' ] ] }}
                        radialLabelsSkipAngle={10}
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
                                translateX: -80,
                                translateY: -120,
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
