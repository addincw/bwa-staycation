import { useEffect } from 'react';
import { scrollToTopOfPage } from '../../utils/common';

const usePlaceDetailPage = () => {  
    useEffect(() => {
        scrollToTopOfPage();
    }, []);
    
    return {};
};

export default usePlaceDetailPage;
