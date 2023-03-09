import './header.scss'

import { useState } from 'react'
import { motion } from 'framer-motion'
// images
import navdirt from '../../images/navdirt.svg'
import tree2 from '../../images/tree2.svg'
import tree1 from '../../images/tree1.svg'
import tree3 from '../../images/tree3.svg'
import logo from '../../images/logo.svg'
import homeIcon from '../../images/iconHome.svg'
import categoryIcon from '../../images/iconCategory.svg'
import userIcon from '../../images/iconUser.svg'
import leaderboardIcon from '../../images/iconLeaderboard.svg'

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
                    <NavLink onClick={() => (setIsHamburgerOpen(false))} to="/">
                        <div className='icon-text-container'>
                            <img alt='home icon' src={homeIcon}/>
                            <li>Home</li>
                        </div>
                        <span className='line'></span>
                    </NavLink> 
                    <NavLink onClick={() => (setIsHamburgerOpen(false))} to="profile">
                        <div className='icon-text-container'>
                            <img alt='home icon' src={categoryIcon}/>
                            <li>Categories</li>
                        </div>
                        <span className='line'></span>
                    </NavLink>
                    <NavLink onClick={() => (setIsHamburgerOpen(false))} to="categories">
                        <div className='icon-text-container'>
                            <img alt='home icon' src={leaderboardIcon}/>
                            <li>Leaderboard</li>
                        </div>
                        <span className='line'></span>
                    </NavLink>
                    <NavLink onClick={() => (setIsHamburgerOpen(false))} to="leaderboard">
                        <div className='icon-text-container'>
                            <img alt='home icon' src={userIcon}/>
                            <li>Profile</li>
                        </div>
                        <span className='line'></span>
                    </NavLink>
                </ul>
                <button className='sign-out-btn'>Sign out</button>
            </motion.nav>
        </header>
        <img className='dirt' alt='dirt' src={navdirt}/>
        </div>

    
    )
}


export default Header 