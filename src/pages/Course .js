import React from "react";
import Sider from "../components/Sider";
import Content from "../components/Content";

const Course = () => {
  return (
    <>
      <header className="container-fluid header-banner text-center d-flex">
        <div className="m-auto">
          <h2 className="header-banner-heading mt-5">Danh Sách Khóa Học</h2>
          <p className="header-banner-sub-heading mt-3">Trang chủ - Khóa học</p>
        </div>
      </header>
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
    </>
  );
};

export default Course;
