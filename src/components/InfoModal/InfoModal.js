import React from 'react'
import './InfoModal.css'
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';


function InfoModal({openModal}) {
    return (
        <IconContext.Provider value={{ color: 'black' }}>
                <div className="modal-background">
                </div>
                <div className="modal-container">
                    <div className="title">
                        <Link to='#' className="modal-close-button">
                            <AiIcons.AiOutlineClose onClick={() => openModal(false)}/>
                        </Link>
                        <h1 className="modal-title-text">Contact info</h1>
                    </div>
                    <div className="body">
                        <p>Email: alexjamesdolphin@gmail.com</p>
                        <p>Github: <a href="https://github.com/A-Dolphin">https://github.com/A-Dolphin</a></p>
                        <p>Site: <a href="http://alexanderdolphin.com/">alexanderdolphin.com</a></p>
                    </div>
                    <div className="footer">
                        {/* buttons? */}
                    </div>
                </div>
            
        </IconContext.Provider>
    )
}

export default InfoModal
