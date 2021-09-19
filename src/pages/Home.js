import React from 'react'
import './Home.css';
// import * as FaIcons from 'react-icons/fa'
// import * as AiIcons from 'react-icons/ai'
// // import * as IoIcons from 'react-icons/io'
// // import * as RiIcons from 'react-icons/ri'
// import * as GiIcons from 'react-icons/gi'
// import { Link } from 'react-router-dom';

function Home(openModal) {
    return (
        <div className="home-page">
            <h1>Welcome</h1>
            <div className="home-text">
                <p>My name is Alex, and I am a developer working with React.</p>
                <p>This is a collection of small web-applications that I have made to experiment with features of react and to assist in my learning.</p>
                <p>By clicking the info button on each page, you can learn a little more about what particular react skills/techniques are being used in each, and why.</p>
                <p>You can see some of my other work and personal projects at <a href="http://alexanderdolphin.com/">alexanderdolphin.com</a></p>
                <p>Thanks for visiting :)</p>
            </div>           
            {/* <div className="home-buttons-container">
                <GiIcons.GiLockedChest className="home-button"/>
                <AiIcons.AiFillHome className="home-button"/>
                <AiIcons.AiOutlineClose className="home-button"/>
                <FaIcons.FaTasks className="home-button"/>
                <AiIcons.AiOutlineClose className="home-button"/>
                <AiIcons.AiOutlineClose className="home-button"/>
            </div> */}
        </div>
    )
}
 
export default Home
