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
      justifyContent: 'space-between',
    },

    table: {
      width: '98%',
    },

    tableDocTitle: {
      width: '65%'
    },

    tCellHead: {
      border: '0px',
    },

    tCellBody: {
      borderRight: '1px solid white',
      borderBottom: '0px',
    },

    tCellRoot: {
      padding: theme.spacing(1, 2),
    },

    tBody: {
      border: '1px solid white',
    },

    divAlignment: {
      padding: theme.spacing(2, 1, 1, 1)
    }
  }),
);