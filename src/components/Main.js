import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Col, Row } from "antd";
import Sider from "./Sider";
import Content from "./Content";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet>
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 mb-4">
              <Sider></Sider>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
              <Content></Content>
            </div>
          </div>
        </div>
      </Outlet>

      <Footer></Footer>
    </>
  );
};

export default App;
