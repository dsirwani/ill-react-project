import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

    },

    paper: {
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      backgroundColor: '#373737 !important',
      width: '40%',
    },

    btnAlign: {
      margin: '20px 5px 5px',
    },

    muiGrpRow: {
      justifyContent: 'flex-end',
    },
  }),
);