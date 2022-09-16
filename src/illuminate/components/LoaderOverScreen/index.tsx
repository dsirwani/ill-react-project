import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useStyles } from './style';

const LoaderOverScreen: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress
        classes={{ root: classes.loaderRoot }}
        disableShrink={true}
      />
    </div>
  );
};

export default LoaderOverScreen;
