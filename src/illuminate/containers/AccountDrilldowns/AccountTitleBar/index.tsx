import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Avatar, Typography } from '@material-ui/core';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
// import AccountInfoDropDown from '../../../components/AccountInfoDropDown';
import { useStyles } from './style';

interface AccountTitleBarProps {
  setAccountInfo: (value: string) => any;
  accInfo: string;
  setSelectedTab: (tabValue: number) => void;
}

const AccountTitleBar = (props: AccountTitleBarProps) => {
  const classes = useStyles();

  const location: any = useLocation();
  const accName = location?.state?.accName ?? '';
  const accLogo = location?.state?.accLogo ?? '';

  return (
    <div className={classes.root}>
      <div className={classes.accountTitleBar}>
        <Link to="/" title="Back to Dashboard">
          <ArrowBackRoundedIcon
            color="primary"
            className={classes.nav}
            fontSize="large"
          />
        </Link>
        <Avatar alt="acc_logo" src={accLogo} />
        <Typography variant="h4" className={classes.titleContent}>
          {accName}
        </Typography>
      </div>
      {/* <div className={classes.accountInfoDD}>
        <AccountInfoDropDown
          accInfo={props.accInfo}
          setAccountInfo={props.setAccountInfo}
          setSelectedTab = {props.setSelectedTab}
        />
      </div> */}
    </div>
  );
};

export default AccountTitleBar;
