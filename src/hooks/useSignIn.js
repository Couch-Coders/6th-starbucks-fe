import React from "react";
import {AuthContext} from "../providers/AuthProvider";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const useSignIn = () => {
    const {googleAuthProvider: provider, setUser} = React.useContext(AuthContext);
    const auth = getAuth();

    return () => {
        signInWithPopup(auth, provider).
        then((userCredential) => {
            const token = GoogleAuthProvider.credentialFromResult(userCredential).accessToken;
            const user = userCredential.user

            return {token, user}
        }).then(({token, user}) => {
            console.log(user);
            // TODO add validation
            if (user && token) {
                // TODO update state
                setUser({
                    email: user.email,
                    name: user.displayName,
                    photoURL: user.photoURL,
                    token: token
                })

                // store user info before setup server
                localStorage.setItem('email', user.email);
                localStorage.setItem('name', user.displayName);
                localStorage.setItem('photoURL', user.photoURL);

                localStorage.setItem('token', token)
                console.log(`update user ${token}`)
                // storeUserInfo(user);
            }else {
                console.log('Failed signed in.')
            }
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            // const email = error.mail;
            // const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(`Has error with ${errorCode}. see detail message ${errorMessage}.`)
        })
    }
}

export default useSignIn;