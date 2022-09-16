import React from "react";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './style';

interface ErrorProps {
  message: string;
  type: string;
}

const ToastNotifier: React.FC<ErrorProps> = (props) => {
  const [open, setOpen] = React.useState(true);
	const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const getSeverityColor = (severity: string) => {
    if(severity === 'success') {
      return '#4CAF50';
    } else if(severity === 'error') {
      return '#F44336'
    } else if(severity === 'info') {
      return '#2196F3'
    } else if(severity === 'warning') {
      return '#FF9800'
    }
    return 
  }

  return (
    <div>
      <Snackbar
        classes={{
          root: classes.root,
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
      >
        <SnackbarContent
          style={{
            backgroundColor: `${getSeverityColor(props.type)}`,
            color: '#FFFFFF'
          }}
          message={<span id="client-snackbar">{props.message}</span>}
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </Snackbar>
    </div>
  );
}

export default ToastNotifier;