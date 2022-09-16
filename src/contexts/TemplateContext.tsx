import React, { createContext, FC, ReactNode, Dispatch, SetStateAction } from 'react';
import { getUserRole, isSuperAdmin } from '../utils/localStorageUtils';

export interface ITemplateContext {
  columns: Array<number>,
  MAX_COLUMNS: number,
  allowToAddCol: boolean
}

type ITemplateViewEditDuplicate = {
  template: any;
  viewTemplate?: boolean;
  editTemplate?: boolean;
  duplicateTemplate?: boolean;
}

type ITemplateFields = {
  template_name: string;  
  pio_modify: boolean;
  template_type: string;
  source:string;
};

type TemplateContextValue = {
  templateColumns: ITemplateContext;
  setTemplateColumns: Dispatch<SetStateAction<ITemplateContext>>;
  openCreateModal: boolean;
  setOpenCreateModal: Dispatch<SetStateAction<boolean>>;
  ifAdmin:  () => boolean;
  templateToViewEditDuplicate: ITemplateViewEditDuplicate;
  setTemplateToViewEditDuplicate: Dispatch<SetStateAction<ITemplateViewEditDuplicate>>;
  templateFields: ITemplateFields;
  setTemplateFields: Dispatch<SetStateAction<ITemplateFields>>;
  initTemplateFields: ITemplateFields;
};

interface ITemplateContextProvider {
  children: ReactNode;
}

const initTemplateFields: ITemplateFields = {
  template_name: '',
  pio_modify: false,
  template_type: 'kpi_dashboard',
  source:"client",
};

const tempCntxtDefaultVal: TemplateContextValue = {
  templateColumns:{
    MAX_COLUMNS: 15,
    columns: [0],
    allowToAddCol: true,
  },
  setTemplateColumns: templateColumns => {},
  openCreateModal: false,
  setOpenCreateModal: () => {},
  ifAdmin: () => false,
  templateToViewEditDuplicate: { template: {}, viewTemplate: false, editTemplate: false, duplicateTemplate: false},
  setTemplateToViewEditDuplicate: () => {},
  templateFields: initTemplateFields,
  setTemplateFields: () => {},
  initTemplateFields
};

const TemplateContext = createContext<TemplateContextValue>({
  ...tempCntxtDefaultVal,
});

export const TemplateContextProvider: FC<ITemplateContextProvider> = ({children}): JSX.Element => {

  const [openCreateModal, setOpenCreateModal] = React.useState(false);
  const [templateFields, setTemplateFields] = React.useState(initTemplateFields)
  const [templateToViewEditDuplicate, setTemplateToViewEditDuplicate] = React.useState<ITemplateViewEditDuplicate>({template: null, viewTemplate: false, editTemplate: false, duplicateTemplate: false});

  const superAdmin = isSuperAdmin();
  const admin = getUserRole().includes('is_admin');

  const ifAdmin = () => {
    if (superAdmin || admin) return true
    return false
  }

  return (
    <TemplateContext.Provider value = {{
      ...tempCntxtDefaultVal,
      openCreateModal,
      setOpenCreateModal,
      ifAdmin,
      templateToViewEditDuplicate,
      setTemplateToViewEditDuplicate,
      templateFields,
      setTemplateFields,
      initTemplateFields
    }}>
      {children}
    </TemplateContext.Provider>
  );
}

export default TemplateContext;