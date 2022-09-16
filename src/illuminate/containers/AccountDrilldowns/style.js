import { createStyles, lighten, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20
  },
  accountTitleBar: {
    display: 'flex',
    alignItems: 'center',
    // backgroundColor: '#26262C',
    marginTop: 4,
    paddingLeft: 50,
  },
  titleContent: {
  //   fontSize: 26,
  //   fontWeight: 300,
    paddingLeft: 8,
  },
  paper: {
    width: '100%',
    // background: '#000',
  },
  breadcrumbs:{
    paddingBottom:'35px'
  },
  headerBootomBorder: {
    // borderBottom: '1px solid #272727',
  },

  titleBorder: {
    // borderBottom: '1px solid #272727',
  },
}));
