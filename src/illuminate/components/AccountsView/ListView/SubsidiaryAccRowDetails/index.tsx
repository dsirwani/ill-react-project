import React from 'react';
import { TableRow, TableCell, Avatar } from '@material-ui/core';

interface ISubsidiaryAccRowDetails {
  client: any;
  classes: any;
  handleSubsidiaryDblClick: any;
  noOfColumns: number
};

const SubsidiaryAccRowDetails:React.FC<ISubsidiaryAccRowDetails> = ({client, classes, handleSubsidiaryDblClick, noOfColumns}) => {
  const labelId = `enhanced-table-${client?.client_id}`;
  
  return (
    <TableRow
      className={classes.tableRow}
      hover
      tabIndex={-1}
      key={client?.client_id}
    >
      <TableCell
        classes={{ root: classes.tableCellRoot }}
        component="th"
        className={classes.accNameCell}
        id={labelId}
        scope="row"
        onClick={(event) => {
          if (client.application_status === 'A') {
            handleSubsidiaryDblClick(event, client);
          }
        }}
      >
        <div className={classes.thumbnailIcon}>
          <Avatar alt={client?.client_name} src={client?.logo_link} />
          <div>&nbsp; {client?.client_name} (subsidiary)</div>
        </div>
      </TableCell>
      <TableCell
        // align="left"
        colSpan={noOfColumns}
        classes={{ root: classes.tableCellRoot }}
      />
    </TableRow>
  );
};

export default SubsidiaryAccRowDetails;