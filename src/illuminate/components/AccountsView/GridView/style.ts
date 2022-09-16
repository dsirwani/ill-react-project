import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridContent: {
      display: 'flex',
      flexFlow: 'wrap',
      marginLeft: '2%',
    },
  })
);
