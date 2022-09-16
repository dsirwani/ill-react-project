import React, { useState } from 'react';
import {
  Box,
  Divider,
  Tabs,
  Tab
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useStyles } from './style';
import { UserProfileState, EditUserProfileState } from './type';
import { RootState } from '../../../../utils/injectReducer';
import LoaderOverScreen from '../../../components/LoaderOverScreen';
import NotificationAlert from '../../../components/NotificationAlert';
import { appActionCreator, userProfileActionCreator } from '../../../../utils/configureActionCreators';
import { useI18n } from '../../../../hooks/useI18n';
import UploadProfilePicture from './uploadProfilePicture';
import Validator from '../../../../utils/validator';
import ProfileComponent from './TabFolders/ProfileComponent';
import AccountMembershipComponent from './TabFolders/AccountMembershipComponent';
import RolesComponents from './TabFolders/RolesComponent';

const validator = new Validator({
  first_name: ['required'],
  last_name: ['required'],
});

const UserManagement: React.FC = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    accountActive: true,
    allAccounts: false,
  });
  const [editUserProfile, setEditUserProfile] = React.useState(false);

  const dispatch = useDispatch();
  const i18n = useI18n();
  const { accountId } = useParams();

  const { data }: EditUserProfileState = useSelector(
    (state: RootState) => {
      return state?.editUserProfileData
    }
  );

  const { loading, userProfile }: UserProfileState = useSelector(
    (state: RootState) => state?.userProfileData
  );

  const showErrorAlertProps: any = useSelector(
    (state: RootState): any => state?.app
  );

  const textFields = {
    first_name: {
      id: 'first-name-input',
      name: 'first_name',
      label: i18n._('First Name'),
      editable: true
    },
    last_name: {
      id: 'last-name-input',
      name: 'last_name',
      label: i18n._('Last Name'),
      editable: true
    },
    email: {
      id: 'email-address-input',
      label: i18n._('Email Address'),
    },
    job_title: {
      id: 'job-title-input',
      name: 'job_title',
      label: i18n._('Job Title'),
      editable: true
    },
    manager_email: {
      id: 'mngr-email-address-input',
      label: i18n._('Manager-Email-Address'),
    }
  };

  const initValueForTF = {};
  Object.keys(textFields).forEach((tf) => (initValueForTF[tf] = ''));

  const [inputFields, setInputFields] = React.useState(initValueForTF);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValues = { ...inputFields };
    const { name, value, checked } = event.target;
    inputValues[name] = value;
    if (name === 'is_currency_pref_million') {
      inputValues[name] = checked
    }
    validator.validateInputs(name, value)
    setInputFields({ ...inputValues });
  };

  const handleEdit = (event: any) => {
    const payload = { 
      first_name: inputFields['first_name'], 
      last_name: inputFields['last_name'], 
      job_title: inputFields['job_title'], 
      email: inputFields['email'],
      manager_email: inputFields['manager_email']
    };
    event.preventDefault();
    if (validator.isFormValid()) {
      dispatch(userProfileActionCreator.editUserProfileRequest({ data: payload, accountId, userId: userProfile.user_data.user_id }));
    }
  }

  const handleClose = () => {
    setEditUserProfile(false);
  }

  const initMngmntPermission = {
    is_account_manager: { label: i18n._('Account Manager') },
    is_admin: { label: i18n._('Administrator') },
    is_content_manager: { label: i18n._('Content Manager') },
    is_customer: { label: i18n._('Customer') },
    is_people_manager: { label: i18n._('People Manager') },
    is_survey_manager: { label: i18n._('Survey Manager') },
    is_team_member: { label: i18n._('Team Member') },
  };

  const initUserRoles = {};
  Object.keys(initMngmntPermission).forEach(
    (role) => (initUserRoles[role] = false)
  );
  const [userRoles, setUserRoles] = React.useState(initUserRoles);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  React.useEffect(() => {
    const inputValues = {};
    inputValues['status'] = userProfile?.user_data['status'];
    inputValues['is_currency_pref_million'] = userProfile?.user_data['is_currency_pref_million'] ?? false;
    Object.keys(inputFields).forEach((inputField) => {
      inputValues[inputField] = userProfile?.user_data[inputField] ?? '';
    });

    const rolesUpdate = {};
    Object.keys(userRoles).forEach((role) => {
      rolesUpdate[role] = userProfile?.role_details[role] ?? false;
    });

    setInputFields({ ...inputValues });
    validator.validateInputs('first_name', inputValues['first_name']);
    validator.validateInputs('last_name', inputValues['last_name']);
    setUserRoles({ ...rolesUpdate });

    return () => {
      Object.keys(inputFields).forEach((inputField) => {
        inputValues[inputField] = '';
      });

      Object.keys(userRoles).forEach((role) => {
        rolesUpdate[role] = userProfile?.role_details[role] ?? false;
      });

      setInputFields({ ...inputValues });
      setUserRoles({ ...rolesUpdate });
    };
  }, [userProfile]);

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
  const [currentTab, setCurrentTab] = useState('profile');

  const tabs = [
    { value: 'profile', label: 'PROFILE' },
    { value: 'accountMembership', label: 'ACCOUNT MEMBERSHIP' },
    { value: 'roles', label: 'ROLES' }
  ];

  const handleTabsChange = (event: any, value: any) => {
    setCurrentTab(value);
  };
  return (
    <div className={classes.accountContainer}>
      <UploadProfilePicture userId={(userProfile && userProfile.user_data) ? userProfile.user_data.user_id : null} editUserProfile={editUserProfile} handleClose={handleClose} />
      {showErrorAlertProps.show ? (
        <NotificationAlert
          {...showErrorAlertProps}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={3000}
          onClose={hideAlertError}
        />
      ) : null}
      {loading ? <LoaderOverScreen /> : null}
      <div>
        <>
          <Box mt={3}>
            <Tabs
              onChange={handleTabsChange}
              scrollButtons="auto"
              value={currentTab}
              variant="scrollable"
              textColor="secondary"
            >
              {tabs.map((tab) => (
                <Tab
                  className={classes.tabButton}
                  key={tab.value}
                  label={tab.label}
                  value={tab.value}
                />
              ))}
            </Tabs>
          </Box>
          <Divider />
          <Box mt={3}>
            {currentTab === 'profile' && <ProfileComponent data={data} userProfile={userProfile} setEditUserProfile={setEditUserProfile} textFields={textFields} handleInputChange={handleInputChange} inputFields={inputFields} handleEdit={handleEdit} />}
            {currentTab === 'accountMembership' && <AccountMembershipComponent allAccounts={state.allAccounts} handleChange={handleChange} handleEdit={handleEdit} userProfile={userProfile} />}
            {currentTab === 'roles' && <RolesComponents initMngmntPermission={initMngmntPermission} handleEdit={handleEdit} />}
          </Box>
        </>

      </div>
    </div>
  );
};

export default UserManagement;