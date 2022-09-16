import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Roboto',
    fontSize: 16,
    display: 'flex',
    justifyContent: 'center',
  },

  paper: {
    marginTop: 50,
    width: '42%',
    textAlign: 'center',
    // backgroundColor: theme.palette.common.black,
  },

  //Client icon section
  iconSection: {
    marginBottom: '8%',
  },

  smallAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    border: '7px solid ',
  },

  largeAvatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    border: '10px solid ',
  },

  // Client name section
  clientSection: {
    marginBottom: '4%',
  },

  clientContent: {
    textAlign: 'left',
    fontSize: 14,
    // color: 'rgba(255, 255, 255, 0.6)',
  },

  textField: {
    margin: '1px solid ',
  },

  notchedOutline: {
    // borderColor: 'rgba(255, 255, 255, 0.38)',

    '&:hover $notchedOutline': {
      // borderColor: 'rgba(255, 255, 255, 0.38)'
    }
  },

  helperText: {
    fontSize: 12,
    // color: 'rgba(255, 255, 255, 0.38)',

    '&:hover': {
      // color: 'rgba(255, 255, 255, 0.38)',
    }
  },

  //Customer access section css
  caSection: {
    marginTop: '8%',
    marginBottom: '7%',
  },

  switchControl: {
    display: 'flex',
    alignItems: 'baseline',
    // color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
    cursor: 'not-allowed',
  },

  //Email Domain section css
  addInput: {
    pointerEvents: 'none',
    marginBottom: 15,
    borderBottom: '1px solid ',
  },

  addInputText: {
    fontSize: 16,
    // color: 'rgba(255, 255, 255, 0.6)',
  },

  edCaption: {
    fontSize: 14,
    lineHeight: 1.14,
    letterSpacing: 0.47,
    fontWeight: 'normal',
    // color: 'rgba(255, 255, 255, 0.6)',
  },

  edTableRow: {
    height: 46,

    '&:nth-of-type(odd)': {
      // backgroundColor: '#37373C',
    },

    '&:nth-of-type(even)': {
      // backgroundColor: '#4F4F53',
    }
  },

  headerBlock: {
    fontSize: 24,
    fontWeight: 300,
    // color: 'rgba(255, 255, 255, 0.87)',
  },

  headerRow: {
    borderBottom: '1.4px solid ',
    height: 40,
  },

  tableDataCell: {
    fontSize: 14,
    lineHeight: 1.43,
    letterSpacing: 0.25,
    // color: 'rgba(255, 255, 255, 0.87)',
  },

  parentData: {
    display: 'flex'
  },

  parentName: {
    display: 'flex',
    paddingLeft: '20px',
    alignItems: 'center',
  }

}));
