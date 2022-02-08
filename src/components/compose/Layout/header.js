import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../base/Logo';
import TextLink from '../../base/TextLink';

const navigationList = [
    { title: 'Home', to: '/' },
    { title: 'Browse by', to: '/browse-by' },
    { title: 'Stories', to: '/stories' },
    { title: 'Agents', to: '/agents' },
];

const Header = () => {
    return (
        <header className='py-5 border-b' role='rowheader'>
            <div className='w-10/12 mx-auto flex justify-between'>
                <div>
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <div>
                    <nav role='navigation'>
                        <ul className='flex text-stay-dark-blue'>
                            {navigationList.map(({ title, to }) => (
                                <li key={to} className='px-[17.5px]'>
                                    <TextLink to={to}>{title}</TextLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
