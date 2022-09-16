import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { isSuperAdmin, getUserRole } from '../../../utils/localStorageUtils';
import MENU_ITEM_CONSTANTS from '../../../utils/roleBasedMenus';
import { useStyles } from './style';

interface AccountInfoDDProps {
  accInfo: string;
  setAccountInfo: (value: string) => any;
  setSelectedTab: (tabValue: number) => void;
}

const AccountInfoDropDown = (props: AccountInfoDDProps) => {
  const classes = useStyles();

  const ROLE_TO_MENU_MAP = [
    { key: "is_super_admin", value: MENU_ITEM_CONSTANTS.IS_SUPER_ADMIN },
    { key: "is_admin", value: MENU_ITEM_CONSTANTS.IS_ADMIN },
    { key: "is_account_manager", value: MENU_ITEM_CONSTANTS.IS_ACCOUNT_MANAGER },
    { key: "is_people_manager", value: MENU_ITEM_CONSTANTS.IS_PEOPLE_MANAGER },
    { key: "is_team_member", value: MENU_ITEM_CONSTANTS.IS_TEAM_MEMBER }
  ]

  const getRoleUnion = (arrays: any) => {
    let jointArray: any = []
    arrays.forEach((array: any) => {
      jointArray = [...jointArray, ...array]
    })
    const uniqueArray = jointArray.filter((item: any, index: any) => jointArray.indexOf(item) === index)
    return uniqueArray
  }

  const getMenuItems = () => {
    let arr: any = []
    let userRole: any = []
    if (isSuperAdmin()) {
      userRole = ["is_super_admin"];
    }
    else {
      userRole = getUserRole();
    }
    ROLE_TO_MENU_MAP.map((i: any) => {
      userRole.map((j: any) => {
        if (i.key == j) {
          arr.push(i.value)
        }
      })
    })
    return arr;
  }

  const handleChange = (event: any) => {
    props.setAccountInfo(event.target.value);
    props.setSelectedTab(0);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="account-info-label"
          id="account-info-select"
          value={props.accInfo}
          onChange={handleChange}
          classes={{ icon: classes.ddArowCls }}
          className={classes.selectHover}
        >
          {getRoleUnion(getMenuItems()).map((mi: any) => {
            return <MenuItem key={mi.value} value={mi.value} disabled={mi.disabled}>{mi.caption}</MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default AccountInfoDropDown;
