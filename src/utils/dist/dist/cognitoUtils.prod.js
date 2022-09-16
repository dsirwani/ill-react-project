"use strict";exports.__esModule=!0;var amazon_cognito_auth_js_1=require("amazon-cognito-auth-js"),amazon_cognito_identity_js_1=require("amazon-cognito-identity-js"),aws_sdk_1=require("aws-sdk"),app_config_json_1=require("../config/app-config.json");aws_sdk_1.config.region=app_config_json_1.default.AWS_COGNITO_CONFIG.REGION;var createCognitoAuth=function(){var o=app_config_json_1.default.AWS_COGNITO_CONFIG.USER_POOL_BASE_URI.replace("https://","").replace("http://","");return new amazon_cognito_auth_js_1.CognitoAuth({UserPoolId:app_config_json_1.default.AWS_COGNITO_CONFIG.USER_POOL,ClientId:app_config_json_1.default.AWS_COGNITO_CONFIG.CLIENT_ID,AppWebDomain:o,TokenScopesArray:app_config_json_1.default.AWS_COGNITO_CONFIG.TOKEN_SCOPES,RedirectUriSignIn:app_config_json_1.default.AWS_COGNITO_CONFIG.CALLBACK_URI,RedirectUriSignOut:app_config_json_1.default.AWS_COGNITO_CONFIG.SIGNOUT_URI})},createCognitoUser=function(){return createCognitoUserPool().getCurrentUser()},createCognitoUserPool=function(){return new amazon_cognito_identity_js_1.CognitoUserPool({UserPoolId:app_config_json_1.default.AWS_COGNITO_CONFIG.USER_POOL,ClientId:app_config_json_1.default.AWS_COGNITO_CONFIG.CLIENT_ID})},getCognitoSignInUri=function(){return app_config_json_1.default.AWS_COGNITO_CONFIG.USER_POOL_BASE_URI+"/login?response_type=code&client_id="+app_config_json_1.default.AWS_COGNITO_CONFIG.CLIENT_ID+"&redirect_uri="+app_config_json_1.default.AWS_COGNITO_CONFIG.CALLBACK_URI},parseCognitoWebResponse=function(t){return new Promise(function(e,n){var o=createCognitoAuth();o.userhandler={onSuccess:function(o){e(o)},onFailure:function(o){n(new Error("Failure parsing Cognito web response: "+o))}},o.parseCognitoWebResponse(t)})},getCognitoSession=function(){return new Promise(function(t,i){var o=createCognitoUser();o&&o.getSession(function(o,e){var n;!o&&e?(n={credentials:{accessToken:e.accessToken.jwtToken,idToken:e.idToken.jwtToken,refreshToken:e.refreshToken.token},user:{userName:e.idToken.payload["cognito:username"],email:e.idToken.payload.email}},t(n)):i(new Error("Failure getting Cognito session: "+o))})})},signOutCognitoSession=function(){createCognitoAuth().signOut()};exports.default={createCognitoAuth:createCognitoAuth,createCognitoUser:createCognitoUser,createCognitoUserPool:createCognitoUserPool,getCognitoSession:getCognitoSession,getCognitoSignInUri:getCognitoSignInUri,parseCognitoWebResponse:parseCognitoWebResponse,signOutCognitoSession:signOutCognitoSession};