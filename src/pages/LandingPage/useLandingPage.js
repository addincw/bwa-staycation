import { useCallback, useEffect, useRef } from 'react';
import { scrollToTarget, scrollToTopOfPage } from '../../utils/common';

const useLandingPage = () => {
    const mostPickedRef = useRef();

    const handleWelcomeButtonOnClick = useCallback(() => {
      scrollToTarget(mostPickedRef, 30);
    }, [ mostPickedRef ]);
    
    useEffect(() => {
        scrollToTopOfPage();
    }, []);
    
    return {
        handleWelcomeButtonOnClick,
        mostPickedRef
    };
};

export default useLandingPage;
