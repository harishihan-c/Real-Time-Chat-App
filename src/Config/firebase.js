import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyABDEpZ2AXPzh4g69Oz6YTPrr8DBH8_YbY",
    authDomain: "realtime-chat-app-79314.firebaseapp.com",
    projectId: "realtime-chat-app-79314",
    storageBucket: "realtime-chat-app-79314.firebasestorage.app",
    messagingSenderId: "606029886877",
    appId: "1:606029886877:web:91a7abc91801f0d2546b74"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);