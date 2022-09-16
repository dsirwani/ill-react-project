import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { useStyles } from './style';

interface HeaderTitleBarProps {
  headerTitle: string;
}

const HeaderTitleBar = (props: HeaderTitleBarProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.headerTitleBar}>
        <Link to="/" title="Back to Dashboard">
          <ArrowBackRoundedIcon
            color="primary"
            className={classes.nav}
            fontSize="large"
          />
        </Link>
        <Typography variant="h4" className={classes.titleContent}>
          {props.headerTitle}
        </Typography>
      </div>
    </div>
  );
};

export default HeaderTitleBar;
