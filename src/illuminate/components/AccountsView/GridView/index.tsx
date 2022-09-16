import React, {Fragment} from 'react';
import { useStyles } from './style';
import AccountCard from '../AccountCard/index';
import { IAccountsView } from '../../../../types/IAccountsView';
import SubsidiaryAccountCard from  '../SubsidiaryAccountCard';

interface IAccountsGridView extends IAccountsView {
  headerSecondLine: any,
}

const AccountGridView: React.FC<IAccountsGridView> = ({
  headerSecondLine,
  accountListData,
  handleSelectedAccount,
  handleSubsidiaryDblClick,
}) => {
  const classes = useStyles();
  //const headerTitle = ['REVENUE', 'GROWTH', 'TOTAL PLAN', 'BUY CENTER'];

  return (
    <div className={classes.gridContent}>
      {accountListData &&
        accountListData.map((account: any, idx: number) => {
          const dataToDisplay = {};
          const accountData = {};
          for (const key in account.data) {
            switch (key) {
              case 'revenue':
                dataToDisplay['REVENUE'] = account.data[key];
                break;
              case 'growth':
                dataToDisplay['GROWTH'] = account.data[key];
                dataToDisplay['GROWTH']['unitSymbol'] = '%';
                break;
              case 'plan':
                dataToDisplay['TOTAL PLAN'] = account.data[key];
                break;
              case 'buying_centers':
                dataToDisplay['BUYING CENTER'] = account.data[key];
                break;
              case 'pgi':
                dataToDisplay['PGI'] = account.data[key];
                break;
              default:
                accountData[key] = account.data[key];
            }
            accountData['cardTable'] = dataToDisplay;
          }
          return (
            <Fragment key={'card-'+idx}>
            {
              account?.type === 'account' ? 
              <AccountCard
                key={`grid-${account?.data?.account_id}-${idx}`}
                account={accountData}
                headerSecondLine={headerSecondLine}
                handleSelectedAccount={handleSelectedAccount}
              /> 
               : 
              <SubsidiaryAccountCard 
                client = {account.data} 
                key={`grid-${account?.data?.client_id}-${idx}`}
                handleSubsidiaryDblClick = {handleSubsidiaryDblClick}
              />
            }
            </Fragment>
          );
        })}
    </div>
  );
};

export default AccountGridView;
