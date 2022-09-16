import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Tooltip,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './style';

const CustomCardHeader: React.FC<{ client: any; classes: any }> = ({
  client,
  classes,
}) => (
  <CardHeader
    classes={{
      root: classes.cardHeaderRoot,
      avatar: classes.cardAvatar,
      title: classes.cardTitle,
      content: classes.cardHeaderContent,
    }}
    avatar={
      <Avatar
        aria-label={client.client_name}
        alt={client.client_name}
        src={client.logo_link}
      />
    }
    //title={`${client.client_name} (subsidiary)`}
    title = {
      <Tooltip title={client.client_name} placement="top">
      <Typography 
        variant = 'body2' 
        classes = {{root: classes.cardTitle,}}
        noWrap = {true}
      >
          {client.client_name} (subsidiary)
      </Typography>
    </Tooltip>
    }
  />
);

const SubsidiaryAccountCard: React.FC<{ client: any, handleSubsidiaryDblClick: any }> = ({
  client, handleSubsidiaryDblClick
}) => {
  const classes = useStyles();

  return (
    <>
      <Card
        className={clsx(classes.root, classes.cursorPointer)}
        key={`card-${client.client_id}`}
        onClick={(event) =>
          handleSubsidiaryDblClick(event, client)
        }
      >
        <CustomCardHeader client={client} classes={classes} />
        <CardContent classes={{ root: classes.cardContent }}>
        </CardContent>
      </Card>
    </>
  );
};

export default SubsidiaryAccountCard;
