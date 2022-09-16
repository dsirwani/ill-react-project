
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Button,
  Box,
  Card,
  Divider,
  CardHeader
} from '@material-ui/core';
import clsx from 'clsx';
import { accountDetailsActionCreator } from '../../../../../utils/configureActionCreators';
import NameMatchingDialogProps from './nameMatchingDialog';
import { useI18n } from '../../../../../hooks/useI18n';
import { useStyles } from '../style';

interface SourceRecordsProps {
  data: any,
}

const SourceRecords = (props: SourceRecordsProps) => {
  const classes = useStyles();
  const i18n = useI18n();
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState('');
  const dispatch = useDispatch();

  const SOURCE_RECORDS_HEADERS = [
    i18n._('Source'),
    i18n._('Company Name'),
    i18n._('Method'),
    i18n._('Confidence'),
    i18n._(''),
  ]

  const handleClose = () => {
    setOpen(false);
    dispatch(accountDetailsActionCreator.accMatchingSearchDataReset());
    dispatch(accountDetailsActionCreator.accountMatchingDataReset());
  };

  const handleOpen = (event: any, method: string) => {
    setOpen(true);
    setSource(method)
  };

  return (
    <React.Fragment>
      <Card
        className={clsx(classes.root)}
      >
        <CardHeader title={i18n._('Source Records')} />
        <Divider />
        <Box >
          <Table aria-label="a dense table">
            <TableHead>
              <TableRow className={classes.headerRow}>
                {SOURCE_RECORDS_HEADERS.map((header: any, i: number) => {
                  return <TableCell className={classes.tableHeaderCellRoot} key={i}>{header}</TableCell>
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((row: any, i: number) => (
                <TableRow key={i}>
                  <TableCell className={classes.tableDataCell} align="left">{row.source ? row.source : 'N/A'}</TableCell>
                  <TableCell className={clsx(classes.tableDataCell, classes.overflow)}
                    align="left" title={row.company_name ? row.company_name : 'N/A'}>
                    {row.company_name ? row.company_name : 'N/A'}
                  </TableCell>
                  <TableCell className={classes.tableDataCell} align="left">{row.method ? row.method : 'N/A'}</TableCell>
                  <TableCell className={classes.tableDataCell} align="left">{row.confidence ? row.confidence : 'N/A'}</TableCell>
                  <TableCell className={classes.tableDataCell} align="right">
                    <Button variant="contained" color="primary" size="small"
                      className={classes.themeButton} component="span"
                      style={{ fontSize: 10 }}
                      disabled={row.source === 'G2K'}
                      onClick={(e: any) => handleOpen(e, row.source)}>
                      {i18n._('Manual Override')}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
              </TableRow>
            </TableBody>
          </Table>
          <NameMatchingDialogProps
            open={open}
            source={source}
            handleDialogClose={handleClose}
          />
        </Box>
      </Card>
    </React.Fragment>
  )
};

export default SourceRecords;