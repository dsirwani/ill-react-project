import React from 'react';
import {
  Collapse,
  Typography,
  TableRow,
  Table,
  TableCell,
  TableBody,
  IconButton,
  TableContainer,
  Paper,
  TableHead,
  Divider
} from '@material-ui/core';
import clsx from 'clsx';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useI18n } from '../../../../hooks/useI18n';
import { useStyles } from './style';

interface OwnershipHierarchyProps {
  data: any,
  companyName: string,
}

const OwnershipHierarchy = (props: OwnershipHierarchyProps) => {
  const classes = useStyles();
  const i18n = useI18n();

  const [state, setState] = React.useState({});

  const handleClick = (item: any) => {
    let newstate = { ...state, [item]: !state[item] };
    setState(newstate);
  };

  function renderTree(records: any) {
    return records.length && records.map((record: any) => (
      <React.Fragment>
        <Table>
          <TableRow
            className={classes.nested}>
            <TableCell
              className={classes.toggleIcon}
              key={record.id}
            >{record.nodes && record.nodes.length > 0 ? (
              <IconButton
                // className={classes.toggleIcon}
                onClick={() => handleClick(record.id)}
                size="small"
              >
                {state[record.id] ? (
                  <KeyboardArrowUpIcon />
                ) : (
                    <KeyboardArrowDownIcon />
                  )}
              </IconButton>
            ) : (
                ''
              )}
            </TableCell>

            <TableCell>
              <Typography variant='h6' className={clsx(classes.nameCell, props.companyName == record.company_name ? classes.highlight : '')}>{record.company_name}</Typography>
            </TableCell>
            <TableCell align="right"><Typography variant='h6' className={clsx(classes.statusCell, props.companyName == record.company_name ? classes.highlight : '')}>{record.status}</Typography></TableCell>
          </TableRow>
        </Table>
        <Collapse in={state[record.id]} timeout="auto" unmountOnExit>
          <Table>
            <TableBody>
              {record.nodes && record.nodes.length > 0 && renderTree(record.nodes)}
            </TableBody>
          </Table>
        </Collapse>
      </React.Fragment >
    ));
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.listWrapper}>
        <TableHead>
          <TableRow>
            <Typography variant='h5' className={classes.headingFont}>
              {i18n._('Ownership Hierarchy')}
            </Typography>
          </TableRow>
        </TableHead>
        <Divider />
        <TableBody>
          {Array.isArray(props.data) ? renderTree(props.data) : (
            <TableRow
              key={`no-accounts`}
            >
              <TableCell>{props.data}</TableCell>
            </TableRow>)}
        </TableBody>

      </Table>
    </TableContainer>

  )
};

export default OwnershipHierarchy;