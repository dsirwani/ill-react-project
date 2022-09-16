import { makeStyles } from '@material-ui/core/styles';

export interface StyleProps {
  fullWidth: boolean;
}

export const useStyles = makeStyles<StyleProps>((props) => ({
  messageBar: {
    width: !props.fullWidth ? '100%' : '80%',
    position: 'relative',
  },

  expandIcon: {
    color: '#0096dc',
  },
  greetContent: {
    fontSize: 26,
    fontWeight: 300,
  },
}));
