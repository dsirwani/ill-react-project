import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import { useStyles } from './style';
import { useI18n } from '../../../hooks/useI18n';

const Loader: React.FC = () => {
  const classes = useStyles();
  const i18n = useI18n();

  return (
    <div className={classes.root}>
      <CircularProgress
        classes={{ root: classes.loaderRoot }}
        disableShrink={true}
        size={44}
      />
      <Typography>{i18n._('LOADING...')}</Typography>
    </div>
  );
};

export default Loader;
