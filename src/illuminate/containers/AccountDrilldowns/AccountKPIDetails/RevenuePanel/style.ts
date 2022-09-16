import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

export interface StyleProps {
  noOfColumns: number;
}
export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    fontFamily: 'Roboto',
    fontSize: 16,
  },

  kpiType: {
    lineHeight: '4px',
    textDecoration: 'underline',
    fontSize: 12,
  },

  mY: {
    fontSize: 14,
  },

  tableContainer: {
    width: '100%',
    // backgroundColor: '#000',
  },

  tableTitleRow: {
    [theme.breakpoints.up(1900)]: {
      height: 65,
    }
  },

  tableRow: {
    // backgroundColor: '#27272D',
    [theme.breakpoints.up(1900)]: {
      height: 65,
    },

    '&:hover': {
      // backgroundColor: '#182A37 !important',
    },
  },

  tableHeaderCellRoot: {
    fontSize: '14px',
    lineHeight: 1.14,
    letterSpacing: '0.47px',
    // color: 'rgba(255, 255, 255, 0.6)',
  },

  tableTitleCellRoot: {
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: 1.5,
    letterSpacing: 'normal',
    // color: 'rgba(255, 255, 255, 0.87)',
  },

  tableDataCell: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.15px',
    // color: 'rgba(255, 255, 255, 0.87)',
  },

  subTableRow: {
    '&:hover': {
      // backgroundColor: '#182A37 !important',
    },
  },

  subCatCell: {
    fontWeight: 300,
    '&:hover': {
      fontWeight: 'normal',
    },
  },

  prodName: {
    width: '47%',
  },

  prodSubCatName: {
    width: '47%',
  },

  catValue: {
    width: ({ noOfColumns }) => 50 / noOfColumns + '%',
    fontSize: '14px !important',
    whiteSpace: 'nowrap',
  },

  spaceCell: {
    padding: '6px 0px 6px 0px',
    textAlign: 'center',
    width: '3%',
  },

  toggleIcon: {
    // color: 'white',
  },
}));
