import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 0,
    },
    paper: {
      marginTop: 30,
      paddingBottom: 5,
      backgroundColor: theme.palette.common.white,
    },
    content: {
      color: theme.palette.common.black,
      textAlign: 'center',
    },
    reLoginLink: {
      color: '#0096dc',
      textDecoration: 'none',
    },
  })
);
