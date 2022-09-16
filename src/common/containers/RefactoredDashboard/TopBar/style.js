import { makeStyles } from '@material-ui/core/styles';
import { THEMES } from '../../../../constants';

export const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    ...theme.name === THEMES.LIGHT ? {
      boxShadow: 'none',
      backgroundColor: theme.palette.primary.main
    } : {},
    ...theme.name === THEMES.ONE_DARK ? {
      backgroundColor: theme.palette.background.default
    } : {}
  },
  toolbar: {
    minHeight: 64,
    paddingLeft:'0px !important'
  },
  homeImg: {
    alignSelf: 'center',
    marginTop: '4px',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1)
  },
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1)
  },
  popover: {
    width: 200
  },
  drawer: {
    width: 500,
    maxWidth: '100%'
  },
  badge: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginTop: 10,
    marginRight: 5
  },
  popoverForSettings: {
    width: 320,
    padding: theme.spacing(2)
  },
  listItem: {
    height: 'auto !important'
  },
  list: {
    width: 250,
  },
  svgIcon: {
    marginTop: '10px',
    flex: '0 !important',
    marginRight: '50px'
  }
}));