import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '../../../theme/index';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    viewBar: {
      display: 'flex',
      flexDirection: 'row-reverse',
      margin: theme.spacing(0, 3),
    },

    svgIcon: {
      // marginLeft: 1,
      position: 'relative',
      bottom: 38,
    },

    svgActive: {
      cursor: 'pointer',
      width: 24,
      height: 24,
      color: theme.palette.text.primary
    },

    svgNotActive: {
      cursor: 'pointer',
      width: 24,
      height: 24,
    },

    noAccountsDisplay: {
      margin: theme.spacing(1, 7),
    },
    breadCrumbs: {
      paddingLeft: '20px !important',
      paddingTop: '35px !important',
      paddingBottom: '0px !important'
    },

    accountListHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginLeft: 24,
      marginRight: 24,
      paddingTop: 24,
      paddingLeft: 24,
      paddingBottom: 24
    },

    backgroundForListView: {
      backgroundColor: theme.palette.background.default,
    }
  })
);
