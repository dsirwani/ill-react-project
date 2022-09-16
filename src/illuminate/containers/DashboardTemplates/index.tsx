import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useStyles } from './style';
import PreConfiguredTemplates from './preConfiguredTemplates';
import TemplateColumnsModal from './TemplateColumnsModal/index';
import TemplateManager from './templateManager';

interface DashboardTemplatesProps {
  handleTemplateApply: (data: number) => void;
}

const DashboardTemplates: React.FC<DashboardTemplatesProps> = ({
  handleTemplateApply
}) => {
  const [openTemplateManager, setOpenTemplateManager] = useState(false);
  const classes = useStyles();
  const setSelectedTemplate = (templateId: number) => {
    handleTemplateApply(templateId)
  }

  const handleTMClose = () => {
    setOpenTemplateManager(false);
  }

  const handleTMOpen = () => {
    setOpenTemplateManager(true);
  }

  return (
    <div className={classes.root}>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <PreConfiguredTemplates setSelectedTemplate={setSelectedTemplate} />
        <TemplateManager
          openTemplateManager={openTemplateManager}
          handleTMClose={handleTMClose}
        />
        <TemplateColumnsModal/>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleTMOpen}
        >
          <MoreVertIcon />
        </IconButton>
      </div>
    </div >
  );
};


export default DashboardTemplates;