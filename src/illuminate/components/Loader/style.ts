import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      /*  position: 'fixed',
      zIndex: 9999,
      overflow: 'visible',
      margin: 'auto',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,0.2)', */
    },

    loaderRoot: {
      margin: '30px 0 10px',
    },
  })
);
