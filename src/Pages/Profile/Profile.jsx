import React, {useState} from 'react';
import "./Profile.css";
import assets from "../../assets/assets.js";

const Profile = () => {

    const [image, setImage] = useState(false);

    return(
        <div className="profile">
            <div className="profile-container">
                <img className="close" src={assets.close} alt=""/>
                <form>
                    <h3>Profile Settings</h3>
                    <label htmlFor="avatar">
                        <input type="file" onChange={(e) => {setImage(e.target.files[0])}} id="avatar" accept='.png, .jpg, .jpeg' hidden />
                        <img src={image? URL.createObjectURL(image): assets.profileUser} alt=""/>
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