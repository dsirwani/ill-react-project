import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
  Avatar,
  Menu,
  MenuItem,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './style';
import cognitoUtils from '../../../utils/cognitoUtils';
import { ROUTES } from '../../../utils/routeConstants';
import { isSuperAdmin, getUserRole, getEmail } from '../../../utils/localStorageUtils';
import ContentWrapper from '../../components/ContentWrapper';
import { dashboardActionCreator, plcyAgmntConscentActionCreator } from '../../../utils/configureActionCreators';
import { updatePreferredApp } from '../../../utils/localStorageUtils';
import { RootState } from '../../../utils/injectReducer';
import { useI18n } from '../../../hooks/useI18n';
import Footer from '../../../illuminate/components/Footer';
import PolicyAgreementConsent from '../PolicyAgreementConsent/index';

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch(); 
  const i18n = useI18n();
  const history = useHistory();
  const superAdmin = isSuperAdmin();
  const isCustomer = getUserRole().includes('is_customer')
  const isPeopleManager = getUserRole().includes('is_people_manager')

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const localeLang = useSelector(
    (state: RootState): string => state?.dashboard?.locale
  );

  const clientLogo: any = useSelector(
    (state: RootState): any => state?.accountList?.clientImg
  );

  const enabledApps: any = useSelector(
    (state: RootState): any => state?.accountList?.enabledApps
  );

  const loggedInUserDetails: any = useSelector(
    (state: RootState): any => state?.loggedInUserDetails?.loggedInUserDetails
  );

  const languages = [
    { locale: 'English', code: 'en' },
    { locale: 'Japanese', code: 'ja' },
    { locale: 'French', code: 'fr' },
    { locale: 'Arabic', code: 'ar' },
  ];

  const handleClick = (event: any): any => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): any => {
    setAnchorEl(null);
  };

  const handleLocaleChange = (event: any) => {
    dispatch(dashboardActionCreator.setLocaleLang(event.target.value));
  };

  const onSignOut = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    cognitoUtils.signOutCognitoSession();
    localStorage.clear();
  };

  const handleTeamManagement = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    history.push(ROUTES.TEAM_MANAGEMENT);
  };

  const redirectToPulse = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    updatePreferredApp('pulse')
    history.push(ROUTES.PULSE_HOME);
  };

  const redirectToIlluminate = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    updatePreferredApp('illuminate')
    history.push(ROUTES.DEFAULT);
  };

  const getClientLogo = (): any => {
    const { s3_logo_link: clientLogo } = localStorage.getItem('selectedClient')
      ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
      : '';
    return clientLogo
  };

  const getEnabledApps = (): any => {
    const { enabled_apps: enabledApps } = localStorage.getItem('selectedClient')
      ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
      : '';
    return enabledApps
  };

  const { policies } = useSelector(
    (state: RootState): any => state?.policyConsentData
  );

  useEffect(() => {
    dispatch(plcyAgmntConscentActionCreator.fetchPolicyConsentRequest(getEmail()))
  },[]);

  const showConsent = policies?.length ? policies.every((policy: any) => policy.accepted === true ): null;
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      {
         showConsent === false ? <PolicyAgreementConsent /> :
         showConsent === true ?
      <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            PolarisIO
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={i18n._('Search')}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button
            variant="outlined"
            color="primary"
            className={classes.themeButton}
          >
            {i18n._('Btn.Go')}
          </Button>
          {superAdmin && <Link to={ROUTES.CLIENTS_VIEW} className={classes.uploadBtn}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.themeButton}
            >
              {i18n._('Client Management')}
            </Button>
          </Link>}
          {window.location.host.split('.')[0] != 'pio' && superAdmin && <Link to={ROUTES.UPLOAD} className={classes.uploadBtn}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.themeButton}
            >
              {i18n._('Btn.Upload')}
            </Button>
          </Link>}
          <FormControl className={classes.formControl}>
            <InputLabel id="select-language-lbl">Select Language</InputLabel>
            <Select
              labelId="select-language-label"
              id="select-language"
              value={localeLang}
              onChange={handleLocaleChange}
              classes={{ icon: classes.ddArowCls }}
              className={classes.selectHover}
            >
              {languages.map(
                (language: { locale: string; code: string }): any => (
                  <MenuItem key={language.code} value={language.code}>
                    {language.locale}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.clientImg}>
          <Avatar src={!clientLogo ? getClientLogo() : clientLogo} />
        </div>
        {isCustomer && window.location.host.split('.')[0] != 'pio' && <div className={classes.customerImg}>
          <Avatar src='data:image/png;base64,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' />
        </div>}
        {/* <div title='Home' className={classes.homeImg}>
          <HomeIcon fontSize="large" />
        </div> */}

        {enabledApps.indexOf("illuminate") > -1 || (getEnabledApps()?.length && getEnabledApps().indexOf("illuminate") > -1) ?
          <div title='Illuminate Home' className={classes.homeImg}>
            <HomeIcon fontSize="large" onClick={redirectToIlluminate} />
          </div> : ''}
        {enabledApps.indexOf("pulse") > -1 || (getEnabledApps()?.length && getEnabledApps().indexOf("pulse") > -1) ?
          <div title='Pulse Home' className={classes.homeImg}>
            <HomeIcon fontSize="large" onClick={redirectToPulse} />
          </div> : ''}
        {enabledApps.indexOf("engage") > -1 || (getEnabledApps()?.length && getEnabledApps().indexOf("engage") > -1) ?
          <div title='Engage Home' className={classes.homeImg}>
            <HomeIcon fontSize="large" />
          </div> : ''}

        <div className={classes.avtarImg}>
          <Avatar src="/broken-image.jpg" onClick={handleClick} />
        </div>
        <Menu
          id="avatar-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          PaperProps={{
            style: {
              width: '27ch',
              background: '#27272d',
            },
          }}
        >
          {(loggedInUserDetails?.role_details?.['is_account_manager'] ||
            loggedInUserDetails?.role_details?.['is_admin']) && (
              <MenuItem key="account-management" disabled>
                <ListItemText primary={i18n._('Account Management')} />
              </MenuItem>
            )}
          {(loggedInUserDetails?.role_details?.['is_people_manager'] ||
            loggedInUserDetails?.role_details?.['is_admin']) && (
              <MenuItem key="people-management" disabled>
                <ListItemText primary={i18n._('People Management')} />
              </MenuItem>
            )}
          {loggedInUserDetails?.role_details?.['is_admin'] && (
            <MenuItem key="site-administration" disabled>
              <ListItemText primary={i18n._('Site Administration')} />
            </MenuItem>
          )}
          {loggedInUserDetails?.role_details?.['is_team_member'] && (
            <MenuItem key="join-an-acc-team" disabled>
              <ListItemText primary={i18n._('Join an Account Team')} />
            </MenuItem>
          )}
          {(superAdmin || isPeopleManager) && (
            <MenuItem key="team-management" onClick={handleClose}>
              <ListItemText
                primary={i18n._('Team Management')}
                onClick={handleTeamManagement}
              />
            </MenuItem>)}
          <MenuItem key="logout" onClick={handleClose}>
            <ListItemText primary={i18n._('Logout')} onClick={onSignOut} />
          </MenuItem>
        </Menu>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ContentWrapper />
      </main>
      <Footer />
      </>
      :
      ""
      }
    </div>
  );
};

export default Dashboard;
