import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../utils/injectReducer';
import { SiteSelectionState } from '../../../common/containers/SiteSelection/type';
import Loader from '../../../illuminate/components/Loader';
import Error from '../../../illuminate/components/Error';
import { useStyles } from './style';
import { siteSelectionActionCreator } from '../../../utils/configureActionCreators';

interface EngageCanvasProps {
}

const Microsites = (props: EngageCanvasProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { site, error }: SiteSelectionState = useSelector(
    (state: RootState) => state.siteSelectionData?.siteSelectData
  );

  useEffect(() => {
    return () => {
      dispatch(siteSelectionActionCreator.siteSelectionReset());
    };
  }, [])

  return (
    <div className={classes.canvasContainer}>
      {site ? <iframe className={classes.frame} width="100%" height="720" src={site.split('-')[1]}></iframe>
        : error ? <Error errorMessage={'Unable to load microsite '} /> : < Loader />}
    </div>
  );
};

export default Microsites;