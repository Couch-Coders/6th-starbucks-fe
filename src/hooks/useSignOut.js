import React from 'react'
import {AuthContext} from "../providers/AuthProvider";

const useSignOut = () => {
    const {setUser} = React.useContext(AuthContext)

    return () => {
        setUser(null);
        localStorage.removeItem('token')
    }
}

export default useSignOut;