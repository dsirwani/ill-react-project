import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../utils/injectReducer';
import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Button,
  Collapse,
  ListItem,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import { sidebarActionCreator } from '../../../../utils/configureActionCreators';
import { useStyles } from './style';

interface NavItemProps {
  children?: ReactNode;
  className?: string;
  depth: number;
  href?: string;
  icon?: any;
  info?: any;
  open?: boolean;
  title: string;
  value: string;
  isLink: boolean;
  disabled: boolean;
}

const NavItem: FC<NavItemProps> = ({
  children,
  className,
  depth,
  href,
  icon: Icon,
  info: Info,
  open: openProp,
  title,
  value,
  isLink,
  disabled,
  ...rest
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const sidebarData : any = useSelector(
    (state: RootState) => state?.sidebarData
  );
  const history = useHistory();
  const [open, setOpen] = useState<boolean>(openProp ?? false);

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuChange = (isLink: any, href: any): void => {
    if (isLink) {
      history.push(href);
    } else {
      dispatch(sidebarActionCreator.setSidebarMenu(value));
    }
  }

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = { paddingLeft };

  if (children) {
    return (
      <ListItem
        className={clsx(classes.item, className)}
        disableGutters
        key={title}
        disabled = {disabled}
        {...rest}
      >
        <Button
          className={classes.button}
          onClick={handleToggle}
          style={style}
          disabled = {disabled}
        >
          {Icon && (
            <Icon
              className={classes.icon}
              size="20"
            />
          )}
          <span className={classes.title}>
            {title}
          </span>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
        <Collapse in={open}>
          {children}
        </Collapse>
      </ListItem>
    );
  }

  return (
    <ListItem
      className={clsx(classes.itemLeaf, className)}
      disableGutters
      key={title}
      disabled = {disabled}
      {...rest}
    >
      <Button
        className={`${clsx(classes.buttonLeaf, `depth-${depth}`)} ${(sidebarData.selectedMenu === value || location.pathname === href) ? classes.active : ''}`}
        style={style}
        onClick={() => handleMenuChange(isLink, href)}
        disabled = {disabled}
      >
        {Icon && (
          <Icon
            className={classes.icon}
            size="20"
          />
        )}
        <span className={classes.title}>
          {title}
        </span>
        {Info && <Info />}
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  info: PropTypes.elementType,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired
};

NavItem.defaultProps = {
  open: false
};

export default NavItem;
