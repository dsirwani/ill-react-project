import { CognitoAuth } from 'amazon-cognito-auth-js';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { config as AWSConfig } from 'aws-sdk';
import APP_CONFIG from '../config/app-config.json';
// import AWS from 'aws-sdk';

AWSConfig.region = APP_CONFIG.AWS_COGNITO_CONFIG.REGION;

const REDIRECT_URI =
  window.location.protocol + '//' + window.location.host + '/callback';

const SIGNOUT_URI =
  window.location.protocol + '//' + window.location.host + '/logout';

// Creates a CognitoAuth instance
const createCognitoAuth = () => {
  const appWebDomain = APP_CONFIG.AWS_COGNITO_CONFIG.USER_POOL_BASE_URI.replace(
    'https://',
    ''
  ).replace('http://', '');
  const auth = new CognitoAuth({
    UserPoolId: APP_CONFIG.AWS_COGNITO_CONFIG.USER_POOL,
    ClientId: APP_CONFIG.AWS_COGNITO_CONFIG.CLIENT_ID,
    AppWebDomain: appWebDomain,
    TokenScopesArray: APP_CONFIG.AWS_COGNITO_CONFIG.TOKEN_SCOPES,
    RedirectUriSignIn: REDIRECT_URI,
    RedirectUriSignOut: SIGNOUT_URI,
  });
  return auth;
};

// Creates a CognitoUser instance
const createCognitoUser = () => {
  const pool = createCognitoUserPool();
  return pool.getCurrentUser();
};

// Creates a CognitoUserPool instance
const createCognitoUserPool = () =>
  new CognitoUserPool({
    UserPoolId: APP_CONFIG.AWS_COGNITO_CONFIG.USER_POOL,
    ClientId: APP_CONFIG.AWS_COGNITO_CONFIG.CLIENT_ID,
  });

// Get the URI of the hosted sign in screen
const getCognitoSignInUri = () => {
  const signinUri = `${APP_CONFIG.AWS_COGNITO_CONFIG.USER_POOL_BASE_URI}/login?response_type=code&client_id=${APP_CONFIG.AWS_COGNITO_CONFIG.CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
  return signinUri;
};

// Parse the response from a Cognito callback URI (assumed a token or code is in the supplied href). Returns a promise.
const parseCognitoWebResponse = (href: any) => {
  return new Promise((resolve, reject) => {
    const auth = createCognitoAuth();

    // userHandler will trigger the promise
    auth.userhandler = {
      onSuccess: function (result) {
        resolve(result);
      },
      onFailure: function (err) {
        reject(new Error('Failure parsing Cognito web response: ' + err));
      },
    };
    auth.parseCognitoWebResponse(href);
  });
};

// Gets a new Cognito session. Returns a promise.
const getCognitoSession = () => {
  return new Promise((resolve: any, reject: any) => {
    const cognitoUser = createCognitoUser();
    cognitoUser &&
      cognitoUser.getSession((err: any, result: any) => {
        if (err || !result) {
          reject(new Error('Failure getting Cognito session: ' + err));
          return;
        }

        // Resolve the promise with the session credentials
        //console.debug('Successfully got session: ' + JSON.stringify(result));
        const session = {
          credentials: {
            accessToken: result.accessToken.jwtToken,
            idToken: result.idToken.jwtToken,
            refreshToken: result.refreshToken.token,
          },
          user: {
            userName: result.idToken.payload['cognito:username'],
            email: result.idToken.payload.email,
          },
        };
        resolve(session);
      });
  });
};

// Sign out of the current session (will redirect to signout URI)
const signOutCognitoSession = () => {
  const auth = createCognitoAuth();
  auth.signOut();
};

export default {
  createCognitoAuth,
  createCognitoUser,
  createCognitoUserPool,
  getCognitoSession,
  getCognitoSignInUri,
  parseCognitoWebResponse,
  signOutCognitoSession,
};
