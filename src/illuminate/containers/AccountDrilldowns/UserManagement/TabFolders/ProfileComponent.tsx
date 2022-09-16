
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
} from '@material-ui/core';
import clsx from 'clsx';
import Validator from '../../../../../utils/validator';


interface ProfileComponentInterface {
  data: any,
  userProfile: any,
  setEditUserProfile: Function,
  textFields: any,
  handleInputChange: any,
  inputFields: any,
  handleEdit: any
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
  textFieldMargin: {
    margin: '5% 0',
  },
}));



const ProfileComponent = (props: ProfileComponentInterface) => {
  const classes = useStyles();

  const { userProfile, data, setEditUserProfile, textFields, inputFields, handleInputChange, handleEdit } = props;

  const validator = new Validator({
    first_name: ['required'],
    last_name: ['required'],
  });


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
                  src={`${(data && data.data && data.data.profile_image_url) ? data.data.profile_image_url : (userProfile && userProfile.user_data && userProfile.user_data.profile_image_url) ? userProfile.user_data.profile_image_url : '/broken-image.jpg'}`} />
                <Typography
                  className={classes.name}
                  color="textPrimary"
                  gutterBottom
                  variant="h4"
                >
                  {
                    userProfile && userProfile.user_data ? `${userProfile.user_data.first_name} ${userProfile.user_data.last_name}`:''
                  }
                </Typography>

              </Box>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="text"
                onClick={() => setEditUserProfile(true)}
              >

                Upload picture
             </Button>
            </CardActions>
          </Card>
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
            <CardHeader title="Profile" />
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
                  {Object.keys(textFields).map((textField, idx) => (
                    <div className={classes.textFieldMargin} key={textField}>
                      <TextField
                        id={textFields[textField].id}
                        label={textFields[textField].label}
                        error={validator.fields[textField] ? validator.fields[textField].errorMsg !== '' : false}
                        helperText={validator.fields[textField] ? validator.fields[textField].errorMsg : null}
                        name={textFields[textField].name}
                        InputProps={{
                          readOnly: Boolean(!textFields[textField].editable),
                          autoComplete: 'off'
                        }}
                        variant="outlined"
                        fullWidth={true}
                        value={inputFields[textField]}
                        onChange={handleInputChange}
                      />
                    </div>
                  ))}

                </Grid>
              </Grid>
            </CardContent>
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
                onClick={handleEdit}
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