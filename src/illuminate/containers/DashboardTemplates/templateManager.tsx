
import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../utils/injectReducer';
import { TemplateManagerState, TemplateDeleteState, CreateTemplateState } from './type';
import { dashboardTemplatesActionCreator } from '../../../utils/configureActionCreators';
import { isSuperAdmin, getUserRole } from '../../../utils/localStorageUtils';
import { useI18n } from '../../../hooks/useI18n';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { useStyles } from './style';
import useTemplateKPIColumns from '../../../hooks/useTemplateKPIColumns';
import LoaderOverScreen from '../../components/LoaderOverScreen';
import DuplicateTemplateModal from './DuplicateTemplateModal';

interface TemplateManagerProps {
  openTemplateManager: boolean;
  handleTMClose: () => any;
}

const TemplateManager: React.FC<TemplateManagerProps> = ({
  openTemplateManager,
  handleTMClose,
}) => {
  const classes = useStyles();
  const i18n = useI18n();
  const superAdmin = isSuperAdmin();
  const admin = getUserRole().includes('is_admin')
  const [action, setAction] = useState<Array<number>>([]);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [template, setTemplate] = useState<any>({});

  const dispatch = useDispatch();

  const { ifAdmin, setTemplateToViewEditDuplicate, setOpenCreateModal, initTemplateFields, setTemplateFields } = useTemplateKPIColumns();

  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : { client_id: '' };

  const handleActionChange = (e: any, index: number, template: any) => {
    let actionList: any = [...action];
    actionList[index] = e.target.value;
    setAction(actionList);
    handleModalAction(e.target.value, template)
    setTemplate(template)
  }

  const ifDeleteTemplateAllowed = () => {
    if (admin && template?.source == 'polarisio' || admin && template?.is_default == true) return false
    if (superAdmin && template?.is_default == true) return false
    return true
  }

  const getDeleteContent = () => {
    let content = '';
    if (admin && template?.source == 'polarisio') content = 'Admins cannot delete template that are "Polaris IO" only templates.';
    else if (admin && template?.is_default == true) content = 'Default templates are not allowed to be deleted.'
    else if (superAdmin && template?.is_default == true) content = 'Default template cannot be deleted. Kindly set another template as default.'
    else content = 'Confirm delete?'
    return content
  }

  const handleModalAction = (action: string, template: any) => {
    switch (action) {
      case 'Delete':
        setDeleteOpen(true);
        break;

      case 'View':
        handleTMClose();
        setOpenCreateModal(true);
        setTemplateToViewEditDuplicate(templateToViewEditDuplicate => ({ ...templateToViewEditDuplicate, template, viewTemplate: true }));
        break;

      case 'Edit':
        handleTMClose();
        setOpenCreateModal(true);
        setTemplateToViewEditDuplicate(templateToViewEditDuplicate => ({ ...templateToViewEditDuplicate, template, editTemplate: true }));
        break;

      case 'Duplicate':
        //handleTMClose();
        //setOpenCreateModal(true);
        setTemplateToViewEditDuplicate(templateToViewEditDuplicate => ({ ...templateToViewEditDuplicate, template, duplicateTemplate: true }));
        break;

      case 'Default':
        const { template_id, template_name } = template;
        const reqData = {
          client_id: clientId,
          template_type: 'kpi_dashboard',
          template_name,
          template_id,
          is_default: true,
        }
        dispatch(dashboardTemplatesActionCreator.createTemplateRequest(reqData, true))

      default: break;
    }
  }

  const {
    loading,
    error,
    data,
    errorMessage,
  }: TemplateManagerState = useSelector(
    (state: RootState) => state.dashboardTemplatesData?.templateManagerData
  );

  const {
    closeModal,
    loading: defaultLoader,
  }: CreateTemplateState = useSelector(
    (state: RootState) => state.dashboardTemplatesData?.createTemplateState
  );

  const TM_HEADERS = [i18n._('Name'), i18n._('Status'), i18n._('')];

  const ADMIN_ACTIONS = ['', i18n._('Edit'), i18n._('Duplicate'), i18n._('Delete'), i18n._('Default')]
  const VIEW_ACTION = [i18n._('View')]
  const ACTIONS = ifAdmin() ? ADMIN_ACTIONS : VIEW_ACTION

  const getStatus = (status: Number) => {
    switch (status) {
      case 0: return 'Ready'
      case 1: return 'Generating'
      default: return 'N/A'
    }
  }

  const handleDelModalClose = () => {
    setDeleteOpen(false);
    setAction([])
  };

  const handleDelete = () => {
    dispatch(dashboardTemplatesActionCreator.templateDeleteRequest({
      template_id: template.template_id,
      template_name: template.template_name,
      template_type: "kpi_dashboard",
      client_id: clientId
    }));
    handleDelModalClose()
  };

  const ifRestrictedAction = (action: string, templateStatus: number, isDefault: boolean) => {
    if ((action === 'Edit' || action === 'Delete') && ( templateStatus === 1 || isDefault )) return true
    return false
  }

  useEffect((): void => {
    if (openTemplateManager) {
      dispatch(dashboardTemplatesActionCreator.templateManagerRequest({}));
    }
  }, [openTemplateManager]);

  const { data: deleteData }: TemplateDeleteState = useSelector(
    (state: RootState) => state.dashboardTemplatesData?.templateDeleteData
  );

  useEffect(() => {
    if (deleteData?.status == 'success') {
      dispatch(dashboardTemplatesActionCreator.templateManagerRequest({}));
    }
  }, [deleteData]);

  useEffect(() => {
    if(closeModal){
      handleTMClose();
    }
  },[closeModal])

  return (
    <React.Fragment>
      {defaultLoader ? <LoaderOverScreen /> : null}
      <Dialog
        PaperProps={{ classes: { root: classes.templateManagerdialogBox } }}
        open={openTemplateManager}
        onClose={handleTMClose}
        aria-labelledby="responsive-dialog-title"
        disableEscapeKeyDown
        disableBackdropClick
      >
        <DialogTitle id="responsive-dialog-title">
          <div className={classes.templateTitle}>{i18n._('Template')} {ifAdmin() ? i18n._('Manager') : i18n._('Viewer')}</div>
        </DialogTitle>
        {loading ? <Loader /> : null}
        {data?.items?.length && (
          <DialogContent color="primary">
            <div className={classes.templateType}>KPI Dashboard</div>
            <div className={classes.tableContainerWrapper}>
              <TableContainer className={classes.tableContainer}>
                <Table size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow className={classes.headerRow}>
                      {TM_HEADERS.map((header: any, i: number) => {
                        return <TableCell className={classes.tableHeaderCellRoot} key={i}>{header}</TableCell>
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.items.map((row: any, i: number) => (
                      <TableRow
                        key={row.template_id}
                        classes={{ root: classes.tableCellElement }}
                      >
                        <TableCell scope="row" >
                          {row.template_name}
                        </TableCell>
                        <TableCell>
                          {getStatus(row.template_status)}
                        </TableCell>
                        <TableCell scope="row">
                          <FormControl className={classes.formControl}>
                            <InputLabel id="template-action-label">Action</InputLabel>
                            <Select
                              labelId="template-action-label"
                              id="template-action-select"
                              className={classes.selectedItem}
                              value={action?.[i] ?? ''}
                              onChange={(e) => handleActionChange(e, i, row)}
                              classes={{ icon: classes.ddArowCls }}
                            >
                              {ACTIONS.map((action: string) => {
                                return (
                                  <MenuItem
                                    className={classes.selectBox}
                                    key={action}
                                    value={action}
                                    disabled={ifRestrictedAction(action, row.template_status, row.is_default)}
                                  >
                                    {action}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </DialogContent>)
        }
        {error ? <Error errorMessage={errorMessage} /> : null}
        <DialogActions>
          <Button variant="outlined" color="primary" className={classes.outlineButton} onClick={handleTMClose}>
            {i18n._('Cancel')}
          </Button>
          {ifAdmin() &&
            <Button
              variant="contained"
              color="primary"
              className={classes.themeButton}
              onClick={() => {
                setTemplateFields({...initTemplateFields});
                handleTMClose();
                setOpenCreateModal(true);
              }}
            >
              {i18n._('Create new template')}
            </Button>}
        </DialogActions>
      </Dialog>

      <Dialog
        // PaperProps={{ classes: { root: classes.FilterDeleteDialogBox } }}
        open={deleteOpen}
        onClose={handleDelModalClose}
        aria-labelledby="res-delete-dialog-title"
        disableEscapeKeyDown
        disableBackdropClick
      >
        <DialogContent color="primary" >
          {getDeleteContent()}
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="primary" className={classes.outlineButton} onClick={handleDelModalClose}>
            {i18n._('Cancel')}
          </Button>
          {ifDeleteTemplateAllowed() && <Button variant="contained" color="primary" className={classes.themeButton} onClick={handleDelete} >
            {i18n._('Submit')}
          </Button>}
        </DialogActions>
      </Dialog>
      <DuplicateTemplateModal />
    </React.Fragment>
  )
};

export default TemplateManager;