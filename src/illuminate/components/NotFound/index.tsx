import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './style';
import { useI18n } from '../../../hooks/useI18n';

const NotFound: React.FC = () => {
  const classes = useStyles();
  const i18n = useI18n();

  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant="h1">404</Typography>
      <Typography className={classes.subHeader} variant="h5">{i18n._('Page Not Found')}</Typography>
    </div>
  );
};

export default NotFound;