import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
  },

  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
    // minWidth: 110,
  },

  periodInput: {
    width: '60%',
  },

  yearInput: {
    width: '40%'
  },

  productHeader: {
    margin: theme.spacing(1),
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  ddArowCls: {
    // color: '#0096dc',
  },

  tableContainerWrapper: {
    height: 450,
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
    // backgroundColor: '#000',
  },

  tableRow: {
    // backgroundColor: '#27272D',

    '&:hover': {
      // backgroundColor: '#182A37 !important',
    },
  },

  spaceCell: {
    padding: '6px 0px 6px 0px',
    textAlign: 'center',
    // width: 510,
  },

  toggleIcon: {
    // color: 'white',
  },

  selectHover: {
    '&:hover:not(.Mui-disabled):before': {
      // borderBottom: '2px solid #0096fc',
    },
  },

  disableInput: {
    pointerEvents: 'none',
  },

  prodCheckBox: {
    // color: '#3D70B2',
  },

  graphRange: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  item: {
    padding: 0
  }

}));