import React
  // { useEffect } 
  from 'react';
import {
  Paper,
  Grid,
  Avatar,
  Badge,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from "react-router-dom";
import { RootState } from '../../../../utils/injectReducer';
import { ClientDetailsState } from './type';
import { clientDetailsActionCreator } from '../../../../utils/configureActionCreators';
import { useI18n } from '../../../../hooks/useI18n';
import LoaderOverScreen from '../../../components/LoaderOverScreen';
import Error from '../../../components/Error';
import AntSwitch from './AntSwitch';
import EmailDomainTable from './EmailDomain';
import { useStyles } from './style';
import { isObjectEmpty } from '../../../../utils/miscUtils';
import CheckboxCheckedIcon from '../../../components/SVGIcons/CheckboxCheckedIcon';

interface ClientDetailsProps {
}

const SmallAvatar = withStyles((theme: Theme) =>
createStyles({
  root: {
      width: 40,
      height: 40,
      background: `${theme.palette.background.paper}`,
    },

    colorDefault: {
      color: '#a4a3a6',
      background: '#fff',
    },
  })
)(Avatar);

const ClientDetails = (props: ClientDetailsProps) => {
  const classes = useStyles();
  const { client_id: clientId } = localStorage.getItem('selectedClient')
  ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
  : '';
  // const [state, setState] = React.useState({
  //   checkedC: true,
  //   checkedD: true,
  // });
  const i18n = useI18n();

  // const { accountId } = useParams();

  const dispatch = useDispatch();
  const { loading, error, data, errorMessage }: ClientDetailsState = useSelector((state: RootState) => state.clientDetailsData?.clientDetailsData);

  React.useEffect((): void => {
    dispatch(clientDetailsActionCreator.clientDetailsRequest({ client_id: clientId }));
  }, []);

  // const handleChange = (event: any) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  return (
    <div className={classes.root}>
      {loading ? <LoaderOverScreen /> : null}
      {data &&
        <Paper className={classes.paper}>
          <Grid item className={classes.iconSection}>
            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              badgeContent={<SmallAvatar alt="Edit"><CreateIcon /></SmallAvatar>}
            >
              <Avatar src={data?.client_data?.s3_logo_link} className={classes.largeAvatar} />
            </Badge>
          </Grid>
          <Grid item className={classes.clientSection}>
            <TextField
              fullWidth
              id="client-name-field"
              className={classes.textField}
              label={i18n._("Client Name")}
              defaultValue={data?.client_data?.client_name}
              variant="outlined"
              InputLabelProps={{
                className: classes.helperText,
              }}
              InputProps={{
                readOnly: true,
                classes: {
                  focused: classes.notchedOutline,
                  notchedOutline: classes.notchedOutline,
                }
              }}
            />
            <div className={classes.clientContent}>{i18n._("Landing URL")}: {data?.client_data?.landing_page_url}</div>
            <div className={classes.clientContent}>{i18n._("Client ID")}: {data?.client_data?.client_id}</div>
            {
              data?.parent_client && !isObjectEmpty(data.parent_client) &&
              <>
                <div className={classes.clientContent}>{i18n._("Child of")}:</div>
                <div className = { classes.parentData}>
                  <SmallAvatar src={data?.parent_client?.s3_logo_link}/>
                  <div className = {classes.parentName}> {data?.parent_client?.client_name}</div>
                </div>
                <div>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        edge="start"
                        checked={data?.parent_client?.kpi_roll_up}
                        tabIndex={-1}
                        disableRipple
                        disabled
                        inputProps={{ 'aria-labelledby': 'subsidiary of parent' }}
                        checkedIcon={<CheckboxCheckedIcon />}
                      />
                    }
                    label={i18n._('This client is a subsidiary of the parent, so KPIs must roll up')}
                  />
                </FormGroup>
                </div>
              </>
             }
          </Grid>
          <Grid item className={classes.caSection}>
            <Typography className={classes.headerBlock} variant="h6" align="left" component="h2" gutterBottom>
              {i18n._('Client Access')}
            </Typography>
            <div className={classes.switchControl}>
              <AntSwitch checked={data?.client_data?.team_platform_self_subscribe ? true : false} name="caSelfSubscribe" />
              <span>{i18n._('The clients team members can self-subscribe to the platform')}</span>
            </div>
            <div className={classes.switchControl}>
              <AntSwitch checked={data?.client_data?.team_platform_subscribers_need_approval ? true : false} name="caNeedApproval" />
              <span>{i18n._('The clients team self-subscribers need approval from admin')}</span>
            </div>
            <div className={classes.switchControl}>
              <AntSwitch checked={data?.client_data?.team_platform_are_allowed_anonymized_surveys ? true : false} name="caAnonymizedSurveys" />
              <span>{i18n._('The clients team members are allowed to opt-in to anonymized surveys')}</span>
            </div>
          </Grid>
          <Grid item>
            <EmailDomainTable emailDomains={data?.email_patterns} />
          </Grid>
        </Paper>
      }
      {error ? <Error errorMessage={errorMessage} /> : null}
    </div>
  );
};

export default ClientDetails;
