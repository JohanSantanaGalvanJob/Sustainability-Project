import './header.scss'

import { useState } from 'react'
import { motion } from 'framer-motion'
// images
import navdirt from '../../images/navdirt.svg'
import tree2 from '../../images/navtree2.svg'
import tree1 from '../../images/navtree1.svg'

//components
import HamburgerButton from '../hamburgerButton/hamburgerButton'


const Header = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

    return (
        <div className='header-container'>
        <header>
            <div className='logo'>
                logo
            </div>
            <div className='tree-container'>
            <img alt='tree' className='tree1' src={tree1}/>
            <img alt='tree' className='tree2' src={tree2}/>
            <img alt='tree' className='tree1' src={tree1}/>
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
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#">
                        <li>Profile</li>
                    </a>
                    <a href="#">
                        <li>Categories</li>
                    </a>
                    <a href="#">
                        <li>Leaderboard</li>
                    </a>
                </ul>
            </motion.nav>
        </header>
        <img className='dirt' alt='dirt' src={navdirt}/>
        </div>

    
    )
}


export default Header 