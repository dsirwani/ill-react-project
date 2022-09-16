import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const CustomSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
      margin: '0 8px',
    },
    switchBase: {
      padding: 2,
      //color: theme.palette.common.black,
      '&$checked': {
        transform: 'translateX(12px)',
        color: '#bdbdbd',
        '& + $track': {
          opacity: 1,
          //backgroundColor: '#5850EC',
          //borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      //border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      //backgroundColor: '#5850EC',
    },
    checked: {},
  })
)(Switch);

export default CustomSwitch;
