import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";


initializeFirebase();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
    };

    const registerWithEmailPass = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                let user = result.user;
                user.displayName = name;

                setUser(user);

                // update username
                updateProfile(auth.currentUser, {
                    displayName: name
                })

            })
    };

    const signInWithEmailPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        })
    }, []);

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    return {
        user,
        googleSignIn,
        registerWithEmailPass,
        signInWithEmailPass,
        logOut
    }
}
export default useFirebase;