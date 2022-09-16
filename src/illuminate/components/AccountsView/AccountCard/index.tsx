import React, { Fragment } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Tooltip
} from '@material-ui/core';
import clsx from 'clsx';
import { useI18n } from '../../../../hooks/useI18n';
import { useStyles } from './style';

const CustomCardHeader: React.FC<{ account: any; classes: any }> = ({
  account,
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
          aria-label={account.account_name}
          alt={account.account_name}
          src={account.logo_link}
        />
      }
      //title={account.account_name}
      title={
        <Tooltip title={account.account_name} placement="top">
          <Typography
            variant='body2'
            classes={{ root: classes.cardTitle, }}
            noWrap={true}
          >
            {account.account_name}
          </Typography>
        </Tooltip>
      }
    />
  );

const AccountCard: React.FC<{ account: any; handleSelectedAccount: any, headerSecondLine: any }> = ({
  headerSecondLine,
  account,
  handleSelectedAccount,
}) => {
  const classes = useStyles();
  const i18n = useI18n();

  const getHeader = (column: string) => {
    let period;
    headerSecondLine.map((key: any) => {
      if (key.column == column) {
        period = key.period_label
      }
    })
    return period
  }

  return (
    <>
      {account.application_status === 'A' ? (
        <Card
          className={clsx(classes.root, classes.cursorPointer)}
          key={`card-${account.account_id}`}
          onClick={(event) =>
            handleSelectedAccount(event, account.account_id, account.account_name, account.logo_link)
          }
        >
          <CustomCardHeader account={account} classes={classes} />
          <CardContent classes={{ root: classes.cardContent }}>
            {account?.columns.map((key: any, idx: number) => (
              <Fragment key={idx.toString()}>
                <div
                  className={classes.contentData}
                  key={`${account.account_id}-row-${idx}`}
                >
                  <div className={classes.colHeader}>
                    <div>{key.type}</div>
                    <div>{getHeader(key.column)}</div>
                  </div>
                  <Tooltip title={key.value} placement="bottom">
                    <div className={classes.colData}>
                      {key.value}
                    </div>
                  </Tooltip>
                </div>
                {idx !== account.columns.length - 1 && (
                  <img
                    key={`divider-${idx}`}
                    src="/assets/Icon_assets/svg/verticalDivider.svg"
                    alt="vertical Divider"
                  />
                )}
              </Fragment>
            ))}
          </CardContent>
        </Card>
      ) : account.application_status === 'P' ? (
        <Card className={classes.root} key={`card-${account.account_id}`}>
          <CustomCardHeader account={account} classes={classes} />
          <CardContent classes={{ root: classes.cardContent }}>
            <div className={classes.pendingAcc}>
              <Typography variant="h4">{i18n._('Application Pending')}</Typography>
              <Typography variant="subtitle2">{i18n._('Waiting for Approval')}</Typography>
            </div>
          </CardContent>
        </Card>
      ) : account.application_status === 'D' ? (
        <Card className={classes.root} key={`card-${account.account_id}`}>
          <CustomCardHeader account={account} classes={classes} />
          <CardContent classes={{ root: classes.cardContent }}>
            <div className={classes.pendingAcc}>
              <Typography variant="h4">{i18n._('Application Denied')}</Typography>
            </div>
          </CardContent>
        </Card>
      ) : account.application_status === null ? (
        <Card className={classes.root} key={`card-${account.account_id}`}>
          <CustomCardHeader account={account} classes={classes} />
          <CardContent classes={{ root: classes.cardContent }}>
            <div className={classes.pendingAcc}>
              <Typography variant="h4">{i18n._('Apply for Membership')}</Typography>
            </div>
          </CardContent>
        </Card>
      )
              : null
      }
    </>
  );
};

export default AccountCard;