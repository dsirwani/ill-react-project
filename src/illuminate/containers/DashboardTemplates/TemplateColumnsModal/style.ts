import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: 'Roboto',
    fontSize: 16,
  },

  dialogBox: {
    // backgroundColor: '#2c2c31',
    minWidth: '50%',
    minHeight: '50%'
  },

  outlineButton: {
    // color: '#0096dc',
    // borderColor: '#6F6F72',

    '&:hover,&:focus': {
      // borderColor: '#6F6F72',
    },
  },

  tableContainer: {
    // backgroundColor: '#2C2C31',
  },

  formGrpRoot: {
    justifyContent: 'space-between'
  },

  dividerCss: {
    marginTop: '32.5px'
  },

  h5FontStyle: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 300,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1,
    letterSpacing: '0.18px',
    // color: 'rgba(255, 255, 255, 0.87)'
  },

  spaceBetRadios: {
    margin: theme.spacing(0, 2),
  } 


}));