import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Box,
  Card,
  Divider,
  CardHeader
} from '@material-ui/core';
import clsx from 'clsx';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';
import { useI18n } from '../../../../../hooks/useI18n';
import SubOfficersData from './subOfficersData';
import Error from '../../../../components/Error';
import { useStyles } from '../style';

interface OfficersDataProps {
  data: any,
}

const OfficersData = (props: OfficersDataProps) => {
  const classes = useStyles();
  const i18n = useI18n();
  const [state, setState] = useState({});

  const handleClick = (item: any) => {
    let newstate = { ...state, [item]: !state[item] };
    setState(newstate);
  };

  return (
    <React.Fragment>
      <Card
        className={clsx(classes.root)}
      >
        <CardHeader title={i18n._('Officers & Executives')} />
        <Divider />
        <Box>
          {Array.isArray(props.data) ? <Table aria-label="a dense table">
            <TableBody>
              {props.data.map((row: any, i: any) => (
                <React.Fragment>
                  <TableRow key={i}>
                    <TableCell style={{ width: '5%' }}>
                      {row?.title_arr?.length > 0 && <IconButton aria-label="expand row" size="small" onClick={() => handleClick(i)}>
                        {state[i] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                      </IconButton>}
                    </TableCell>
                    <TableCell style={{ width: '25%' }} className={clsx(classes.tableDataCell, classes.boldCell)} align="left">{row.name ? row.name : 'N/A'}</TableCell>
                    <TableCell className={clsx(classes.tableDataCell, classes.boldCell)} style={{ width: '45%' }} align="left">{row.title ? row.title : 'N/A'}</TableCell>
                    <TableCell className={clsx(classes.tableDataCell, classes.boldCell)} style={{ width: '25%' }} align="left">{row.tenure ? row.tenure : 'N/A'}</TableCell>
                  </TableRow>
                  <SubOfficersData data={row?.title_arr} toggle={state[i]} />
                </React.Fragment>
              ))}
            </TableBody>
          </Table> : <Error errorMessage={props.data} />}
        </Box>
      </Card>
    </React.Fragment>
  )
};

export default OfficersData;