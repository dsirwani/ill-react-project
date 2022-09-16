import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import RevenuePanel from './RevenuePanel';
import Loader from '../../../components/Loader';
import GrowthPanel from './GrowthPanel';
import TotalPlanPanel from './TotalPlanPanel';
import BuyCenterPanel from './BuyCenterPanel';
import PGIPanel from './PGIPanel';
import Error from '../../../components/Error';
import { useInfiniteScroll } from '../../../../hooks/useInfiniteScroll';
import useSettings from '../../../../hooks/useSettings';
import { useStyles } from './style';
import { RootState } from '../../../../utils/injectReducer';
import { ProductCategoryState } from './type';
import { prodCategoryActionCreator } from '../../../../utils/configureActionCreators';
import { UpdateUserPreferencesState } from '../../../../common/containers/RefactoredDashboard/TopBar/type';

interface AccountKPIDetailsProps {
  tabValue: number;
  tabName: string;
}
const AccountKPIDetails: React.FC<AccountKPIDetailsProps> = ({
  tabValue,
  tabName,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { accountId } = useParams();

  const { settings, previousSettings } = useSettings();

  const [pageNo, setPageNo] = useState(0);

  const incrementPageNo = () => setPageNo((prevState) => prevState + 1);

  const { data: preferenceData }: UpdateUserPreferencesState = useSelector(
    (state: RootState) => state?.userPreferenceData.updateUserPreferencesData
  );

  const {
    scrollLoader,
    error,
    errorMessage,
    prodCategories,
    nextPageUrl,
    prodSummary,
  }: ProductCategoryState = useSelector(
    (state: RootState) => state.prodCategoryData?.prodData
  );
  const scrollDivRef = useRef<HTMLInputElement>(null);

  useInfiniteScroll(scrollDivRef, dispatch, scrollLoader, incrementPageNo);

  useEffect((): void => {
    dispatch(
      prodCategoryActionCreator.prodCategoryRequest({
        productId: null,
        accountId,
        tabName,
        level: 0,
        parentGrp: null,
      })
    );
  }, [tabName]);

  useEffect(() => {
    if (pageNo && nextPageUrl) {
      dispatch(
        prodCategoryActionCreator.getMoreProdCategoryRequest({
          accountId,
          tabName,
          nextPageUrl,
        })
      );
    }
  }, [pageNo]);

  const { mmFactoring, currency } = settings
  const { mmFactoring: previousMMFactoring, currency: previousCurrency } = previousSettings
  useEffect(() => {
    if (preferenceData && (previousMMFactoring != mmFactoring || previousCurrency != currency) ) {
      dispatch(
        prodCategoryActionCreator.prodCategoryRequest({
          productId: null,
          accountId,
          tabName,
          level: 0,
          parentGrp: null,
        })
      );
    }
  }, [preferenceData, mmFactoring, currency]);

  return (
    <div className={classes.root}>
      {(() => {
        switch (tabValue) {
          case 0:
            return (
              <RevenuePanel
                prodCategories={prodCategories}
                prodSummary={prodSummary}
                tabName={tabName}
              />
            );
          case 1:
            return (
              <GrowthPanel
                prodCategories={prodCategories}
                prodSummary={prodSummary}
                tabName={tabName}
              />
            );
          case 2:
            return (
              <TotalPlanPanel
                prodCategories={prodCategories}
                prodSummary={prodSummary}
                tabName={tabName}
              />
            );
          case 3:
            return (
              <BuyCenterPanel
                prodCategories={prodCategories}
                prodSummary={prodSummary}
                tabName={tabName}
              />
            );

          case 4:
            return (
              <PGIPanel
                prodCategories={prodCategories}
                prodSummary={prodSummary}
                tabName={tabName}
              />
            );
          default:
            return null;
        }
      })()}
      {error ? <Error errorMessage={errorMessage} /> : null}
      <div
        id="scrollDetectDiv"
        ref={scrollDivRef}
        style={{ border: '1px solid #5850EC', margin: '10px 50px' }}
      />
      {scrollLoader ? <Loader /> : null}
    </div>
  );
};

export default AccountKPIDetails;
