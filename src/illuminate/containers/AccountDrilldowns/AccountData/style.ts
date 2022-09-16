import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Roboto',
    fontSize: 16,
    display: 'flex',
    justifyContent: 'center',
  },

  paper: {
    marginTop: 50,
    width: '95%',
    // backgroundColor: theme.palette.common.black,
  },

  periodSection: {
    display: 'flex',
    marginTop: 10,
    marginBottom: 15,
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },

  selectLabel: {
    fontSize: 12,
    // color: 'rgba(255, 255, 255, 0.38)',
  },

  selectValue: {
    fontSize: 16,
    // color: 'rgba(255, 255, 255, 0.6)',
  },

  ddArowCls: {
    // color: '#606064',
  },

  // Account table
  tableContainerWrapper: {
    marginTop: '5%',
  },

  tableContainer: {
    // backgroundColor: '#27272D',
  },

  headerBlock: {
    fontSize: 24,
    fontWeight: 300,
    // color: 'rgba(255, 255, 255, 0.87)',
  },

  headerRow: {
    borderBottom: '1.4px solid #27272D',
    height: 40,
  },

  tableHeaderCellRoot: {
    fontSize: 14,
    lineHeight: 1.14,
    letterSpacing: 0.47,
    fontWeight: 'normal',
    // color: 'rgba(255, 255, 255, 0.6)',
  },

  tableDataCell: {
    fontSize: 14,
    lineHeight: 1.43,
    letterSpacing: 0.25,
    // color: 'rgba(255, 255, 255, 0.87)',
  },

  tableRow: {
    borderBottom: '1.4px solid #27272D',

    '&:hover': {
      // backgroundColor: '#182A37 !important',
    },
  },

}));
