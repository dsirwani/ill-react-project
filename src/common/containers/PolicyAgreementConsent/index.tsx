import React, { useEffect } from 'react';
import {
  CssBaseline,
} from '@material-ui/core';
import PrivacyPolicyModalSignUp from '../../components/PrivacyPolicyModalSignUp';
import PrivacyPolicyModalUpdate from '../../components/PrivacyPolicyModalUpdate/index';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './style';
import { appActionCreator, plcyAgmntConscentActionCreator } from '../../../utils/configureActionCreators';
import { getEmail } from '../../../utils/localStorageUtils';
import { RootState } from '../../../utils/injectReducer';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../utils/routeConstants';
import NotificationAlert from '../../../illuminate/components/NotificationAlert';
import LoaderOverScreen from '../../../illuminate/components/LoaderOverScreen';
import cognitoUtils from '../../../utils/cognitoUtils';

const PolicyAgreementConsent: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [acceptedChecked, setAcceptedChecked] = React.useState(false);
  const { isLoading, policies, policiesAccepted} = useSelector(
    (state: RootState): any => state?.policyConsentData
  );

  const showErrorAlertProps: any = useSelector(
    (state: RootState): any => state?.app
  );

  const relocateToAccountsViewPage = () => {
    history.push(ROUTES.DEFAULT);
  }

 /*  useEffect(() => {
    dispatch(plcyAgmntConscentActionCreator.fetchPolicyConsentRequest(getEmail()))
  },[]);
 */
  useEffect(() => {
    if(policiesAccepted === true) {
      history.push(ROUTES.DEFAULT);
    }
  }, [policiesAccepted])

  const showConsent = policies?.length ? policies.every((policy: any) => policy.accepted === true ): false;
  const signUpUser = policies?.length ? policies.every((policy: any) => policy.last_update_date === null ): false;
  let documentsUpdated : any;  
  if(!showConsent){
    documentsUpdated = policies?.filter(( policy: any) => !policy.accepted);
  }

  const acceptedPolicyAgreement = (e: React.MouseEvent<unknown>) => {
    e.preventDefault();
    const listOfPolicies = documentsUpdated.map( (policy: any) => policy?.policy_type);
    const reqParams = { 
      "user_email":getEmail(),
      "accepted_policy": [...listOfPolicies]
    };
      dispatch(plcyAgmntConscentActionCreator.acceptPolicyConsentRequest(reqParams));
  }

  const hideAlertError = () => {
    dispatch &&
      dispatch(
        appActionCreator.hideMessage({
           show: false,
          errorMsg: '',
          severity: '',
        })
      );
  };

  const declinePolicyAgreement = ( e: React.MouseEvent<unknown> ) => {
    e.preventDefault();
    cognitoUtils.signOutCognitoSession();
    localStorage.clear();
  }

  return (
    <div className={classes.root}>
      { showErrorAlertProps.show ? (
        <NotificationAlert
          {...showErrorAlertProps}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={3000}
          onClose={hideAlertError}
        />
      ) : null}
      {isLoading ? <LoaderOverScreen /> : null}
      <CssBaseline />
      { signUpUser &&  !showConsent ? 
        <PrivacyPolicyModalSignUp 
          acceptedPolicyAgreement = {acceptedPolicyAgreement} 
          acceptedChecked = { acceptedChecked }
          setAcceptedChecked = { setAcceptedChecked } 
          declinePolicyAgreement = { declinePolicyAgreement } 
          policies = { documentsUpdated }
        />
        : (!signUpUser && !showConsent ?
        <PrivacyPolicyModalUpdate 
          acceptedPolicyAgreement = {acceptedPolicyAgreement} 
          policies = { documentsUpdated }
          declinePolicyAgreement = { declinePolicyAgreement }
        />
        : !signUpUser && showConsent && relocateToAccountsViewPage())

      }
    </div>
  );
};

export default PolicyAgreementConsent;
