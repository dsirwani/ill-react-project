import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: '#27272d',
    marginBottom: 15,
  },
  accountTitleBar: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 1,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  nav: {
    textAlign: 'left',
    color: '#5850EC',
  },
  titleContent: {
    fontSize: 26,
    fontWeight: 300,
    paddingLeft: 8,
  },
  tabTitle: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
  tabValue: {
    fontSize: 14,
    // fontWeight: 'bold',

    '&:hover,&:focus': {
      color: '#5850EC',
    },
  }
}));
