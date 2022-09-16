import React, { useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActionCreator } from '../../../utils/configureActionCreators';
import { RootState } from '../../../utils/injectReducer';
import { ROUTES } from '../../../utils/routeConstants';

const Callback: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect((): void => {
    if (location.hash || location.search) {
      dispatch(authActionCreator.initSession(window.location.href));
    }
  }, []);

  const auth = useSelector((state: RootState): any => state.auth);
  return (
    <>
      {(!location.hash && !location.search) || auth.isLoggedIn ? (
        <Redirect to= {ROUTES.DEFAULT} />
      ) : null}
    </>
  );
};

export default Callback;
