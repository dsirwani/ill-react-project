import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Roboto',
    fontSize: 16,
  },

  tableContainer: {
    width: '100%',
  },

  headerRow: {
    borderBottom: '1.4px solid #27272D',
    height: 50,
  },

  tableRow: {
    borderBottom: '1.4px solid #27272D',

    '&:hover': {
      // backgroundColor: '#182A37 !important',
    },
  },

  nameCell: {
    display: 'flex',
    alignItems: 'center',
  },

  smallAvatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: 5,
  },

  formControl: {
    pointerEvents: 'none',
    minWidth: 75,
    bottom: 8,
  },

  ddArowCls: {
    // color: '#36363C',
  },

  selectBox: {
    // backgroundColor: '#323237',
    '&:hover': {
      // backgroundColor: '#37373c !important',
    },
  },

  tableHeaderCellRoot: {
    fontSize: '14px',
    lineHeight: 1.14,
    letterSpacing: '0.47px',
    // color: 'rgba(255, 255, 255, 0.6)',
  },

  tableDataCell: {
    fontSize: '16px',
    lineHeight: 1.5,
    letterSpacing: '0.15px',
    // color: 'rgba(255, 255, 255, 0.87)',
  },

}));
