import React from 'react';
import { 
  Modal, 
  Backdrop, 
  Fade, 
  FormGroup,
  Link,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';
import { useI18n } from '../../../hooks/useI18n';
import { useStyles } from './style';

interface IPrivacyPolicyModalUpdate {
  acceptedPolicyAgreement: (e: React.MouseEvent<unknown>) => void;
  policies?: [];
  declinePolicyAgreement: (e: React.MouseEvent<unknown>) => void;
}

const PrivacyPolicyModalUpdate: React.FC<IPrivacyPolicyModalUpdate> = ({ 
  acceptedPolicyAgreement,
  policies,
  declinePolicyAgreement
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
          <h2 id="transition-modal-title">{i18n._('Important Updates')}</h2>  
          <div> 
            {i18n._('Polaris I/O has updated the following document(s). Please read these document(s) as the changes affect your legal rights.')}
            <TableContainer>
              <Table className={classes.table} aria-label="policy document(s) table">
                <TableHead>
                  <TableRow>
                    <TableCell className = {classes.tableDocTitle} classes = {{ root: classes.tCellRoot, head: classes.tCellHead}}>{i18n._('Document')}</TableCell>
                    <TableCell align="right" classes = {{ root: classes.tCellRoot, head: classes.tCellHead }}>{i18n._('Effective as of')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody classes = {{root: classes.tBody}}>
                  {policies?.map( (policy: any, index: number) => (
                    <TableRow key={policy.doc_name}>
                      <TableCell component="th" scope="row" classes = {{root: classes.tCellRoot, body: classes.tCellBody}}>
                        <Link href={policy.doc_url} underline = 'always' key = {index} target= "_blank" >
                          {policy.doc_name}
                        </Link>
                      </TableCell>
                      <TableCell align="right" classes = {{root: classes.tCellRoot, body: classes.tCellBody}}>{policy.effective_date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className = {classes.divAlignment}>{i18n._('By accepting these documents, you agree to these updates.')}</div>
          </div>
                
          <FormGroup row classes={{row: classes.muiGrpRow}}>
            <Button 
              variant="contained" 
              color="primary" 
              className = {classes.btnAlign} 
              onClick = {(e) => agreeToPolicyConsent(e)}
            >
              {i18n._('Accept')}
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              className = {classes.btnAlign}
              onClick = {(e) => declinePolicyAgreement(e)}
            >
              {i18n._('Decline')}
            </Button>
          </FormGroup>
        </div>
      </Fade>
    </Modal>
  );
};

export default PrivacyPolicyModalUpdate;