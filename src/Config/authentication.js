import {auth, db} from "./firebase.js";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {setDoc, doc} from "firebase/firestore";

export const signup = async (email, password) => {
    try{
        //Get the email, password and authenticate it
        const response = await createUserWithEmailAndPassword( auth, email, password);
        const user = response.user;

        //store the email, password and other details on the database
        await setDoc(doc(db, "user", user.uid), {
            id: user.uid,
            name: "",
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


export const login = async (email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password);
    }
    catch (error){
        console.error(error);
    }
}


export const logout = async() => {
    try{
        await signOut(auth);
    }
    catch(error){
        console.error(error);
    }
}