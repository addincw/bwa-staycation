// import { useEffect, useState } from 'react';

const useInputNumber = ({ value, onChange }) => {   
    // const [ localValue, setLocalValue ] = useState(0);
    
    const handleOnClickDecrementButton = () => {
        if(value > 1) onChange(Number(value) - 1);
    };
    const handleOnClickIncrementButton = () => {
        onChange(value + 1);
    };

    const handleOnChangeValue = (e) => {
        const onlyNumberPattern = /^[0-9]*$/;
        if (!onlyNumberPattern.test(e.target.value)) return;

        onChange(Number(e.target.value));

        if (Number(e.target.value) === 0) {
            setTimeout(() => {
                if (Number(e.target.value) === 0) onChange(Number(value));
            }, 1000);
        }
    };
    
    return {
        handleOnClickIncrementButton,
        handleOnClickDecrementButton,
        handleOnChangeValue
    };
};

export default useInputNumber;
