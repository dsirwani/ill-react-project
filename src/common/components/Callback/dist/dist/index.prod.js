"use strict";exports.__esModule=!0;var react_1=require("react"),react_router_dom_1=require("react-router-dom"),react_redux_1=require("react-redux"),configureActionCreators_1=require("../../utils/configureActionCreators"),Callback=function(){var e=react_router_dom_1.useLocation(),r=react_redux_1.useDispatch();react_1.useEffect(function(){(e.hash||e.search)&&r(configureActionCreators_1.authActionCreator.initSession(window.location.href))},[]);var t=react_redux_1.useSelector(function(e){return e.auth});return react_1.default.createElement(react_1.default.Fragment,null,!e.hash&&!e.search||t.isLoggedIn?react_1.default.createElement(react_router_dom_1.Redirect,{to:"/"}):null)};exports.default=Callback;