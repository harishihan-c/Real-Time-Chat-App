import {auth, db} from "./firebase.js";
import {CreateUserWithEmailAndPassword} from "firebase/auth";
import {setDoc, doc} from "firebase/firestore";

export const signup = async (email, password) => {
    try{
        //Get the email, password and authenticate it
        const response = await CreateUserWithEmailAndPassword( auth, email, password);
        const user = response.user;

        //store the email, password and other details on the database
        await setDoc(doc(db, "user", user.uid), {
            id: user.uid,
            email,
            Avatar: "",
            lastSeen : Date.now()
        })

        await setDoc(doc(db, "chat", user.uid),{
            chatData: []
        })
    }
    catch(error){
        console.error(error);
    }
}