import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../base/Logo';
import ButtonLink from '../../base/ButtonLink';

const navigationList = [
    { title: 'Home', to: '/home' },
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
                        <ul className='flex'>
                            {/* TODO: handle link active / selected */}
                            {navigationList.map(({ title, to }) => (
                                <li key={to} className='px-[17.5px]'>
                                    <ButtonLink to={to}>{title}</ButtonLink>
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