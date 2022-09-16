import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Modal,
  Backdrop,
  Fade,
} from '@material-ui/core';
import { UserOnboardingStatusState } from '../../../common/containers/UserOnboarding/type';
import StatusAlert from '../../../common/components/UserOnboarding/StatusAlert';
import LoaderOverScreen from '../../../illuminate/components/LoaderOverScreen/index';
import { getClientRedirectURL, getURLProtocol } from '../../../utils/miscUtils';
import { RootState } from '../../../utils/injectReducer';
import { useDispatch } from 'react-redux';
import { ClientDataState } from './type';
import {
  accountListActionCreator, UserOnBoardingActionCreator
} from '../../../utils/configureActionCreators';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { useStyles } from './style';

interface PlatformViewProps {
  openModal: boolean;
  handleClose: any;
}

const PlatformView: React.FC<PlatformViewProps> = ({
  openModal,
  handleClose,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isInvalidOnboardingStatus, setIsInvalidOnBoardingStatus] = useState(false);

  const { loading, error, data, errorMessage }: ClientDataState = useSelector(
    (state: RootState) => state?.clientData
  );

  const userOnboardingData: UserOnboardingStatusState = useSelector(
    (state: RootState) => state?.userOnboardingData
  );

  useEffect(() => {
    if(!userOnboardingData.loading && userOnboardingData.data !== null && !userOnboardingData.error) {
      let redirectUrl;
      const urlProtocol = getURLProtocol();
      (async function anyNameFunction() {
        redirectUrl = await getClientRedirectURL();
        if (window.location.host.split('.')[0] !== 'localhost:3000') {
          localStorage.clear();
        }
        handleClose();
        window.location.href = urlProtocol + redirectUrl;
      })();
    } else if (!userOnboardingData.loading && userOnboardingData.error && userOnboardingData.errorMessage) {
      localStorage.removeItem('selectedClient');
      setIsInvalidOnBoardingStatus(true);
    }
  }, [userOnboardingData]);

  const handleSelectClient = (
    evnt: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>,
    selectedClient: any
  ) => {
    evnt.preventDefault();
    //dispatch action for user info API
    localStorage.setItem('selectedClient', JSON.stringify(selectedClient));
    dispatch(UserOnBoardingActionCreator.getUserOnboardingStatus());
    setClientImage();
    setEnabledApps();
  };

  const setClientImage = () => {
    const { s3_logo_link: clientLogo } = localStorage.getItem('selectedClient')
      ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
      : '';
    dispatch(accountListActionCreator.setClientImage(clientLogo));
  }

  const setEnabledApps = () => {
    const { enabled_apps: enabledApps } = localStorage.getItem('selectedClient')
      ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
      : '';
    dispatch(accountListActionCreator.setEnableApps(enabledApps));
  }

  return (
    <div className={classes.root}>
      {loading ? <Loader /> : null}
      {userOnboardingData.loading && <LoaderOverScreen />}
      {isInvalidOnboardingStatus && <StatusAlert errorMessage={userOnboardingData.errorMessage} />}
      {data?.length && (
        <Modal
          aria-labelledby="client-list-modal-title"
          aria-describedby="client-list-modal-description"
          className={classes.modal}
          open={openModal}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          disableBackdropClick
          BackdropProps={{
            timeout: 500,
          }}
        >
          <React.Fragment>
            <Fade in={openModal}>
              <div className={classes.paper}>
                <div className={classes.headerRectangle}>
                  <div className={classes.blueOpalRectange}></div>
                </div>
                <TableContainer className={classes.tableContainer}>
                  <Table size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell className={classes.tableHeader}>
                          Choose a Platform:
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((row: any, i: number) => (
                        <TableRow
                          key={row.client_id}
                          hover={true}
                        >
                          <TableCell
                            onClick={(evnt) => {
                              handleSelectClient(evnt, row);
                            }}
                            scope="row"
                            className={classes.tableCellElement}
                          >
                            {row.client_name}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Fade>
          </React.Fragment>
        </Modal>
      )}
      {error ? <Error errorMessage={errorMessage} /> : null}
    </div>
  );
};

export default PlatformView;
