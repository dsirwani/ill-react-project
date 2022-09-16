import { fade, makeStyles } from '@material-ui/core/styles';
import { isAbsolute } from 'path';

const drawerWidth = 80;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#121212',
  },
  //toolbar: theme.mixins.toolbar,
  toolbar: {
    minHeight: '40px',
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3, 0),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },

  themeButton: {
    background: '#0096dc',
    color: '#000000',
    margin: theme.spacing(1),

    '&:hover,&:focus': {
      backgroundColor: 'rgb(232, 236, 245)',
    },
  },

  homeImg: {
    marginTop: '50%',
    alignSelf: 'center',
  },

  clientImg: {
    marginTop: '10%',
    alignSelf: 'center',
  },

  customerImg: {
    marginTop: '50%',
    alignSelf: 'center',
  },

  avtarImg: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '5%',
  },

  uploadBtn: {
    textDecoration: 'none',
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    position: 'absolute',
    right: 0,
  },

  ddArowCls: {
    color: '#0096dc',
  },

  selectHover: {
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: '2px solid #0096fc',
    },
  },
}));
