import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { API_ENDPOINT } from "../utils/env";

export const UserContext = React.createContext(null);
export const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

/**
 * Manage user authentication
 *
 * TODO store user token in localStorage and checks it is expired or not
 *  ref https://stackoverflow.com/questions/26739167/jwt-json-web-token-automatic-prolongation-of-expiration
 * TODO store
 *
 * @param {*} param0
 * @returns
 */
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    React.useEffect(() => {
        const auth = getAuth();

        auth.onAuthStateChanged(async (firebaseUser) => {
            if (firebaseUser) {
                const token = await firebaseUser.getIdToken();
                defaultHeaders.Authorization = `Bearer ${token}`;
                const res = await fetch(`${API_ENDPOINT}/users/login`, {
                    method: "GET",
                    headers: defaultHeaders,
                });

                console.log(res);

                if (res.status === 200) {
                    const user = await res.json();
                    setUser(user);
                } else {
                    delete defaultHeaders.Authorization;
                    setUser(null);
                }
            }
        });
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;
