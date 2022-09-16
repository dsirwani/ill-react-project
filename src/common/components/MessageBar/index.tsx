import React from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getUserName } from '../../../utils/localStorageUtils';
import { useI18n } from '../../../hooks/useI18n';
import { useStyles } from './style';

interface MessageBarProps {
  showMsgBar: boolean;
}

const MessageBar: React.FC<MessageBarProps> = (props) => {
  const classes = useStyles(props.showMsgBar);
  const userName = getUserName();
  const i18n = useI18n();

  return (
    <div className={classes.messageBar}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h3" className={classes.greetContent}>
            {i18n._('Hello')} {userName}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{i18n._('Important Updates')}...</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MessageBar;
