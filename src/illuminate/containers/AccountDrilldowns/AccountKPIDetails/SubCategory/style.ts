import { makeStyles, Theme } from '@material-ui/core/styles';

export interface StyleProps {
  noOfColumns: number;
  level: number;
}
export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  tableRow: {
    // backgroundColor: '#27272D',
    [theme.breakpoints.up(1900)]: {
      height: 77,
    },

    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.type == 'dark' ? '#30343C' : '#F5F5F5',
    },
  },

  subTableRow: {
    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.type == 'dark' ? '#30343C' : '#F5F5F5',
    },
  },

  prodName: {
    width: ({ level }) => 47 - level + '%',
  },

  tableDataCell: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.15px',
    // color: 'rgba(255, 255, 255, 0.87)',
  },

  subCatCell: {
    fontWeight: 300,
    '&:hover': {
      fontWeight: 'normal',
    },
  },

  spaceCell: {
    padding: '6px 0px 6px 0px',
    textAlign: 'center',
    width: '3%',
  },

  cellSizeSmall: {
    padding: '1% 2% 1% 1%',
  },

  toggleIcon: {
    // color: 'white',
  },

  prodSubCatName: {
    width: '47%',
  },

  catValue: {
    width: ({ noOfColumns }) => 50 / noOfColumns + '%',
    fontSize: '14px !important',
    whiteSpace: 'nowrap',
  },
}));
