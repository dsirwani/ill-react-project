import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    header: {
      fontSize: '220px'
    },

    subHeader: {
      fontSize: '55px'
    },

  })
);
