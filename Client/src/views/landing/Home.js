import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Container,
  Card,
  Grid,
  makeStyles,
  IconButton,
  CardMedia
} from '@material-ui/core';
import FacebookIcon from 'src/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Page from 'src/components/Page';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  card: {
    backgroundColor: theme.palette.card.main,
    alignItems: 'center',
    color: theme.palette.primary.main,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  box: {
    paddingTop: theme.spacing(8)
  },
  program: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(6),
    color: theme.palette.program.main
  },
  icon: {
    marginTop: theme.spacing(3),
    width: 48,
    height: 48,
  },
  rowCard: {
    marginBottom: theme.spacing(3),
  },
  media: {
    height: 140,
  },
}));

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page
      className={classes.root}
      title="Home"
    >
      <Box>
        <img
          src="/static/images/volunteer.jpeg"
          style={{width: "100%"}}
          alt="Volunteer"
        />
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="center"
          className={classes.box}
        >
          <Container maxWidth="md">
            <Card className={classes.card} justifyContent="center">
              <CardContent>
                <Typography align="center" variant="h2" component="h2">
                  <b>OUR MISSION</b>
                </Typography>
                <Typography align="center" variant="h4" component="p">
                  <b>Empowering everyone in Hong Kong to volunteer</b>
                </Typography>
                <br/>
                <Typography align="center" variant="h2" component="h2">
                  <b>OUR VISION</b>
                </Typography>
                <Typography align="center" variant="h4" component="p">
                  <b>We envision a Hong Kong where our community serves together to meet all social needs</b>
                </Typography>
              </CardContent>
            </Card>

            <Box
              justifyContent="center"
              display="flex"
              flexDirection="row"
            >
              <IconButton className={classes.icon} color="secondary" size="medium">
                <FacebookIcon />
              </IconButton>
              <IconButton className={classes.icon} color="secondary" size="medium">
                <InstagramIcon />
              </IconButton>
              <IconButton className={classes.icon} color="secondary" size="medium">
                <LinkedInIcon />
              </IconButton>
            </Box>

            <Typography className={classes.program} align="center" variant="h2" component="h2">
              <b>PROGRAMS IN NEED OF VOLUNTEERS</b>
            </Typography>

            <Grid direction="row" container className={classes.root} spacing={2}>
                <Grid container justify="center" spacing={2}>
                  {[0, 1, 2, 3].map((value) => (
                    <Grid key={value} item xs={3}>
                      <Card className={classes.rowCard}>
                        <CardMedia
                          className={classes.media}
                          image="/static/images/vol1.jpeg"
                          title="Program"
                        />
                        <CardContent>
                          <Typography align="center" variant="h4" component="h2">
                            <b>Program {value + 1}</b>
                          </Typography>
                          <br/>
                          <Typography align="center" variant="body1" component="h2">
                            COVID-19 Relief: Distributing Care
                          </Typography>
                          <br/>
                          <Typography align="center" variant="body2" component="h2">
                            The program is made possible through...
                          </Typography>
                          <br/>
                          <Typography align="center" variant="body2" component="h2">
                            Tai Po New Territories
                          </Typography>
                          <br/>
                          <Typography align="center" variant="body2" component="h2">
                            10/10/2020 14:30
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
          </Container>
        </Box>
        <img
          src="/static/images/footer.png"
          style={{width: "100%"}}
          alt="Volunteer"
        />
      </Box>
    </Page>
  );
};

export default Home;
