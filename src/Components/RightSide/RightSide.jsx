import React from 'react'
import "./RightSide.css"
import assets from "../../assets/assets.js";


const RightSide = () => {

    return(
        <div className="rs">
            <div className="rs-container">
                <div className="rs-container-top">
                    <img className="settings" src={assets.settings} alt=""/>
                    <img  className="close" src={assets.close} alt=""/>
                </div>

                <img src={assets.contact1} className="rs-profile" alt=""/>
                <p className="name">Harry</p>
                <hr />
                <p className="media-text">Media</p>
                <div className="media">
                    <div><img src={assets.background} alt=""/></div>
                    <div><img src={assets.background} alt=""/></div>
                    <div><img src={assets.background} alt=""/></div>
                    <div><img src={assets.background} alt=""/></div>
                    <div><img src={assets.background} alt=""/></div>
                    <div><img src={assets.background} alt=""/></div>
                </div>
            </div>
        </div>
    )
}

export default RightSide