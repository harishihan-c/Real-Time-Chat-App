import React, {useEffect, useState} from 'react';
import "./Profile.css";
import assets from "../../assets/assets.js";
import {onAuthStateChanged} from "firebase/auth";
import {auth, db} from "../../Config/firebase.js";
import {doc, getDoc} from "firebase/firestore";
import {useNavigate} from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();

    const [image, setImage] = useState(false);
    const [name, setName] = useState("");
    // const [bio, setBio] = useState("");
    const [uid, setUid] = useState("");
    const [prevImage, setPrevImage] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if(user){
                setUid(user.uid)
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.data().name){
                    setName(docSnap.data().name);
                }
                if (docSnap.data().avatar){
                    setPrevImage(docSnap.data().avatar);
                }
            }
            else{
                navigate('/')
            }
        })
    })

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
                    <input onChange={(event) => {setName(event.target.value)}} value={name} type="text" placeholder="your Name" required />
                    <button type="submit" >Save</button>
                </form>
            </div>

        </div>
    )
}

export default Profile