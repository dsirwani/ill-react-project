
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
  Card,
  CardContent,
  CardHeader,
  Divider,
  Button,
  Box
} from '@material-ui/core';
import { useI18n } from '../../../../../hooks/useI18n';
import { useStyles } from '../style';
import clsx from 'clsx';

interface EmailDomainTableProps {
  emailDomains: any,
}

const EmailDomainTable = (props: EmailDomainTableProps) => {
  const classes = useStyles();
  const i18n = useI18n();

  return (
    <React.Fragment>
      <Card
        className={clsx(classes.root)}
      >
        <CardHeader title={i18n._('Customer Access')} />
        <Divider />
        <CardContent>
          {props.emailDomains.length ? (
            <>
              <Typography align="left" paragraph className={classes.edCaption}>
                {i18n._("Allow customers with these email domains to subscribe to this account")}:
              </Typography>
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
            </>
          ) : <div className={classes.errorContainer}>
              <strong>{'No Data Available'}
              </strong>
            </div>}
        </CardContent>
        <TextField
          label={i18n._("Add email domain")}
          type="search" fullWidth
          inputProps={{ readOnly: true }}
          className={classes.addInput}
          style={{ marginLeft: '17px', maxWidth: '578px' }}
        />
        <Divider />
        <Box
          p={2}
          display="flex"
          justifyContent="flex-end"
        >
          <Button
            color="secondary"
            type="submit"
            variant="contained"
            disabled
          >
            Save Changes
          </Button>
        </Box>

      </Card>
    </React.Fragment>
  )
};

export default EmailDomainTable;