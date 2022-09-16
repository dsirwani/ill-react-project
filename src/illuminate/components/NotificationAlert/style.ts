import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { amber, green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    basicProperties: {
      width: '85%',
      borderRadius: '8px',
    },

    success: {
      backgroundColor: green[600],
    },

    error: {
      backgroundColor: theme.palette.error.dark,
    },

    info: {
      backgroundColor: theme.palette.primary.main,
    },

    warning: {
      backgroundColor: amber[700],
    },

    icon: {
      fontSize: 20,
    },

    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1),
    },

    message: {
      display: 'flex',
      alignItems: 'center',
    },

    snackbarContentRoot: {
      width: '100%',
    },
  })
);

export default useStyles;
