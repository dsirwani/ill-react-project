/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, matchPath } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { AccountSummaryState } from '../../../../illuminate/containers/AccountDrilldowns/type';
import { RootState } from '../../../../utils/injectReducer';
import Logo from './Logo';
import Footer from './Footer';

import {
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  ListSubheader,
  // ButtonBase,
} from '@material-ui/core';
import NavItem from './NavItem';
import { MENU_LIST } from './constant';
import { useStyles } from './style';

interface Item {
  href?: string;
  icon?: ReactNode;
  info?: ReactNode;
  items?: Item[];
  title: string;
  value: string;
  isLink: boolean;
  disabled: boolean;
}

let sections = { ...MENU_LIST };

const renderNavItems = ({
  items,
  pathname,
  depth = 0
}: {
  items: Item[];
  pathname: string;
  depth?: number;
}) => {
  return (
    <List disablePadding>
      {items.reduce(
        (acc: any, item: any) => reduceChildRoutes({ acc, item, pathname, depth }),
        []
      )}
    </List>
  );
}

const reduceChildRoutes = ({
  acc,
  item,
  pathname,
  depth
}: {
  acc: any[];
  item: Item;
  pathname: string;
  depth: number;
}) => {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean(open)}
        title={item.title}
        href={item.href}
        value={item.value}
        isLink={item.isLink}
        disabled = {item.disabled}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}
        value={item.value}
        isLink={item.isLink}
        disabled = {item.disabled}
      />
    );
  }

  return acc;
}
interface MenuProps {
  selectedPlatform: any;
}

const NavBar = (props: MenuProps) => {
  const classes = useStyles();
  const location = useLocation();

  const { isAccountSelected }: AccountSummaryState = useSelector((state: RootState) => state.accSummaryData);
  const { isClientSelected } = useSelector((state: RootState) => state.clientData);
  const { s3_logo_link: clientLogo } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : '';
  const { client_name: client_name } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}') : ''
  sections['Illuminate'] = isAccountSelected ? sections.IlluminateWithAccount : sections.IlluminateWithoutAccount;
  sections['Manage Client'] = isClientSelected ? sections.ToolsWithClient : sections.ToolsByDefault;
  const selectedPlatform = props.selectedPlatform;
  const accName = localStorage.getItem('selectedAccount')
  const accLogo = localStorage.getItem('selectedAccountLogo')

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      {isClientSelected && <Box
        p={2}
        display="flex"
        justifyContent="center"
      >
        <Logo clientlogo={!isAccountSelected && isClientSelected ? clientLogo : accLogo} />
      </Box>}
      {isClientSelected && <Box
        p={2}
        display="flex"
        justifyContent="center"
        fontSize={'16px'}
        fontWeight={'500'}
      >
        {!isAccountSelected && isClientSelected ? client_name : accName}
      </Box>}
      {/* {isClientSelected && <Box
        display="flex"
        justifyContent="center"
        component={ButtonBase}
        bottom='10px'
      >
        Manage
        </Box>} */}
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        {isClientSelected && <Divider />}
        <Box p={2}>
          {selectedPlatform?.value?.length && sections[selectedPlatform.value]?.map((section: any, idx: number) => (
            <List
              key={`${section.subheader} ${idx}`}
              subheader={(
                <ListSubheader
                  disableGutters
                  disableSticky
                >
                  {section.subheader}
                </ListSubheader>
              )}
            >
              {renderNavItems({
                items: section.items,
                pathname: location.pathname
              })}
            </List>
          ))}
        </Box>
        <Divider />
      </PerfectScrollbar>
      <Footer />
    </Box >
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

export default NavBar;
