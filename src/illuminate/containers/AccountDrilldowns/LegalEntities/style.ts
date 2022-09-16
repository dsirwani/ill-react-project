import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Roboto',
    fontSize: 16,
    display: 'flex',
  },

  paper: {
    marginTop: 50,
    textAlign: 'center',
  },

  detailsSection: {
    fontSize: 14,
    textAlign: 'left',
    marginBottom: '8%',
  },

  buttonSection: {
    marginBottom: '8%',
  },

  addressSection: {
    marginBottom: '8%',
  },

  addressBlock: {
    textAlign: 'left',
  },

  addressTitleBlock: {
    fontSize: 14,
  },

  addressContentBlock: {
    fontSize: 14,
  },

  themeButton: {
    textTransform: 'capitalize',
    pointerEvents: 'none',
    '&:hover,&:focus': {
    },
  },

  //Ownership table
  toggleIcon: {
    cursor: 'pointer',
    padding: '6px 0px 6px 0px',
    textAlign: 'center',
    width: '3%',
  },

  listWrapper: {
    float: 'left'
  },
  prodName: {
    width: 47 - 1 + '%',
  },

  nested: {
  },

  listHeadRow: {
    height: 50,
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    textAlign: 'left',
  },

  highlight: {
    fontWeight: 'bold',
  },

  nameCell: {
    overflow: 'hidden',

  },

  statusCell: {

  },
  headingFont: {
    padding: '16px',
    float: 'left'
  },

}));