import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className='py-4 text-lg'>
            <div className="container sm:flex justify-between items-center">
                <h3 className='text-xl font-semibold'><span className='text-blue-600 text-4xl'>Quiz</span> Resolvers</h3>
                <nav className={`bg-white left-0 ${open ? 'top-0' : 'sm:top-0 -top-full'} sm:w-auto w-full sm:relative absolute ease-in-out duration-300`}>
                    <ul onClick={e => e.target.hasAttribute('href') && setOpen(false)} 
                        className='sm:flex text-center sm:space-x-6 [&>*]:p-2'>
                        <li>
                            <Link className='hover:text-blue-600' to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link className='hover:text-blue-600' to='/statistics'>Statistics</Link>
                        </li>
                        <li>
                            <Link className='hover:text-blue-600' to='/blog'>Blog</Link>
                        </li>
                    </ul>
                </nav>
                <button onClick={() => setOpen(!open)} className='sm:hidden absolute top-2 right-2 z-10 text-2xl w-12 h-12 text-blue-600 bg-blue-100 rounded-full'>
                    <FontAwesomeIcon icon={open ? faXmark : faBars} />
                </button>
            </div>
        </header>
    );
};

export default Header;