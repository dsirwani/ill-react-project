import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '../../../../../theme/index';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
  },

  tableContainerWrapper: {
    height: 285,
    overflowY: 'scroll',
    scrollbarWidth: 'thin',
    scrollbarColor: '#B8B8B8 #F8F8F8',

    '&::-webkit-scrollbar': {
      width: '6px'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#B8B8B8',
      borderRadius: '10px',
    }
  },

  tableRow: {
    borderBottom: '1.4px solid rgba(255, 255, 255, 0.3)',
  },

  barSection: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '10px',
  },

  progressBarPlan: {
    marginLeft: 8,
    appearance: 'none',
    border: 0,

    '&::-webkit-progress-bar': {
      backgroundColor: '#90a4ae !important',
      borderRadius: '0px',
    },

    '&::-webkit-progress-value': {
      height: 8,
      borderRadius: '0px',
      backgroundColor: '#90a4ae !important',
    },

    '&::-moz-progress-bar': {
      backgroundColor: '#90a4ae !important',
      borderRadius: '0px',
    },
  },

  progressBarTotalPositive: {
    marginLeft: 5.5,
    appearance: 'none',
    border: 0,
    
    '&::-webkit-progress-bar': {
      backgroundColor: theme.palette.background.default,
      borderRadius: '0px',
    },

    '&::-webkit-progress-value': {
      height: 8,
      borderRadius: '0px',
      backgroundColor: '#0ed069 !important',
    },

    '&::-moz-progress-bar': {
      backgroundColor: '#0ed069 !important',
      borderRadius: '0px',
    },
  },

  progressBarTotalNegative: {
    marginLeft: 5.5,
    appearance: 'none',
    border: 0,
    
    '&::-webkit-progress-bar': {
      backgroundColor: theme.palette.background.default,
      borderRadius: '0px',
    },

    '&::-webkit-progress-value': {
      height: 8,
      borderRadius: '0px',
      backgroundColor: '#eb1d36 !important',
    },

    '&::-moz-progress-bar': {
      backgroundColor: '#eb1d36 !important',
      borderRadius: '0px',
    },
  }
}));