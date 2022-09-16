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
    width: '42%',
    // textAlign: 'center',
    // backgroundColor: theme.palette.common.black,
  },

  featureRow: {
    height: 45,
  },

  featureCell: {
    whiteSpace: 'nowrap',
  },

  reportInputs: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

}));
