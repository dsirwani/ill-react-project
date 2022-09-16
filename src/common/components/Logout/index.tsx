import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import cognitoUtils from '../../../utils/cognitoUtils';
import { useStyles } from './style';

export interface Props {}

const Logout: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Paper className={classes.paper}>
          <Grid item>
            <img
              width="350"
              height="220"
              src="assets/brand_logo/polaris-io-brand-logo.jpg"
              alt="brand logo"
            />
          </Grid>
          <Grid item className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              Signed out successfully
            </Typography>
            <a
              className={classes.reLoginLink}
              href={cognitoUtils.getCognitoSignInUri()}
            >
              Re-Login
            </a>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Logout;
