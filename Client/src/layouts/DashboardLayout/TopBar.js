import React, {useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  makeStyles, Box, Hidden, IconButton, Badge, Button
} from '@material-ui/core';
import Logo from './Logo';
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon, Lock as LockIcon, Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon, UserPlus as UserPlusIcon,
  Users as UsersIcon
} from "react-feather";

const useStyles = makeStyles(({
  root: {},
  toolbar: {
    height: 64
  }
}));

const items = [
  {
    href: '/',
    title: 'Home'
  }
];

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const [notifications] = useState([]);

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box p={3} flexDirection="row">
          {items.map((item) => (
            <Button
              href={item.href}
              key={item.title}
              color="inherit"
            >
              {item.title}
            </Button>
          ))}
        </Box>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" href="/">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
