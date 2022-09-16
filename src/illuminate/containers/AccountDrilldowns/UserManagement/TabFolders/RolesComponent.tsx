
import React from 'react';
import {
  Card,
  makeStyles,
  Box,
  Button,
  Divider,
  CardHeader,
  FormControlLabel,
  List,
  ListItem,
  Checkbox
} from '@material-ui/core';
import clsx from 'clsx';


interface RolesInterface {
  initMngmntPermission: any,
  handleEdit: any
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
}));



const RolesComponents = (props: RolesInterface
) => {
  const classes = useStyles();
  const { initMngmntPermission, handleEdit } = props;

  return (
    <React.Fragment >
      <Card
        className={clsx(classes.root)}
      >
        <CardHeader title="Set Roles" />
        <Divider />
        <div>
          <List className={classes.listRoot} subheader={<li />}>
            {Object.keys(initMngmntPermission).map((role) => (
              <ListItem
                key={role}
                classes={{ root: classes.listText }}
              >
                <FormControlLabel
                  control={(
                    <Checkbox disabled />
                  )}
                  label={`${initMngmntPermission[role].label}`}
                />
              </ListItem>
            ))
            }
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

export default RolesComponents;