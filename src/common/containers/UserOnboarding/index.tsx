import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import { ROUTES } from '../../utils/routeConstants';
import { RootState } from '../../../utils/injectReducer';
import cognitoUtils from '../../../utils/cognitoUtils';
import APP_CONFIG from '../../../config/app-config.json';

export interface Props {
  component: any;
  rest?: any;
  path?: string;
}

const WithAuthentication: React.FC<Props> = ({
  component: ComponentToBeRendered,
  path,
  ...rest
}) => {
  const location: any = useLocation();
  const isLoggedIn = useSelector((state: RootState) => state?.auth?.isLoggedIn);

  return (
    <Route
      {...rest}
      path={path}
      render={(props) =>
        !location.hash &&
        !location.search &&
        isLoggedIn &&
        localStorage.getItem(
          `CognitoIdentityServiceProvider.${APP_CONFIG.AWS_COGNITO_CONFIG.CLIENT_ID}.LastAuthUser`
        ) ? (
          <ComponentToBeRendered {...props} />
        ) : (
          (window.location.href = cognitoUtils.getCognitoSignInUri())
        )
      }
    />
  );
};

export default WithAuthentication;
