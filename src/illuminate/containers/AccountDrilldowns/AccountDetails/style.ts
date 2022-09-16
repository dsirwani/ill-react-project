import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Roboto',
    fontSize: 16,
    maxWidth: '1200px'

  },

  paper: {
    marginTop: 50,
    textAlign: 'center',
  },
  tabButton: {
    minWidth: '223px'
  },

  // Account icon section
  iconSection: {
    marginBottom: '8%',
  },

  smallAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    border: '7px solid #FFF',
  },

  largeAvatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    border: '10px solid #FFF',
  },

  // Account name section
  accountSection: {
    marginBottom: '4%',
  },

  textField: {
    margin: '1px solid rgba(255, 255, 255, 0.38)',
  },

  notchedOutline: {
    '&:hover $notchedOutline': {
    }
  },

  helperText: {
    fontSize: 12,
    '&:hover': {
    }
  },
  errorContainer: {
    display: 'flex',
    color: 'red',
    fontSize: 14,
    padding: 5,
  },


  descriptionSection: {
    height: '80px !important',
    margin: '10px !important',
  },

  //Users table section
  tableContainerWrapper: {
    height: 110,
    overflowY: 'scroll',
    scrollbarWidth: 'thin',
    scrollbarColor: '#B8B8B8 #F8F8F8',

    '&::-webkit-scrollbar': {
      width: '6px'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#B8B8B8',
      borderRadius: '10px',
    }
  },

  userTableRow: {
    // height: 80,
  },

  addInput: {
    marginBottom: 60,
  },

  addInputText: {
    fontSize: 16,
  },

  nameCell: {
    // fontSize: 14,
    display: 'flex',
    alignItems: 'center',
  },

  userAvatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: 7,
  },

  userName: {
  },

  useremail: {
  },

  formControl: {
    pointerEvents: 'none',
    bottom: 8,
  },

  ddArowCls: {
    color: '#36363C',
  },

  selectBox: {
    fontSize: 12,
    backgroundColor: '#323237',
    '&:hover': {
    },
  },

  selectedItem: {
    fontSize: 12,
  },

  //Customer access section css
  caSection: {
    marginTop: '8%',
    marginBottom: '7%',
  },

  switchControl: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    cursor: 'not-allowed',
  },

  //Email Domain section css
  edCaption: {
    fontSize: 14,
    lineHeight: 1.14,
    letterSpacing: 0.47,
    fontWeight: 'normal',
  },

  edTableRow: {
    height: 46,

    '&:nth-of-type(odd)': {
      backgroundColor: '#37373C',
    },

    '&:nth-of-type(even)': {
      backgroundColor: '#4F4F53',
    }
  },

  //Source Record section css
  srSection: {
    marginTop: '10%',
    marginBottom: '7%',
  },

  srActionSection: {
    display: 'flex',
    width: '75%',
    justifyContent: 'space-between',
  },

  headerBlock: {
    fontSize: 24,
    fontWeight: 300,
  },

  headerRow: {
    borderBottom: '1.4px solid #27272D',
    height: 40,
  },

  tableHeaderCellRoot: {
    fontSize: 14,
    lineHeight: 1.14,
    letterSpacing: 0.47,
    fontWeight: 500,
  },

  tableDataCell: {
    fontSize: 14,
    lineHeight: 1.43,
    letterSpacing: 0.25,
    // whiteSpace: 'break-spaces',
    // wordBreak: 'break-all',
  },

  boldCell: {
    fontWeight: 500,
  },

  overflow: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  themeButton: {
    width: 'max-content',

    '&:hover,&:focus': {
    },
  },

  //Matching dialog
  dialogBox: {
  },

  dialogContainer: {
    minHeight: 290,
  },

  dialogTitle: {
    fontSize: 24,
    fontWeight: 300,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1,
    letterSpacing: 0.18,
    margin: 20,
  },

  headerContainer: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.14,
    letterSpacing: 0.47,
  },

  dataContainer: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.43,
    letterSpacing: 0.25,
  },

  dataValue: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },

  searchContainer: {
    marginTop: '6%',
    marginBottom: '2%',
  },

  divider: {
    marginBottom: 10,
    marginTop: 8,
  },

  actionsContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  outlineButton: {
    borderColor: '#6F6F72',

    '&:hover,&:focus': {
    },
  },

  searchRow: {
    cursor: 'pointer',
  },

  searchCell: {
    borderBottom: 0,
    paddingLeft: 4,
  },

  selectedRow: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },

}));
