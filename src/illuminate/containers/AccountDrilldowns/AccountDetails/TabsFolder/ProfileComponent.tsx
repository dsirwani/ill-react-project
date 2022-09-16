
import React from 'react';
import {
  Typography,
  Grid,
  Avatar,
  Card,
  CardContent,
  makeStyles,
  Box,
  CardActions,
  Button,
  Divider,
  CardHeader,
  TextField,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import { useI18n } from '../../../../../hooks/useI18n';
import clsx from 'clsx';


interface ProfileComponentInterface {
  data: any,
}

const useStyles = makeStyles((theme) => ({
  root: {},
  name: {
    marginTop: theme.spacing(1)
  },
  avatar: {
    height: 100,
    width: 100
  },
  checkboxAction: {
    marginLeft: theme.spacing(2)
  },
}));



const ProfileComponent = (props: ProfileComponentInterface) => {
  const classes = useStyles();
  const i18n = useI18n();
  const getPIOIdentifier = (value: string) => {
    return `${i18n._('PIO IDENTIFIER')}: ${value}`;
  };
  
  return (
    <React.Fragment>
      <Grid
        className={clsx(classes.root)}
        container
        spacing={3}

      >
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <Card
            className={clsx(classes.root)}
          >
            <CardContent>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                textAlign="center"
              >
                <Avatar
                  className={classes.avatar}
                  src={props.data?.account_data?.logo_link}
                />
                <Typography
                  className={classes.name}
                  color="textPrimary"
                  gutterBottom
                  variant="h3"
                >
                  {props.data?.account_data?.account_name}
                </Typography>
                {/* <Typography
                  className={classes.name}
                  color="textPrimary"
                  gutterBottom
                  variant="h6"
                >

                  {props.data?.account_data?.description}
                </Typography> */}
              </Box>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="text"
                style={{ cursor: 'no-drop' }}
              >
                Upload picture
             </Button>
            </CardActions>
          </Card>
          {
            props.data?.account_data?.description ?
              <Card
                className={clsx(classes.root)}
                style={{ marginTop: "30px", maxHeight: '150px', overflowY: 'scroll' }}
              >
                <CardHeader title="Description" />
                <Divider />
                <CardContent>
                  <Box
                    display="flex"
                    // alignItems="center"
                    flexDirection="column"
                  // textAlign="center"
                  >
                    <Typography
                      className={classes.name}
                      color="textPrimary"
                      gutterBottom
                      variant="h6"
                    >

                      {props.data?.account_data?.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card> : ''
          }

        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xl={9}
          xs={12}
        >
          <Card
            className={clsx(classes.root)}
          >
            <CardHeader title="Account Info" />
            <Divider />
            <CardContent>
              <Grid
                container
                spacing={4}
              >
                <Grid
                  item
                  md={12}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    id="account-name-field"
                    label={i18n._('Account Name')}
                    defaultValue={props.data?.account_data?.account_name}
                    variant="outlined"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                  <Typography variant="h6">
                    {getPIOIdentifier(props.data?.account_data?.pio_identifier)}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <Box>
              <div className={classes.checkboxAction}>
                <FormControlLabel
                  control={(
                    <Checkbox disabled />
                  )}
                  label={i18n._('Team members can self-register')}
                />
              </div>
              <Divider />
              <div className={classes.checkboxAction}>
                <FormControlLabel
                  control={(
                    <Checkbox disabled />
                  )}
                  label={i18n._('Team members require approval from self-registration')}
                />
              </div>
              <Divider />
              <div className={classes.checkboxAction}>
                <FormControlLabel
                  control={(
                    <Checkbox disabled />
                  )}
                  label={i18n._('Team members can self-register with valid customer domain')}
                />
              </div>
              <Divider />
              <div className={classes.checkboxAction}>
                <FormControlLabel
                  control={(
                    <Checkbox disabled />
                  )}
                  label={i18n._('Customers require approval from self-registration')}
                />
              </div>
            </Box>


            <Divider />
            <Box
              p={2}
              display="flex"
              justifyContent="flex-end"
            >
              <Button
                color="secondary"
                type="submit"
                variant="contained"
                disabled
              >
                Save Changes
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment >
  )
};

export default ProfileComponent;