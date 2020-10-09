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
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const VolunteerRequestForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page
      className={classes.root}
      title="Volunteer Request"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              ngoName: '',
              programName: '',
              programObjective: '',
              email: '',
              phoneNumber: '',
              title: '',
              location: '',
              startDate: '',
              endDate: '',
              volunteerNumber: '',
              ageRequirement: '',
              policy: false
            }}
            validationSchema={
              Yup.object().shape({
                ngoName: Yup.string().max(255).required('NGO name is required'),
                programName: Yup.string().max(255).required('Program name is required'),
                programObjective: Yup.string().max(255).required('Program Objective is required'),
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                phoneNumber: Yup.string().max(255).required('Phone number is required'),
                title: Yup.string().max(255).required('Title is required'),
                location: Yup.string().max(255).required('Location is required'),
                startDate: Yup.string().max(255).required('Start Date is required'),
                endDate: Yup.string().max(255).required('End Date is required'),
                volunteerNumber: Yup.string().max(255).required('Number of volunteers needed is required'),
                ageRequirement: Yup.string().max(255).required('Age requirement is required'),
                policy: Yup.boolean().oneOf([true], 'This field must be checked')
              })
            }
            onSubmit={() => {
              navigate('/ngo', { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mt={3} mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Volunteer Service Request Form
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography
                    color="textSecondary"
                    variant="h3"
                  >
                    Program Overview
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.ngoName && errors.ngoName)}
                  fullWidth
                  helperText={touched.ngoName && errors.ngoName}
                  label="NGO"
                  margin="normal"
                  name="ngoName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.ngoName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.programName && errors.programName)}
                  fullWidth
                  helperText={touched.programName && errors.programName}
                  label="Program Name"
                  margin="normal"
                  name="programName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.programName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.programObjective && errors.programObjective)}
                  fullWidth
                  helperText={touched.programObjective && errors.programObjective}
                  label="Program Objective"
                  margin="normal"
                  name="programObjective"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  multiline
                  rows={5}
                  value={values.programObjective}
                  variant="outlined"
                />
                <Box mt={3}>
                  <Typography
                    color="textSecondary"
                    variant="h3"
                  >
                    Key Contact Person for Service
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                  fullWidth
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  label="Phone Number"
                  margin="normal"
                  name="phoneNumber"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="number"
                  value={values.phoneNumber}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.title && errors.title)}
                  fullWidth
                  helperText={touched.title && errors.title}
                  label="Title"
                  margin="normal"
                  name="title"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.title}
                  variant="outlined"
                />
                <Box mt={3}>
                  <Typography
                    color="textSecondary"
                    variant="h3"
                  >
                    Service Activity Details
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.location && errors.location)}
                  fullWidth
                  helperText={touched.location && errors.location}
                  label="Location of service activity"
                  margin="normal"
                  name="location"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.location}
                  variant="outlined"
                />
                <Box mt={3}>
                  <Typography
                    color="textSecondary"
                    variant="h4"
                  >
                    Start Date and Time
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.startDateTime && errors.startDateTime)}
                  fullWidth
                  helperText={touched.startDateTime && errors.startDateTime}
                  margin="normal"
                  name="startDateTime"
                  type="datetime-local"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.startDateTime}
                  variant="outlined"
                />
                <Box mt={3}>
                  <Typography
                    color="textSecondary"
                    variant="h4"
                  >
                    End Date and Time
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.endDateTime && errors.endDateTime)}
                  fullWidth
                  helperText={touched.endDateTime && errors.endDateTime}
                  margin="normal"
                  name="endDateTime"
                  type="datetime-local"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.endDateTime}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.volunteerNumber && errors.volunteerNumber)}
                  fullWidth
                  helperText={touched.volunteerNumber && errors.volunteerNumber}
                  label="Number of volunteers needed"
                  margin="normal"
                  name="volunteerNumber"
                  type="number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.volunteerNumber}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.ageRequirement && errors.ageRequirement)}
                  fullWidth
                  helperText={touched.ageRequirement && errors.ageRequirement}
                  label="Age Requirement"
                  margin="normal"
                  name="ageRequirement"
                  type="number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.ageRequirement}
                  variant="outlined"
                />
                <Box
                  alignItems="center"
                  display="flex"
                  ml={-1}
                >
                  <Checkbox
                    checked={values.policy}
                    name="policy"
                    onChange={handleChange}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    I have read the
                    {' '}
                    <Link
                      color="blue"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>
                    {errors.policy}
                  </FormHelperText>
                )}
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Want to make a skills-based volunteer request?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/ngo/skills"
                    variant="h6"
                    color="blue"
                  >
                    Click here!
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default VolunteerRequestForm;
