import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '../../../theme/index';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: 'Roboto',
    fontSize: 16,
    display: 'flex',
    justifyContent: 'center',
  },

  tableContainerWrapper: {
    // height: 300,
    overflowY: 'scroll',
    scrollbarWidth: 'thin',
    scrollbarColor: '#B8B8B8 #F8F8F8',

    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#B8B8B8',
      borderRadius: '10px',
    },
  },

  tableContainer: {
    backgroundColor: theme.palette.background.dark,
    padding: theme.spacing(2, 2, 3),
  },

  selectHover: {
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: '2px solid #0096fc',
    },
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    boxShadow: theme.shadows[5],
    margin: 'auto',
    width: '25%',
    textAlign: 'center',
  },

  tableHeader: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.5,
    letterSpacing: 0.5,
    borderBottom: 0,
  },

  tableCellElement: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.43,
    letterSpacing: 0.25,
    cursor: 'pointer',
    borderBottom: 0,
  },

  headerRectangle: {
    height: 100,
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
  },

  blueOpalRectange: {
    width: 36,
    height: 32,
    margin: 'auto',
    borderColor: theme.palette.primary.main,
    border: '2px solid',
    borderTop: '5px solid',
    borderRadius: 4,
    marginTop: 34,
  },
}));
