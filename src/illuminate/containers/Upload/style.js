import { fade, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    minHeight: 300,
    minWidth: 300,
    marginTop: 50,
    textAlign: 'center',
    // backgroundColor: theme.palette.common.white,
  },
  nav: {
    textAlign: 'left',
    // color: '#0096dc',
  },
  inputSelect: {
    // color: theme.palette.common.black,
  },
  formControl: {
    // color: theme.palette.common.black,
    paddingBottom: 20,
    minWidth: 135,
  },
  progressLoader: {
    color: '#0096dc',
  },
  fileInput: {
    width: 135,
  },
  inputOverflow: {
    display: 'block',
    overflow: 'hidden !important',
    whiteSpace: 'nowrap !important',
    textOverflow: 'ellipsis !important',
  },
  fileSelect: {
    // color: theme.palette.common.white,
  },
  inputDisplay: {
    display: 'none',
    // color: theme.palette.common.black,
  },
  themeButton: {
    color: '#000000',
    // backgroundColor: '#0096dc',

    '&:hover,&:focus': {
      // backgroundColor: '#0096dc',
    },
  },
}));