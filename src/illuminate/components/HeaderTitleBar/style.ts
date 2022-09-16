import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    // backgroundColor: '#27272d',
  },
  headerTitleBar: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 1,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  nav: {
    textAlign: 'left',
    // color: '#0096dc',
  },
  titleContent: {
    fontSize: 26,
    fontWeight: 300,
    paddingLeft: 8,
  },
}));
