"use strict";
exports.__esModule = true;
var amazon_cognito_auth_js_1 = require("amazon-cognito-auth-js");
var amazon_cognito_identity_js_1 = require("amazon-cognito-identity-js");
var aws_sdk_1 = require("aws-sdk");
var app_config_json_1 = require("../config/app-config.json");
// import AWS from 'aws-sdk';
aws_sdk_1.config.region = app_config_json_1["default"].AWS_COGNITO_CONFIG.REGION;
var redirectURI = window.location.protocol + '//' + window.location.host + '/callback';
// Creates a CognitoAuth instance
var createCognitoAuth = function () {
    var appWebDomain = app_config_json_1["default"].AWS_COGNITO_CONFIG.USER_POOL_BASE_URI.replace('https://', '').replace('http://', '');
    var auth = new amazon_cognito_auth_js_1.CognitoAuth({
        UserPoolId: app_config_json_1["default"].AWS_COGNITO_CONFIG.USER_POOL,
        ClientId: app_config_json_1["default"].AWS_COGNITO_CONFIG.CLIENT_ID,
        AppWebDomain: appWebDomain,
        TokenScopesArray: app_config_json_1["default"].AWS_COGNITO_CONFIG.TOKEN_SCOPES,
        RedirectUriSignIn: redirectURI,
        RedirectUriSignOut: app_config_json_1["default"].AWS_COGNITO_CONFIG.SIGNOUT_URI
    });
    return auth;
};
// Creates a CognitoUser instance
var createCognitoUser = function () {
    var pool = createCognitoUserPool();
    return pool.getCurrentUser();
};
// Creates a CognitoUserPool instance
var createCognitoUserPool = function () {
    return new amazon_cognito_identity_js_1.CognitoUserPool({
        UserPoolId: app_config_json_1["default"].AWS_COGNITO_CONFIG.USER_POOL,
        ClientId: app_config_json_1["default"].AWS_COGNITO_CONFIG.CLIENT_ID
    });
};
// Get the URI of the hosted sign in screen
var getCognitoSignInUri = function () {
    var signinUri = app_config_json_1["default"].AWS_COGNITO_CONFIG.USER_POOL_BASE_URI + "/login?response_type=code&client_id=" + app_config_json_1["default"].AWS_COGNITO_CONFIG.CLIENT_ID + "&redirect_uri=" + redirectURI;
    return signinUri;
};
// Parse the response from a Cognito callback URI (assumed a token or code is in the supplied href). Returns a promise.
var parseCognitoWebResponse = function (href) {
    return new Promise(function (resolve, reject) {
        var auth = createCognitoAuth();
        // userHandler will trigger the promise
        auth.userhandler = {
            onSuccess: function (result) {
                resolve(result);
            },
            onFailure: function (err) {
                reject(new Error('Failure parsing Cognito web response: ' + err));
            }
        };
        auth.parseCognitoWebResponse(href);
    });
};
// Gets a new Cognito session. Returns a promise.
var getCognitoSession = function () {
    return new Promise(function (resolve, reject) {
        var cognitoUser = createCognitoUser();
        cognitoUser &&
            cognitoUser.getSession(function (err, result) {
                if (err || !result) {
                    reject(new Error('Failure getting Cognito session: ' + err));
                    return;
                }
                // Resolve the promise with the session credentials
                //console.debug('Successfully got session: ' + JSON.stringify(result));
                var session = {
                    credentials: {
                        accessToken: result.accessToken.jwtToken,
                        idToken: result.idToken.jwtToken,
                        refreshToken: result.refreshToken.token
                    },
                    user: {
                        userName: result.idToken.payload['cognito:username'],
                        email: result.idToken.payload.email
                    }
                };
                resolve(session);
            });
    });
};
// Sign out of the current session (will redirect to signout URI)
var signOutCognitoSession = function () {
    var auth = createCognitoAuth();
    auth.signOut();
};
exports["default"] = {
    createCognitoAuth: createCognitoAuth,
    createCognitoUser: createCognitoUser,
    createCognitoUserPool: createCognitoUserPool,
    getCognitoSession: getCognitoSession,
    getCognitoSignInUri: getCognitoSignInUri,
    parseCognitoWebResponse: parseCognitoWebResponse,
    signOutCognitoSession: signOutCognitoSession
};
