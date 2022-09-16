import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Theme } from '../../../theme/index';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accountName: {
      position: 'sticky',
      left: 0,
      zIndex: 9
    },

    secondLineCenter: {
      fontSize: '12px',
      color: theme.palette.text.secondary
    }
  })
);
