import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: 'Roboto',
    fontSize: 16,
  },

  kpiType: {
    lineHeight: '4px',
    textDecoration: 'underline',
    fontSize: 14,
  },

  mY: {
    fontSize: 8,
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

  spaceCell: {
    padding: '6px 0px 6px 0px',
    textAlign: 'center',
    width: '3%',
  },

  toggleIcon: {
    // color: 'white',
  },

  prodName: {
    width: '47%',
  },

  catValue: {
    width: '12.5%',
    fontSize: '14px !important',
    whiteSpace:'nowrap'
  },

  tableTitleCellRoot: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: 1.5,
    // color: 'rgba(255, 255, 255, 0.87)',
  },

  tableHeaderCellRoot: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    lineHeight: 1.14,
    letterSpacing: '0.47px',
    // color: 'rgba(255, 255, 255, 0.6)',
  },

  tableDataCell: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.15px',
    // color: 'rgba(255, 255, 255, 0.87)',
  },
}));
