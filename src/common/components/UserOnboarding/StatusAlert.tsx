import React, {FC} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import cognitoUtils from '../../../utils/cognitoUtils';

interface TopBarProps {
  errorMessage: string;
}

const StatusAlert: FC<TopBarProps> = ({
  errorMessage
}) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    cognitoUtils.signOutCognitoSession();
    localStorage.clear();
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        disableBackdropClick={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {errorMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )};

  export default StatusAlert;
