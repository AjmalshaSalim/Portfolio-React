import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Logo from '../assets/Logo.png';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle)
    return (
        <header className={'flex justify-between tracking-wide px-6 py-3 text-white sticky-header shadow-black shadow-2xl bg-greengradient hover:bg-none '}>
            <a href="/" className='logo text-2xl font-bold pl-6'><img src={Logo} alt="Logo" className='logoAj rounded-full' /></a>
            {/* Desktop Nav */}
            <nav className='hidden md:block font-light'>
                <ul className='flex'>
                    <li className=" font-bold hover:border-dotted hover:border-b-2 hover:border-lime-400">
                        <a className=" hover:text-lime-400" href="/#Home" >Home</a>
                    </li>
                    <li className=" font-bold hover:border-dotted hover:border-b-2 hover:border-lime-400">
                        <a className=" hover:text-lime-400" href="/#About" >About</a>
                    </li>
                    <li className=" font-bold hover:border-dotted hover:border-b-2 hover:border-lime-400">
                        <a className=" hover:text-lime-400" href="/#skills" >Skills</a>
                    </li>
                    <li className=" font-bold hover:border-dotted hover:border-b-2 hover:border-lime-400">
                        <a className=" hover:text-lime-400" href="/#projects" >Projects</a>
                    </li>
                    <li className=" font-bold hover:border-dotted hover:border-b-2 hover:border-lime-400">
                        <a className=" hover:text-lime-400" href="/#Courses" >Courses</a>
                    </li>
                    <li className=" font-bold hover:border-dotted hover:border-b-2 hover:border-lime-400">
                        <a className=" hover:text-lime-400" href="/#connect" >Connect</a>
                    </li>
                    <li className=" font-bold hover:border-dotted hover:border-b-2 hover:border-lime-400">
                        <a className=" hover:text-lime-400" href="https://drive.google.com/file/d/1IH1ZcdCK-US8qTKaCglbVW4zi6srb0nq/view?usp=drive_link"
                            target="_blank"
                            without
                            rel="noreferrer" >Resume</a>
                    </li>
                </ul>
            </nav>
            {/* Mobile Nav */}
            <nav className={!toggle ? "mobile-nav left-[-100%]"
                : "mobile-nav left-0"}>
                  <ul className='flex flex-col'>
        <li style={{ zIndex: 1 }}>
            <a href="/#About">About</a>
        </li>
        <li style={{ zIndex: 1 }}>
            <a href="/#skills">Skills</a>
        </li>
        <li style={{ zIndex: 1 }}>
            <a href="/#projects">Projects</a>
        </li>
        <li style={{ zIndex: 1 }}>
            <a href="/#Courses">Courses</a>
        </li>
        <li style={{ zIndex: 1 }}>
            <a href="/#connect">Connect</a>
        </li>
        <li style={{ zIndex: 2 }}>
            <a href="https://drive.google.com/file/d/1UOM0wxPPnS03etWKujEtypVIIoLGZpIQ/view?usp=drive_link"
                target="_blank"
                without
                rel="noreferrer">Resume</a>
        </li>
    </ul>
            </nav>
            {/*Toggle button */}
            <button onClick={handleToggle} className="block md:hidden">
                {
                    !toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />
                }
            </button>
            
        </header>
    )
}

export default Header