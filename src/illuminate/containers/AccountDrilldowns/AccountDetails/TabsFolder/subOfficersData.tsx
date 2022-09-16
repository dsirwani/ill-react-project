import React from 'react';
import {
  TableCell,
  TableRow,
  Collapse,
} from '@material-ui/core';
import { useStyles } from '../style';

interface SubOfficersDataProps {
  data: any;
  toggle: any;
}

const SubOfficersData: React.FC<SubOfficersDataProps> = ({
  data,
  toggle,
}) => {
  const classes = useStyles();

  return (
    <TableRow>
      {data.length > 0 &&
        <TableCell style={{ padding: 0 }} colSpan={4}>
          <Collapse in={toggle} timeout="auto" unmountOnExit>
            {data.length && data.map((data: any, i: number) => (
              <TableRow key={i} style={{ display: 'inline-table', width: '100%' }}>
                <TableCell style={{ width: '6%' }} />
                <TableCell style={{ width: '25%' }} className={classes.tableDataCell} align="left" />
                <TableCell align="left" style={{ width: '45%' }} className={classes.tableDataCell} >{data.title}</TableCell>
                <TableCell align="left" style={{ width: '24%' }} className={classes.tableDataCell} >{data.tenure}</TableCell>
              </TableRow>
            ))}
          </Collapse>
        </TableCell>
      }
    </TableRow>
  );
};

export default SubOfficersData;