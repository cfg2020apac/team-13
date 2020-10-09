import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, volunteers, ...rest }) => {
  const classes = useStyles();
  const [selectedVolunteerIds, setSelectedVolunteerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedVolunteerIds;

    if (event.target.checked) {
      newSelectedVolunteerIds = volunteers.map((volunteer) => volunteer.id);
    } else {
      newSelectedVolunteerIds = [];
    }

    setSelectedVolunteerIds(newSelectedVolunteerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedVolunteerIds.indexOf(id);
    let newSelectedVolunteerIds = [];

    if (selectedIndex === -1) {
      newSelectedVolunteerIds = newSelectedVolunteerIds.concat(selectedVolunteerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedVolunteerIds = newSelectedVolunteerIds.concat(selectedVolunteerIds.slice(1));
    } else if (selectedIndex === selectedVolunteerIds.length - 1) {
      newSelectedVolunteerIds = newSelectedVolunteerIds.concat(selectedVolunteerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedVolunteerIds = newSelectedVolunteerIds.concat(
        selectedVolunteerIds.slice(0, selectedIndex),
        selectedVolunteerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedVolunteerIds(newSelectedVolunteerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedVolunteerIds.length === volunteers.length}
                    color="primary"
                    indeterminate={
                      selectedVolunteerIds.length > 0
                      && selectedVolunteerIds.length < volunteers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Age
                </TableCell>
                <TableCell>
                  Gender
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Mobile
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {volunteers.slice(0, limit).map((volunteer) => (
                <TableRow
                  hover
                  key={volunteer.id}
                  selected={selectedVolunteerIds.indexOf(volunteer._id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedVolunteerIds.indexOf(volunteer._id) !== -1}
                      onChange={(event) => handleSelectOne(event, volunteer._id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Avatar
                        className={classes.avatar}
                      >
                        {getInitials(volunteer.Name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {volunteer.Name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {volunteer.Age}
                  </TableCell>
                  <TableCell>
                    {volunteer.Gender}
                  </TableCell>
                  <TableCell>
                    {volunteer.Email}
                  </TableCell>
                  <TableCell>
                    {`${volunteer.Location}`}
                  </TableCell>
                  <TableCell>
                    {volunteer.Mobile}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={volunteers.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  volunteers: PropTypes.array.isRequired
};

export default Results;
