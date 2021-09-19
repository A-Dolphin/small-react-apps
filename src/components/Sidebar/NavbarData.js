import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
// import * as IoIcons from 'react-icons/io'
// import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'


export const NavbarData = [
    {
        cName : 'nav-text',
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
    },
    {
        cName : 'nav-text',
        title: 'To-Do list',
        path: '/todolistpage',
        icon: <FaIcons.FaTasks/>,
    },
    {
        cName : 'nav-text',
        title: 'Budgeting tool',
        path: '/budgettoolpage',
        icon: <GiIcons.GiLockedChest/>, 
    },
    {
        cName : 'nav-text',
        title: 'Crypto Price Tracker',
        path: '/cryptotrackerpage',
        icon: <FaIcons.FaBitcoin/>,
    },
]