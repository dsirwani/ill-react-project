import React, { Dispatch, SetStateAction } from 'react';
import { 
  Modal, 
  Backdrop, 
  Fade, 
  FormGroup,
  FormControlLabel,
  Checkbox,
  Link,
  Button
} from '@material-ui/core/';
import CheckboxCheckedIcon from '../../../illuminate/components/SVGIcons/CheckboxCheckedIcon';
import { useI18n } from '../../../hooks/useI18n';
import { useStyles } from './style';

interface IPrivacyPolicyModalSignUp {
  acceptedPolicyAgreement: (e: React.MouseEvent<unknown>) => void;
  acceptedChecked: boolean;
  setAcceptedChecked: Dispatch<SetStateAction<boolean>>;
  declinePolicyAgreement: (e: React.MouseEvent<unknown>) => void;
  policies: [];
}

const PrivacyPolicyModalSignUp: React.FC<IPrivacyPolicyModalSignUp> = ({
    acceptedPolicyAgreement,
    acceptedChecked, 
    setAcceptedChecked,
    declinePolicyAgreement,
    policies,
  }) => {

  const classes = useStyles();
  const i18n = useI18n();
  const [open, setOpen] = React.useState<boolean>(true);

  const handleClose = () => {
    setOpen(false);
  };

  const agreeToPolicyConsent = (e: React.MouseEvent<unknown>) => {
    e.preventDefault();
    acceptedPolicyAgreement(e);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptedChecked(event.target.checked);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      disableBackdropClick
      disableEscapeKeyDown
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">{i18n._('Polaris I/O User Agreement')}</h2>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  edge="start"
                  checked={acceptedChecked}
                  tabIndex={-1}
                  inputProps={{ 'aria-labelledby': 'subsidiary of parent' }}
                  checkedIcon={<CheckboxCheckedIcon />}
                  onChange = {handleCheckboxChange}
                />
              }
              label={
                <div>   
                  {i18n._('I will agree to the Polaris I/O')}
                  {policies?.map( (policy: any, index: number) => (
                    <React.Fragment key = {index}>
                    {
                      index !== policies.length-1 ? <>, </> : <> and </>
                    }
                    <Link href={policy.doc_url} underline = 'always' key = {index} target= "_blank" >
                      {policy.doc_name}
                    </Link>
                    </React.Fragment>
                  ))}
                </div>
              }
            />
          </FormGroup>
          <FormGroup row classes={{row: classes.muiGrpRow}}>
            <Button 
              variant="contained" 
              color="primary" 
              className = {classes.btnAlign} 
              onClick = {(e) => agreeToPolicyConsent(e)}
              disabled = {!acceptedChecked}
            >
              { i18n._('Continue') }
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              className = {classes.btnAlign}
              onClick = {(e) => declinePolicyAgreement(e)}  
            >
              { i18n._('Decline') }
            </Button>
          </FormGroup>
        </div>
      </Fade>
    </Modal>
  );
};

export default PrivacyPolicyModalSignUp;