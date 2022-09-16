import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    // fontFamily: 'Roboto',
    fontSize: 16,
    width: 'auto',
    minWidth: 220
  },

  //PreConfigure templates styles
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 110,
    float: 'right',
  },

  selectLabel: {
    fontSize: 12,
    // color: 'rgba(255, 255, 255, 0.38)',
  },

  selectValue: {
    fontSize: 16,
    // color: 'rgba(255, 255, 255, 0.6)',
  },

  ddArowCls: {
    // color: '#606064',
  },

  helperText: {
    // color: 'rgba(255, 255, 255, 0.6)',
  },

  //Template Manager styles
  templateManagerdialogBox: {
    // backgroundColor: '#2c2c31',
    minWidth: '50%',
    minHeight: '30%'
  },

  templateTitle: {
    fontSize: 24,
    fontWeight: 300,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1,
    letterSpacing: 0.18,

  },

  templateType: {
    fontSize: 16,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.5,
    letterSpacing: 0.15,
    // color: 'rgba(255, 255, 255, 0.87)',
    marginBottom: 20,
  },

  tableContainerWrapper: {
    // backgroundColor: '#26262C',
    // height: 150,
    height: 300,
    overflowY: 'scroll',
    scrollbarWidth: 'thin',
    scrollbarColor: '#B8B8B8 #F8F8F8',

    '&::-webkit-scrollbar': {
      width: '6px'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#B8B8B8	',
      borderRadius: '10px',
    }
  },

  tableContainer: {
    // backgroundColor: '#26262C',
  },

  tableHeaderCellRoot: {
    fontSize: 14,
    lineHeight: 1.14,
    letterSpacing: 0.47,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    // color: 'rgba(255, 255, 255, 0.6)',
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
    // borderBottom: 0,
    // borderBottom: '2.1px solid #2C2C31;',
  },

  headerRow: {
    // borderBottom: '1.4px solid #2C2C31',
    height: 40,
  },

  selectedItem: {
    fontSize: 12,
    // color: 'rgba(255, 255, 255, 0.6)',
  },

  selectBox: {
    fontSize: 12,
    // color: 'rgba(255, 255, 255, 0.6)',
    // backgroundColor: '#323237',
    '&:hover': {
      // backgroundColor: '#37373c !important',
    },
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


}));