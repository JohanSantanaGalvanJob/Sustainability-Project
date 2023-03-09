import './header.scss'

import { useState } from 'react'
import { motion } from 'framer-motion'
// images
import navdirt from '../../images/navdirt.svg'
import tree2 from '../../images/tree2.svg'
import tree1 from '../../images/tree1.svg'
import tree3 from '../../images/tree3.svg'
import logo from '../../images/logo.svg'

//components
import HamburgerButton from '../hamburgerButton/hamburgerButton'
import { NavLink } from 'react-router-dom'


const Header = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

    return (
        <div className='header-container'>
        <header>
            <img alt='logo' className='logo' src={logo}/>
            <div className='tree-container'>
            <img alt='tree' className='tree1' src={tree1}/>
            <img alt='tree' className='tree2' src={tree2}/>
            <img alt='tree' className='tree3' src={tree3}/>
            </div>
            <HamburgerButton
            isHamburgerOpen={isHamburgerOpen}
            setIsHamburgerOpen={setIsHamburgerOpen}
            />
            <motion.nav 
            className="navbar"
            animate={isHamburgerOpen ? {x:-800}: {x : 0}}
            transition={{duration:0.5}}
            >
                <ul>
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink> 
                    <NavLink to="profile">
                        <li>Profile</li>
                    </NavLink>
                    <NavLink to="categories">
                        <li>Categories</li>
                    </NavLink>
                    <NavLink to="leaderboard">
                        <li>Leaderboard</li>
                    </NavLink>
                </ul>
            </motion.nav>
        </header>
        <img className='dirt' alt='dirt' src={navdirt}/>
        </div>

    
    )
}


export default Header 