import ReactExport from "react-export-excel";
import PropTypes from "prop-types";
import React from "react";
import {  Button, makeStyles} from "@material-ui/core";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Export = ({data, columns, fileName, sheetName}) => {
  const classes = useStyles();

  return (
    <ExcelFile filename={fileName} element={<Button className={classes.exportButton}>Export</Button>}>
      <ExcelSheet data={data} name={sheetName}>
        {columns.map(col => {
          return  <ExcelColumn label={col.label} value={col.value}/>
        })}
      </ExcelSheet>
    </ExcelFile>
  );
};

Export.propTypes = {
  className: PropTypes.string
};

export default Export;
