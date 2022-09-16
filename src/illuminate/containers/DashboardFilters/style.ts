import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Roboto',
    fontSize: 16,
  },

  dialogDivider: {
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'flex-end',
  },

  dividerColor: {
    backgroundColor: '#6F6F72',
    margin: '0px 10px 0px 10px',
  },

  filterCriteria: {},

  radio: {
    // color: '#0096dc',

    '&$checked': {
      // color: '#0096dc'
    }
  },

  checked: {

  },

  formControlOp: {
    width: '33%',
    padding: 7,
  },

  formControl: {
    margin: theme.spacing(1),
    // minWidth: 110,
  },

  selectLabel: {
    fontSize: 12,
    // color: 'rgba(255, 255, 255, 0.38)',
  },

  selectValue: {
    fontSize: 16,
    // color: 'rgba(255, 255, 255, 0.6)',
  },

  KPIUnit: {
    margin: 5,
  },

  ddArowCls: {
    color: '#606064',
  },

  filterAttribute: {},

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

  themeButton: {
    // color: '#000000',
    // backgroundColor: '#0096dc',

    '&:hover,&:focus': {
      // backgroundColor: '#0096dc',
    },
  },

  ListFilterdialogBox: {
    // backgroundColor: '#2c2c31',
    minWidth: '30%',
    minHeight: '30%'
  },

  tableContainerWrapper: {
    height: 150,
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

  tableContainer: {
    // backgroundColor: '#2C2C31',
  },

  tableCellElement: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.43,
    letterSpacing: 0.25,
    // color: 'rgba(255, 255, 255, 0.87)',
    cursor: 'pointer',
    borderBottom: 0,
  },

  selectedRow: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },

  FilterDeleteDialogBox: {
    // backgroundColor: '#2c2c31'
  },

  tagsContainer: {
    minWidth: '255px !important',
  }

}));