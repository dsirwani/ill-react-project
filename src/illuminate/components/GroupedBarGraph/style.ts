import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '../../../theme/index';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
  },
  chartContainer: {
    width: '100%',
    overflowX: 'scroll',
    scrollbarWidth: 'thin',
    scrollbarColor: '#B8B8B8 #F8F8F8',
  },

  scrollBar: {
    '&::-webkit-scrollbar': {
      width: '6px'
    },
    // '&::-webkit-scrollbar-track': {
    //   '-webkit-box-shadow': 'inset 0 0 5px grey'
    // },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#B8B8B8',
      borderRadius: '10px',
    }
  },
  
  legend: {
    fontSize: '60%',
    color: 'white'
  },

  toolTip: {
    position: 'absolute',
    yPadding: 20,
      xPadding: 20,
    display: 'none',
    width: 'auto',
    height: 'auto',
    borderWidth: 1,
    borderColor: theme.palette.divider,
    backgroundColor: theme.palette.background.dark,
    titleFontColor: theme.palette.text.primary,
    bodyFontColor: theme.palette.text.secondary,
    footerFontColor: theme.palette.text.secondary,
    border: '0 none',
    borderRadius: '8px 8px 8px 8px',
    // boxShadow: ' -3px 3px 15px #888888',
    // color: 'black',
    padding: '5px',
    // textAlign: 'center',
  },

  bar: {
    margin: '0 11px 0 0 !important',
    borderRadius: '7px !important'
  }
}));