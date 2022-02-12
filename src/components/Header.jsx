import React, {useState, useCallback} from "react";
import {PageHeader, Button} from "antd";
import {CoffeeOutlined} from '@ant-design/icons';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';


const Header = () => {
    // TODO add signedIn prop
    // TODO highlight when enter `about` page
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [user, setUser] = useState(window.sessionStorage.getItem("user"));

    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const onSignIn = useCallback(() => {
        const auth = getAuth();
        signInWithPopup(auth, provider).
            then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;

                return {token, user};
        }).then(({token, user}) => {
            // console.log(token);
            console.log(user);
            // TODO add validation
            if (user && token) {
                // TODO update state
                setIsSignedIn(true);
                setUser({
                    email: user.email,
                    name: user.displayName,
                    photoURL: user.photoURL,
                    token: token
                })
                console.log(`update user ${user}`)
                storeUserInfo(user);
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
    });

    const storeUserInfo = useCallback((user) => {
        window.sessionStorage.setItem("user", JSON.stringify(user))
    })

    console.log(user)

    const extraButtons = isSignedIn ? [
        <Button
            key="3"
            type="text"
            siz="large"
            href="/pages/about"
        >
            About
        </Button>,
        <Button
            key="2"
            type="text"
            siz="large"
            href="/pages/register-beverage"
        >
            추가하기
        </Button>,
        <Button
            key="1"
            type="text"
            href="/pages/mypage"
        >
            <img
                src={user.photoURL}
                style={{borderRadius:50, width:30}}
            />
        </Button>,
    ] :[
        <Button
            key="2"
            type="text"
            siz="large"
            href="/pages/about"
        >
            About
        </Button>,
        <Button
            key="1"
            type="primary"
            style={{backgroundColor: '#237804', borderRadius: 5}}
            size="large"
            onClick={onSignIn}
        >
            Log in
        </Button>,
    ]

    return (<PageHeader
        className="site-page-header"
        title={<Button
                    type="text"
                    size="large"
                    icon={<CoffeeOutlined/>}
                    href="/"
                    style={{color: '#237804'}}
                />}
        extra={extraButtons}
        style={{backgroundColor: '#fff'}}
    />)
};

export default Header;