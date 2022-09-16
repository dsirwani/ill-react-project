import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      position: 'fixed',
      zIndex: 9999,
      overflow: 'visible',
      margin: 'auto',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
    },

    loaderRoot: {
      left: '50%',
      top: '50%',
      position: 'fixed',
    },
  })
);
