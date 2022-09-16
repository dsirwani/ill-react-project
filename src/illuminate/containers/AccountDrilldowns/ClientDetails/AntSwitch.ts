import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 20,
    height: 10,
    padding: 0,
    display: 'flex',
    marginRight: 7,
  },
  switchBase: {
    padding: 2,
    color: theme.palette.common.black,

    '&$checked': {
      transform: 'translateX(10px)',
      color: theme.palette.common.black,
      '& + $track': {
        opacity: 1,
        backgroundColor: '#5850EC',
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 6,
    height: 6,
    boxShadow: 'none',
  },
  track: {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: '#A4A4A6',
  },
  checked: {},
}))(Switch);

export default AntSwitch;