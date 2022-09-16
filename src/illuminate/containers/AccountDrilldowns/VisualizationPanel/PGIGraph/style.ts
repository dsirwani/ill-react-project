import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
  },
  
  graphSection: {
    display: 'grid',
    textAlign: 'center',
    marginTop: '18%',
    overflowX: 'scroll',
    scrollbarWidth: 'thin',
    scrollbarColor: '#27272D grey',

    '&::-webkit-scrollbar': {
      width: '6px'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#27272D',
      borderRadius: '10px',
    }
  },

  graphLabel: {
    marginTop: '10px',
    textAlign: 'center'
  }

}));