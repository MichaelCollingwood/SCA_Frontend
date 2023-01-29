import Link from 'next/link';
import { useState } from 'react';
import Emoji from './Emoji'
import NavItem from './NavItem';
import Title from './Title'

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <section className="bg-turner">
            <nav className='flex items-center flex-wrap p-2 '>
                <Link href='/'>
                <a className='inline-flex items-center p-2 pl-4 mr-4 '>
                    <Title />
                </a>
                </Link>
                <button
                className=' inline-flex p-3 hover:bg-white rounded sm:hidden text-white ml-auto hover:text-white outline-none'
                onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='black'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                <div
                className={`${
                    active ? '' : 'hidden'
                } w-full sm:inline-flex sm:flex-grow sm:w-auto`}
                >
                    <ul className='text-l inline-flex sm:ml-auto sm:w-auto w-full sm:items-center items-start sm:h-auto'>
                        <NavItem emoji="🌍" where="Messages" />
                        <NavItem emoji="👥" where="Profiles" />
                        <NavItem emoji="🌍" where="World" />
                    </ul>
                </div>
            </nav>
        </section>
    );
};
