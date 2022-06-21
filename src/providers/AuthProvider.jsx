import React from 'react'
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const authHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

export const AuthContext = React.createContext(null);

const AuthProvider = ({children}) => {
    const googleAuthProvider = new GoogleAuthProvider();
    googleAuthProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    const auth = getAuth();
    const [user, setUser] = React.useState(null);
    const authApi = ""

    React.useEffect(() => {
        auth.onAuthStateChanged(async (firebaseUser)=> {
            if (firebaseUser) {
                const requestToken = await firebaseUser.getIdToken();
                authHeaders.Authorization = `Bearer ${requestToken}`

                const response = await fetch(authApi, {
                    method: "GET",
                    headers: authHeaders
                });

                // get response from server
                // if (response.status === 200) {
                //     // signin
                const user = await response.json();
                setUser(user);

                // } else {
                //     // signout
                //     delete authHeaders.Authorization;
                //     setUser(null);
                // }
            } else {
                console.log(`invalid firebase user ${firebaseUser}`)
            }
        });
    }, [])


    return (
        <AuthContext.Provider value={{user, setUser, googleAuthProvider}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;