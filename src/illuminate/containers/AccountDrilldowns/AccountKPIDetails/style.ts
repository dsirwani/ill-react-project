import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // padding: 25,
    // height: 500,
    overflowY: 'scroll',
    scrollbarWidth: 'thin',
    scrollbarColor: '#B8B8B8 #F8F8F8',

    '&::-webkit-scrollbar': {
      width: '6px'
    },
    '&::-webkit-scrollbar-thumb': {
      // backgroundColor: '#B8B8B8',
      borderRadius: '10px',
    }
  },
}));
