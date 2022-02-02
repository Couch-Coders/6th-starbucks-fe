import React from "react";
import {PageHeader, Button} from "antd";
import {CoffeeOutlined} from '@ant-design/icons';


const Header = () => {
    // TODO add signedIn prop
    // TODO highlight when enter `about` page

    return (<PageHeader
        className="site-page-header"
        title={<Button
                    type="text"
                    size="large"
                    icon={<CoffeeOutlined/>}
                    href="/"
                    style={{color: '#237804'}}
                />}
        extra={[
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
            >
                Log in
            </Button>,
        ]}
        style={{backgroundColor: '#fff'}}
    />)
};

export default Header;