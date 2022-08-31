import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initializeFirebase = () => {
    return initializeApp(firebaseConfig);
};

export default initializeFirebase;