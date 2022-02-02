import React from "react";
import {Layout} from "antd";
import './App.css';
import "antd/dist/antd.min.css";
import Router from "./routes/Router";
import Header from './components/Header';

const {Header: HeaderWrapper, Content: ContentWrapper, Footer: FooterWrapper} = Layout

const App = () => {
  // TODO refactoring routing using nested routing
  // https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes

  return (
      <Layout>
        <HeaderWrapper className="header">
            <Header/>
        </HeaderWrapper>
        <ContentWrapper>
          <Router/>
        </ContentWrapper>
        <FooterWrapper>footer</FooterWrapper>
      </Layout>
  );
}

export default App;
