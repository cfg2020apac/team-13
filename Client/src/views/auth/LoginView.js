import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles,
  Card,
  CardContent,
  ButtonBase
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BusinessIcon from '@material-ui/icons/Business';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    width: 400,
    height: 300,
    marginRight: '50px',
    textAlign: 'center',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
  title: {
    fontSize: 30,
    marginTop: '20px'
  },
  icon: {
    fontSize: 70,
    marginTop: '50px'
  }
}));

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container className={classes.container}>
          <ButtonBase
              href="/volunteer/login"
              className={classes.cardAction}
          >
            <Card className={classes.card}>
                <CardContent>
                  <AccountCircleIcon className={classes.icon}/>
                  <Typography className={classes.title} color="textSecondary">
                    Login as Volunteer
                  </Typography>
                </CardContent>
            </Card>
          </ButtonBase>
          <ButtonBase
              href="/ngo/login"
              className={classes.cardAction}
          >
            <Card className={classes.card}>
                <CardContent>
                  <BusinessIcon className={classes.icon}/>
                  <Typography className={classes.title} color="textSecondary">
                    Login as NGO
                  </Typography>
                </CardContent>
            </Card>
          </ButtonBase>
          <ButtonBase
              href="/admin/login"
              className={classes.cardAction}
          >
            <Card className={classes.card}>
                <CardContent>
                  <SupervisedUserCircleIcon className={classes.icon}/>
                  <Typography className={classes.title} color="textSecondary">
                    Login as Admin
                  </Typography>
                </CardContent>
            </Card>
          </ButtonBase>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
