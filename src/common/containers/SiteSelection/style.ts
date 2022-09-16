import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  siteSelectionBar: {
    width: '20%',
    // backgroundColor: '#121212'
  },

  formControl: {
    marginTop: 5,
  },

  selectLabel: {
    fontSize: 12,
    // color: 'rgba(255, 255, 255, 0.38)',
  },

  selectValue: {
    fontSize: 16,
    // color: 'rgba(255, 255, 255, 0.6)',
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: '2px solid #0096fc',
    },
  },

  ddArowCls: {
    // color: '#0096dc',
  },
}));