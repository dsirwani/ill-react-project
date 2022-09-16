"use strict";
exports.__esModule = true;
exports.useInfiniteScroll = void 0;
var react_1 = require("react");
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
exports.useInfiniteScroll = function (scrollRef, dispatch, isLoadingData, incrementPageNo) {
    var scrollObserver = react_1.useCallback(function (node) {
        new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.intersectionRatio > 0 && !isLoadingData) {
                    //dispatch({ type: 'ADVANCE_PAGE' });
                    incrementPageNo();
                }
            });
        }).observe(node);
    }, [dispatch]);
    react_1.useEffect(function () {
        if (scrollRef.current) {
            scrollObserver(scrollRef.current);
        }
    }, [scrollObserver, scrollRef]);
};
