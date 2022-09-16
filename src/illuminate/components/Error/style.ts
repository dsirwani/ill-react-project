import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  errorContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color:'red',
    fontSize:14,
    padding:5,
}
}));