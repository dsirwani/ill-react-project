import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '../../../theme/index';

export const useStyles = makeStyles((theme: Theme) => ({
  filterContainer: {
    display: 'flex',
    width: '100%',
    marginBottom: '2%',
  },

  chipsHolder: {
    width: '90%',
    display: 'flex',
    justifyContent: 'flex-end'
  },

  btnContainedPrimary: {
    margin: theme.spacing(1, 0),
    height: 36,
    width: 136,
    color: theme.palette.text.secondary
  },

  addFilterIcon: {
    paddingRight: 5,
  },

  chipsRoot: {
    margin: '8px',
  },

  chipsHorizontal: {
    display: 'flex !important',
    flexWrap: 'wrap',
    justifyContent: 'flex-end'
  },

  filterLinks: {
    paddingLeft: '6%'
  },

  clearLink: {
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: 12,
  },

}));