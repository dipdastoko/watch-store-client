import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState();

    const googleSignIn = (location, navigate) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                stroeUserInDatabase(user, 'PUT');
                goToDestination(location, navigate);
            })
            .finally(() => setIsLoading(false));
    };

    const registerWithEmailPass = (email, password, name, newUser, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                let user = result.user;
                user.displayName = name;

                setUser(user);

                // update username
                updateProfile(auth.currentUser, {
                    displayName: name
                });

                stroeUserInDatabase(newUser, 'POST');
                navigate('/');

            })
            .finally(() => setIsLoading(false));
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

    const logOut = (navigate) => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                navigate('/');

            })
            .finally(() => setIsLoading(false));
    };

    const goToDestination = (location, navigate) => {
        const url = location?.state?.from.pathname || '/';
        navigate(url);
    };

    const stroeUserInDatabase = (newUser, method) => {
        fetch('https://watch-store-server.vercel.app/user', {
            method: `${method}`,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
            });
    };

    useEffect(() => {
        fetch(`https://watch-store-server.vercel.app/user/${user.email}`)
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [user.email]);

    return {
        user,
        isLoading,
        isAdmin,
        googleSignIn,
        registerWithEmailPass,
        signInWithEmailPass,
        stroeUserInDatabase,
        logOut
    }
}
export default useFirebase;