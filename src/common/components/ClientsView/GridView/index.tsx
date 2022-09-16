import React from 'react';
import { Card, CardContent, Avatar, Typography, Tooltip } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './style';

interface IClientsView {
  clientsListData: [];
  handleSelectedAccount: any;
}

const ClientsGridView: React.FC<IClientsView> = ({
  clientsListData,
  handleSelectedAccount,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.gridContent}>
      {clientsListData &&
        clientsListData.map((client: any, idx: number) => {
          return (
            <Card
              className={clsx(classes.root, classes.cursorPointer)}
              key={`card-${client.client_id}`}
              onClick={(event) => handleSelectedAccount(event, client)}
            >
            {/*   <CardHeader
                classes={{
                  root: classes.cardHeaderRoot,
                  avatar: classes.cardAvatar,
                  title: classes.cardTitle,
                }}
                avatar={
                  <Avatar
                    aria-label={client.client_name}
                    alt={client.client_name}
                    src={client.s3_logo_link}
                  />
                }
                title={client.client_name}
              /> */}
              <CardContent
                 classes={{ root: classes.cardContent }}
               >
                 <Avatar
                    aria-label={client.client_name}
                    alt={client.client_name}
                    src={client.s3_logo_link}
                    classes = {{root: classes.cardAvatar}}
                  />
                  <Tooltip title={client.client_name} placement="top">
                    <Typography 
                      variant = 'body2' 
                      classes = {{root: classes.cardTitle,}}
                      noWrap = {true}
                    >
                        {client.client_name}
                    </Typography>
                  </Tooltip>
               </CardContent>
            </Card>
          );
        })}
    </div>
  );
};

export default ClientsGridView;