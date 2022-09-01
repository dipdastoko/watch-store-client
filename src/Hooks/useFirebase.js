import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const googleSignIn = (location, navigate) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                goToDestination(location, navigate);
            })
            .finally(() => setIsLoading(false));
    };

    const registerWithEmailPass = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                let user = result.user;
                user.displayName = name;

                setUser(user);

                // update username
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .finally(() => setIsLoading(false));

            })
    };

    const signInWithEmailPass = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                goToDestination(location, navigate);

            })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, []);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    };

    const goToDestination = (location, navigate) => {
        const url = location?.state?.from.pathname || '/';
        navigate(url);
    };

    return {
        user,
        isLoading,
        googleSignIn,
        registerWithEmailPass,
        signInWithEmailPass,
        logOut
    }
}
export default useFirebase;