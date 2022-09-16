
import React from 'react';
import {
  // Typography,
  Grid,
  // Avatar,
  Card,
  CardContent,
  makeStyles,
  Box,
  Switch,
  // CardActions,
  Button,
  Divider,
  CardHeader,
  TextField,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Checkbox
} from '@material-ui/core';
import clsx from 'clsx';
import { useI18n } from '../../../../../hooks/useI18n';


interface AccountMembershipInterface {
  allAccounts: any,
  handleChange: any,
  handleEdit: any,
  userProfile: any
}

const useStyles = makeStyles((theme) => ({
  root: {},
  name: {
    marginTop: theme.spacing(1)
  },

  checkboxAction: {
    marginLeft: theme.spacing(2)
  },

  btnDiv: {
    marginTop: '18px',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  disabledBtn: {
    margin: '0 2%',
    cursor: 'not-allowed',
  },

  listRoot: {
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },

  listText: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '48px',
    letterSpacing: '0.47px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
  },
  addAccount: {
    maxWidth: '600px'
  }
}));



const AccountMembershipComponent = (props: AccountMembershipInterface
) => {
  const classes = useStyles();
  const { allAccounts, handleChange, handleEdit, userProfile } = props;
  const i18n = useI18n();

  return (
    <React.Fragment >

      <Card
        className={clsx(classes.root)}
      >
        <CardHeader title="Assign Accounts" />
        <Divider />
        <CardContent>
          <div className={classes.addAccount}>
            <div>
              <TextField
                id="find-account-input"
                label={i18n._('Add an account')}
                disabled={true}
                fullWidth={true}
                defaultValue="Add an account"
              />
            </div>

            <div className={classes.btnDiv}>
              <Button classes={{ root: classes.disabledBtn }} variant="contained">
                {i18n._('REMOVE')}
              </Button>
              <Button classes={{ root: classes.disabledBtn }} variant="contained">
                {i18n._('ADD')}
              </Button>
            </div>
          </div>
          <Grid
            item
            md={12}
            xs={12}
          >
            <FormControlLabel
              control={
                <Switch
                  checked={allAccounts}
                  onChange={handleChange}
                  name="allAccounts"
                  disabled
                />
              }
              label={i18n._('All accounts')}
            />
          </Grid>
        </CardContent>
        <Divider />
        <div>
          <List className={classes.listRoot} subheader={<li />}>
            {userProfile?.account_details?.length ? (
              userProfile?.account_details?.map((account: any) => (
                <ListItem
                  key={`${account.account_id}`}
                  classes={{ root: classes.listText }}
                >
                  <FormControlLabel
                    control={(
                      <Checkbox disabled />
                    )}
                    label={`${account.account_name}`}
                  />
                  <Divider />
                </ListItem>
              ))
            ) : (
                <ListItem
                  key={`no-accounts`}
                  classes={{ root: classes.listText }}
                >
                  <ListItemText primary={i18n._('No Accounts available')} />
                </ListItem>
              )}
          </List>

        </div>
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
            disabled
          >
            Save Changes
              </Button>
        </Box>
      </Card>
    </React.Fragment >
  )
};

export default AccountMembershipComponent;