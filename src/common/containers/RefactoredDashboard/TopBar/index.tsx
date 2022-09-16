import React, { FC, Dispatch, SetStateAction } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  ButtonBase,
  Typography,
  Drawer,
  Divider
} from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../utils/injectReducer';
import { Apps as AppsIcon } from '@material-ui/icons';
import Search from './Search';
import Account from './Account';
import Settings from './Settings';
import { tileDataForClient, tileData } from './constant';
import { useStyles } from './style';
import { getUserRole } from '../../../../utils/localStorageUtils';

interface TopBarProps {
  className?: string;
  onMobileNavOpen?: () => void;
  handleItemList?: any
  selectedPlatform: any;
  setSelectedPlatform: Dispatch<SetStateAction<any>>;
}

const TopBar: FC<TopBarProps> = ({
  className,
  handleItemList,
  onMobileNavOpen,
  selectedPlatform,
  setSelectedPlatform,
  ...rest
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [openSidebar, setOpenSidebar] = React.useState(false);
  const isCustomer = getUserRole().includes('is_customer');
  const { isClientSelected } = useSelector((state: RootState) => state.clientData);
  const platformList = isClientSelected ? tileDataForClient : tileData;

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpenSidebar(open);
  };

  const handlePlatformSelection = (tile: any) => {
    handleItemList(tile);
    history.push(tile.appLink);
    toggleDrawer(false);
    setSelectedPlatform(tile);
  }


  const { enabled_apps: enabledApps } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{enabled_apps: []}')
    : { enabled_apps: [] };
  if (!isCustomer) {
    enabledApps?.push('manage client');
  } else {
    setSelectedPlatform(platformList['Engage']);
  }


  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem style={{ padding: '0px' }}>
          <IconButton color="inherit" onClick={toggleDrawer(false)}>
            <AppsIcon />
          </IconButton>
        </ListItem>
        <Divider />
        {Object.keys(platformList).map((tile) => (
          <>
            <ListItem key={platformList[tile].value} button className={classes.listItem} onClick={() => handlePlatformSelection(platformList[tile])}
              disabled={enabledApps?.length && !enabledApps.includes(platformList[tile].appName)}
            >
              <ListItemText className={classes.svgIcon}>
                <img style={{ height: '24px' }} src={platformList[tile].srcImg} alt = "image" />
              </ListItemText>
              <ListItemText primary={platformList[tile].value} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );
  return (
    <AppBar
      className={clsx(classes.root, className)}
      {...rest}
    >

      <Toolbar className={classes.toolbar}>
        <Hidden>
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <AppsIcon />
          </IconButton>
        </Hidden>
        <Drawer open={openSidebar} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
        <Box
          display="flex"
          alignItems="center"
          component={ButtonBase}>
          <Hidden smDown>
            <img style={{ height: '24px', marginRight: '11px',marginLeft:'20px' }} src={selectedPlatform.srcImg} alt = "image" />
            <Typography
              variant="h6"
              color="inherit"
            >
              {selectedPlatform.value}
            </Typography>
          </Hidden>
        </Box>
        <Box
          ml={2}
          flexGrow={1}
        />
        <Search />
        <Settings />
        <Box ml={2}>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

TopBar.defaultProps = {
  onMobileNavOpen: () => { }
};

export default TopBar;
