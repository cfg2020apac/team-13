import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
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

const RegisterView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page
      className={classes.root}
      title="Register"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container className={classes.container}>
          <ButtonBase
              href="/volunteer/register"
              className={classes.cardAction}
          >
            <Card className={classes.card}>
                <CardContent>
                  <AccountCircleIcon className={classes.icon}/>
                  <Typography className={classes.title} color="textSecondary">
                    Register as Volunteer
                  </Typography>
                </CardContent>
            </Card>
          </ButtonBase>
          <ButtonBase
              href="/ngo/register"
              className={classes.cardAction}
          >
            <Card className={classes.card}>
                <CardContent>
                  <BusinessIcon className={classes.icon}/>
                  <Typography className={classes.title} color="textSecondary">
                    Register as NGO
                  </Typography>
                </CardContent>
            </Card>
          </ButtonBase>
        </Container>
      </Box>
    </Page>
  );
};

export default RegisterView;
