import React, {
  useRef,
  useState
} from 'react';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { getEmail } from '../../../../utils/localStorageUtils';
import cognitoUtils from '../../../../utils/cognitoUtils';
import { useStyles } from './style';

const Account: FC = () => {
  const classes = useStyles();
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const userEmailAddr = getEmail();

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const onSignOut = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    cognitoUtils.signOutCognitoSession();
    localStorage.clear();
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        // @ts-ignore
        ref={ref}
      >
        <Avatar
          alt="User"
          className={classes.avatar}
        
        />
        <Hidden smDown>
          <Typography
            variant="h6"
            color="inherit"
          >
            {userEmailAddr}
          </Typography>
        </Hidden>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem
          component={RouterLink}
          to="/app/social/profile"
          disabled
        >
          Profile
        </MenuItem>
        <MenuItem onClick={onSignOut}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default Account;
