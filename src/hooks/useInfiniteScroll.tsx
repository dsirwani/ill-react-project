import { useCallback, useEffect } from 'react';

/*
* HOW to use hook
*
* scrollRef  - is the ref div to be created in the component and its Reference in passed for scrolling
* dispatch - the redux dispatch is passed a param 
* isLoadingData - the boolean flag on reducer used during the API call is API i.e., tells whether API call is complete or not
* incrementPageNo - this the function to be defined in component the increments the state property value by 1
* for incrementPageNo - refer container/AccountsView component. OR the below two line to be added in ur component

 const [pageNo, setPageNo] = useState(0);
 const incrementPageNo = () => setPageNo((prevState) => prevState + 1);
*****
*******************/

export const useInfiniteScroll = (
  scrollRef: any,
  dispatch: any,
  isLoadingData: boolean,
  incrementPageNo: any
) => {
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0 && !isLoadingData) {
            //dispatch({ type: 'ADVANCE_PAGE' });
            incrementPageNo();
          }
        });
      }).observe(node);
    },
    [dispatch]
  );
  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
};
