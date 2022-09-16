import React from 'react';
import clsx from 'clsx';
import { Snackbar } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import WarningIcon from '@material-ui/icons/Warning';
import useStyles from './style';
import { INotificationAlert } from '../../../types/INotificationAlert';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const NotificationAlert: React.FC<INotificationAlert> = (props) => {
  const {
    show,
    errorMsg,
    severity,
    autoHideDuration,
    anchorOrigin,
    onClose,
  } = props;
  const classes = useStyles();
  const Icon = variantIcon[severity];

  return (
    <div>
      <Snackbar
        className={clsx(classes[severity], classes.basicProperties)}
        aria-describedby="client-snackbar"
        open={show}
        role="alert"
        autoHideDuration={autoHideDuration || null}
        anchorOrigin={anchorOrigin || { vertical: 'top', horizontal: 'center' }}
        onClose={onClose}
        ContentProps={{
          classes: {
            root: clsx(classes.snackbarContentRoot, classes[severity]),
          },
        }}
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {errorMsg}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={onClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
      />
    </div>
  );
};

export default NotificationAlert;
