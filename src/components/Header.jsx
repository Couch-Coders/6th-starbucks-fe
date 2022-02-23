import React from "react";
import {PageHeader, Button} from "antd";
import {CoffeeOutlined} from '@ant-design/icons';
import {AuthContext} from "../providers/AuthProvider";
import useSignIn from "../hooks/useSignIn";


const Header = () => {
    // TODO add signedIn prop
    // TODO highlight when enter `about` page
    const {user} = React.useContext(AuthContext);
    const onSignIn = useSignIn()

    // temp user
    let tempUser;
    if (!user && localStorage.getItem('email')) tempUser = {
        email: localStorage.getItem('email'),
        name: localStorage.getItem('name'),
        photoURL: localStorage.getItem('photoURL'),
        token: localStorage.getItem('token')
    }
    else tempUser = user

    const extraButtons = user || tempUser ? [
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
                src={tempUser.photoURL}
                style={{borderRadius:50, width:30}}
                alt="user profile image"
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