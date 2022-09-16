import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

  notchedOutlineError: {
    borderColor: '#f44336 !important',
    '&:hover $notchedOutline': {
      borderColor: '#f44336 !important'
    }
  },

  helperText: {
    fontSize: 12,
  },

  dialogPaperWidth: {
    minWidth: 450
  },

  dialogTitleRoot: {
    margin: "0 173px 15px 0",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.5,
    letterSpacing: '0.15px',
  },

  dialogActionRoot: {
    justifyContent: 'space-between',
    padding: theme.spacing(2, 2)
  }
  
}));
