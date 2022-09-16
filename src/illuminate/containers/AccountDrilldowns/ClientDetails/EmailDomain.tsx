
import React from 'react';
import {
  TextField,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { useI18n } from '../../../../hooks/useI18n';
import Error from '../../../components/Error';
import { useStyles } from './style';

interface EmailDomainTableProps {
  emailDomains: any,
}

const EmailDomainTable = (props: EmailDomainTableProps) => {
  const classes = useStyles();
  const i18n = useI18n();

  return (
    <React.Fragment>
      <TextField
        label={i18n._("Add email domain")}
        type="search" fullWidth
        inputProps={{ readOnly: true }}
        className={classes.addInput}
        InputLabelProps={{
          className: classes.addInputText
        }}
      />
      <Typography align="left" paragraph className={classes.edCaption}>
        {i18n._("Allow customers with these email domains to subscribe to this account")}:
      </Typography>
      {props.emailDomains.length ? (
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              {props.emailDomains.map((row: any, i: number) => (
                <TableRow key={i} className={classes.edTableRow}>
                  <TableCell className={classes.tableDataCell} scope="row">{row}</TableCell>
                  <TableCell scope="row" align="right">
                    <img src="/assets/Icon_assets/svg/delete_icon.svg" alt="delete" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : <Error errorMessage={'No Data Available'} />}
    </React.Fragment>
  )
};

export default EmailDomainTable;