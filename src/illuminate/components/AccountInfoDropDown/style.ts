import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    textAlign: 'left',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  ddArowCls: {
    color: '#0096dc',
  },

  selectHover: {
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: '2px solid #0096fc',
    },
  },
}));