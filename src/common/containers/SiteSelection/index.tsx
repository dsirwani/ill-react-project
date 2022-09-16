import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import { useI18n } from '../../../hooks/useI18n';
import { RootState } from '../../../utils/injectReducer';
import { SiteSelectionState } from './type';
import { siteSelectionActionCreator } from '../../../utils/configureActionCreators';
import { getEmail } from '../../../utils/localStorageUtils';
import Loader from '../../../illuminate/components/Loader';
import Error from '../../../illuminate/components/Error';
import { useStyles } from './style';

interface SiteSelectionProps {
}

const SiteSelection = (props: SiteSelectionProps) => {
  const classes = useStyles();
  const i18n = useI18n();
  const [selectedSite, setSelectedSite] = useState('')
  const userEmailAddr = getEmail();

  const dispatch = useDispatch();

  useEffect((): void => {
    if (!showSite) {
      dispatch(
        siteSelectionActionCreator.siteSelectionRequest({
          user_email: userEmailAddr
        })
      );
    }
  }, []);

  const {
    loading,
    error,
    data,
    errorMessage,
    accountId,
    showSite
  }: SiteSelectionState = useSelector(
    (state: RootState) => state.siteSelectionData?.siteSelectData
  );

  useEffect((): void => {
    if (accountId) {
      dispatch(
        siteSelectionActionCreator.siteSelectionRequest({
          user_email: userEmailAddr,
          account_id: accountId
        })
      );
    }
  }, [showSite]);

  const changeSelectedSite = (site: string) => {
    dispatch(siteSelectionActionCreator.changeSiteSelection(site));
  }

  const setSite = (event: any) => {
    let site = event.target.value
    setSelectedSite(site)
    changeSelectedSite(site)
  }

  const getDefaultSite = () => {
    let site = `${data?.items[0].microsite_id}-${data?.items[0].microsite_redirection_link}`
    setSelectedSite(site)
    changeSelectedSite(site)
  };

  return (
    <div className={classes.siteSelectionBar}>
      {loading ? <Loader /> : null}
      {data?.items?.length && (
        <FormControl required fullWidth className={classes.formControl}>
          <InputLabel id="site-selection-select-label" className={classes.selectLabel}>{i18n._('Select Site')}</InputLabel>
          <Select
            labelId="site-selection-select-label"
            id="site-selection-select"
            value={selectedSite}
            defaultValue={!selectedSite ? getDefaultSite() : ''}
            onChange={setSite}
            classes={{ icon: classes.ddArowCls }}
            className={classes.selectValue}
          >
            {data.items.map((site: any) => {
              return <MenuItem key={site.microsite_id} value={`${site.microsite_id}-${site.microsite_redirection_link}`}>{site.microsite_display_name}</MenuItem>
            })}
          </Select>
        </FormControl>)
      }
      {error ? <Error errorMessage={errorMessage} /> : null}
    </div>
  );
};

export default SiteSelection;