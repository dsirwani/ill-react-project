import React, {Fragment, useEffect} from 'react';
import { getUserRole } from '../../../utils/localStorageUtils';
import EngageAccountSelect from '../../container/EngageAccountSelect/index';
import { ROUTES } from '../../../utils/routeConstants';
import { useSelector } from 'react-redux';
import { RootState } from '../../../utils/injectReducer';
import { useHistory } from 'react-router-dom';

interface EngageCanvasProps {
}

const EngageCanvas = (props: EngageCanvasProps) => {

  const history = useHistory();
  const loggedInUserDetails: any = useSelector(
    (state: RootState): any => state?.loggedInUserDetails?.loggedInUserDetails
  );
  
  useEffect(() => {
    const isCustomer = getUserRole().includes('is_customer')
    if (loggedInUserDetails) {
      if (isCustomer) {
        history.push(ROUTES.ENGAGE_MICROSITES);
      }
    }
  }, [loggedInUserDetails]);  

  return (
    <Fragment>
    {
      <EngageAccountSelect />
    }
    </Fragment>  
  );
};

export default EngageCanvas;