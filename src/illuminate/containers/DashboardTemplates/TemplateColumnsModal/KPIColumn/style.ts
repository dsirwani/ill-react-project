import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  dividerCss: {
    margin: '0, 5px'
  },

  titleRow: {
    margin: '0 0 2px',
    padding: '4px',
    // backgroundColor: '#26262c',
    display: 'flex',
    justifyContent: 'space-between',
  },

  titleFont: {
    fontFamily: 'Roboto',
    fontSize: '10px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.6',
    letterSpacing: '0.33px',
    // color: 'rgba(255, 255, 255, 0.38)'
  },

  formCtrlRoot: {
    width: '90%',
    margin: '1px 11px 11px 10px',
  },

  addButtonGrid: {
    position: 'relative',
    minWidth: '16%'
  },

  centerAddBtn: {
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },

  h5FontStyle: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 300,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1,
    letterSpacing: '0.18px',
    // color: 'rgba(255, 255, 255, 0.87)',
    margin: '1px 11px 11px 10px',
    textAlign: 'right'
  },

  containerWidth: {
    minWidth: '100%',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    overflowY: 'hidden',
  },

  gridMinWidth: {
    minWidth: '16%',
  },

  emptyGrid: {
    height: '66px'
  },

  closeIcon: {
    width: '16px',
    height: '16px',
  }

}));