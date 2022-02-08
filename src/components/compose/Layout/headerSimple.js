import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../base/Logo';

const HeaderSimple = () => {
    return (
        <header className='py-5 border-b' role='rowheader'>
            <div className='w-10/12 mx-auto flex justify-center'>
                <div>
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default HeaderSimple;
