import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 80;

export const useStyles = makeStyles((theme) => ({
  footer: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    top: 'auto',
    bottom: 0,
    textAlign: 'center',
    color: '#4A4A4A',
    backgroundColor: '#000000',
  },
  footerContent: {
    fontSize: 10,
    fontWeight: 600,
  },
  footerLinks: {
    textDecoration: 'none',
    '&:hover': {
      borderBottom: '1px solid #0096dc',
    },
  }
}));