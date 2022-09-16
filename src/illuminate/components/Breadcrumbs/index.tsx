import React from 'react';
import { useSelector } from 'react-redux';

import {
  Breadcrumbs,
  Typography,
  Link
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useStyles } from './style';
import {
  Home as HomeIcon
} from 'react-feather';
import { AccountSummaryState } from '../../../illuminate/containers/AccountDrilldowns/type';
import { UserProfileState } from '../../../illuminate/containers/AccountDrilldowns/UserManagement/type';
import { updatePreferredApp } from '../../../utils/localStorageUtils';
import { RootState } from '../../../utils/injectReducer';
import { modules } from './constant';
interface IBreadCrumbsComponent {
  accountSelected: any;
  selectedOption: any;
}

const BreadCrumbsComponent = (props: IBreadCrumbsComponent) => {
  const classes = useStyles();
  const selectedAccount = window.localStorage.getItem('selectedAccount');
  const { isAccountSelected }: AccountSummaryState = useSelector((state: RootState) => state.accSummaryData);
  const { userProfile }: UserProfileState = useSelector(
    (state: RootState) => state?.userProfileData
  );

  const getPageTitle = (moduleName: any) => {
    return modules[moduleName];
  }
  const handleHomeIconClick = (): void => {
    updatePreferredApp('illuminate')
  }
  return (
    <div className={classes.root}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" href="/" >
          <HomeIcon className={classes.homeIcon} fontSize='small' onClick={handleHomeIconClick} />
        </Link>
        {
          props.accountSelected ?
            (
              <Link color="inherit" href="/">
                <Typography variant="h5" >KPI Dashboard</Typography>
              </Link>
            )
            : null
        }
        {selectedAccount && isAccountSelected ?
          <Typography variant="h5" color="textPrimary">{selectedAccount}</Typography> : null
        }

      </Breadcrumbs>

      {!props.accountSelected ? <Typography variant="h3" color="textPrimary">KPI Dashboard</Typography> :
        props.selectedOption === 'account_management' ? userProfile?.user_data ? < Typography variant='h3' color='textPrimary' > {userProfile.user_data.first_name} {userProfile.user_data.last_name}</Typography> : '' :
          < Typography variant='h3' color='textPrimary' > {getPageTitle(props.selectedOption)}</Typography>
      }
    </div >
  );
};

export default BreadCrumbsComponent;
