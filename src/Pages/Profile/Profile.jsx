import React from 'react';
import "./Profile.css";
import assets from "../../assets/assets.js";

const Profile = () => {
    return(
        <div className="profile">
            <div className="profile-container">
                <img className="close" src={assets.close} alt=""/>
                <form>
                    <h3>Profile Settings</h3>
                    <label htmlFor="avatar">
                        <input type="file" id="avatar" accept='.png, .jpg, .jpeg' hidden />
                        <img src={assets.contact1} alt=""/>
                        change profile photo
                    </label>
                    <input type="text" placeholder="your Name" required />
                    <button type="submit" >Save</button>
                </form>
            </div>

        </div>
    )
}

export default Profile