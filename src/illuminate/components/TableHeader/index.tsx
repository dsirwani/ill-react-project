import React from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core';
import { useStyles } from './style';

import { IOrderBy } from '../../../types/ITableHeader';

interface EnhancedTableProps {
  headCells: any;
  orderBy: IOrderBy;
  sortBy: string;
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
}

export const EnhancedTableHead = (props: EnhancedTableProps) => {
  const { headCells, orderBy, sortBy, onRequestSort } = props;
  const classes = useStyles();

  const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell: any, id: number) => (
          <TableCell
            key={id}
            // align={'left'}
            padding="default"
            sortDirection={sortBy === headCell.column ? orderBy : false}
            className={headCell.column === 'account_name' ? classes.accountName : ''}
          >
            <TableSortLabel
              active={sortBy === headCell.column}
              direction={sortBy === headCell.column ? orderBy : 'asc'}
              onClick={createSortHandler(headCell.column)}
            >
              <div>
                {headCell.type}
                {headCell?.period_label ?<p className={classes.secondLineCenter}>{headCell?.period_label}</p> : null}
              </div>
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};