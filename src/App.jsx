import React from "react";
import { Layout } from "antd";
import { initializeApp } from "firebase/app";

import Router from "./routes/Router";
import Header from "./components/Header";
import AuthProvider from "./components/AuthProvider";

import "./App.css";
import "antd/dist/antd.min.css";

const { Content: ContentWrapper, Footer: FooterWrapper } = Layout;

const App = () => {
    // TODO refactoring routing using nested routing
    // https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes

    const firebaseConfig = {
        apiKey: "AIzaSyDodKEG9Mo5n4pS6w8ffuYEA3g7YGnCzJI",
        authDomain: "starbucks-custom-beverage.firebaseapp.com",
        databaseURL:
            "https://starbucks-custom-beverage-default-rtdb.firebaseio.com",
        projectId: "starbucks-custom-beverage",
        storageBucket: "starbucks-custom-beverage.appspot.com",
        messagingSenderId: "106120833673",
        appId: "1:106120833673:web:290ec334fa8e00e552f458",
        measurementId: "G-KTMPKNH01G",
    };
    const app = initializeApp(firebaseConfig);

    return (
        <AuthProvider>
            <Layout>
                <Header />
                <ContentWrapper>
                    <Router />
                </ContentWrapper>
                <FooterWrapper>footer</FooterWrapper>
            </Layout>
        </AuthProvider>
    );
};

export default App;
