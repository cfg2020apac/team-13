import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
  {
    id: uuid(),
    name: 'Dropbox',
    imageUrl: '/static/images/events/product_1.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Medium Corporation',
    imageUrl: '/static/images/events/product_2.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Slack',
    imageUrl: '/static/images/events/product_3.png',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'Lyft',
    imageUrl: '/static/images/events/product_4.png',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'GitHub',
    imageUrl: '/static/images/events/product_5.png',
    updatedAt: moment().subtract(9, 'hours')
  }
];

const useStyles = makeStyles(({
  root: {
    height: '100%'
  },
  image: {
    height: 48,
    width: 48
  }
}));

const LatestProducts = ({ className, ...rest }) => {
  const classes = useStyles();
  const [events] = useState(data);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        subtitle={`${events.length} in total`}
        title="Latest Products"
      />
      <Divider />
      <List>
        {events.map((product, i) => (
          <ListItem
            divider={i < events.length - 1}
            key={product.id}
          >
            <ListItemAvatar>
              <img
                alt="Product"
                className={classes.image}
                src={product.imageUrl}
              />
            </ListItemAvatar>
            <ListItemText
              primary={product.name}
              secondary={`Updated ${product.updatedAt.fromNow()}`}
            />
            <IconButton
              edge="end"
              size="small"
            >
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

LatestProducts.propTypes = {
  className: PropTypes.string
};

export default LatestProducts;
