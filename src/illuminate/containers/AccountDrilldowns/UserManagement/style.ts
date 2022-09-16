import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '../../../../theme/index';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accountContainer: {
      maxWidth: '1200px',
      marginLeft: '24px',
    },

    avatar: {
      margin: '1% auto',
      display: 'flex',
      justifyContent: 'center',
    },

    avatarRoot: {
      width: 100,
      height: 100,
    },

    profileColorDefault: {
    },

    switchDiv: {
      margin: '5% 0 2%',
    },
    tabButton: {
      minWidth: '223px'
    },
    switchText: {
      fontFamily: 'Roboto',
      fontSize: '14px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.14,
      letterSpacing: '0.47px',
    },

    headerLabelDiv: {
      margin: '10% 0 5%',
    },

    headerLabel: {
      fontFamily: 'Roboto',
      fontSize: 24,
      fontWeight: 300,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1,
      letterSpacing: 0.18,
    },


    listItemIcon: {
      cursor: 'not-allowed',
    },

    disabledCheckbox: {
      '&$disabled': {
      },
    },

    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    paper: {
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(2, 4, 3),
      minHeight: 300,
      minWidth: 300,
      marginTop: 50,
      textAlign: 'center',
    },

    formControl: {
      paddingBottom: 20,
      minWidth: 135,
    },

    inputOverflow: {
      display: 'block',
      overflow: 'hidden !important',
      textOverflow: 'ellipsis !important',
    },

    fileInput: {
      width: 135,
      margin: theme.spacing(2),
    },

    inputDisplay: {
      display: 'none',
    },

    uploadButton: {
      margin: theme.spacing(1),

      '&:hover,&:focus': {
      },
    },

    cancelButton: {
      // color: '#3949ab',
      margin: theme.spacing(1),

      '&:hover,&:focus': {
        // color: '#3949ab',
      },
    },

    btnGroup: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    error: {
      color: '#ff0000',
    },

    errorBox: {
      borderColor: '#ff0000',
    }

  })
);
