import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

const LeftMenu = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.Item key="home">
        <NavLink to="/" key="/" className={"p-2 fw-bolder fs-6"}>
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="about">
        <NavLink to="/about" key="/" className={"p-2 fw-bolder fs-6"}>
          About us
        </NavLink>
      </Menu.Item>
      <Menu.Item key="course">
        <NavLink to="/course" key="/" className={"p-2 fw-bolder fs-6"}>
          Courses
        </NavLink>
      </Menu.Item>
      <Menu.Item key="stem">
        <NavLink to="/stem" key="/" className={"p-2 fw-bolder fs-6"}>
          Course STEM
        </NavLink>
      </Menu.Item>
      <Menu.Item key="mentor">
        <NavLink to="/mentor" key="/" className={"p-2 fw-bolder fs-6"}>
          Mentor
        </NavLink>
      </Menu.Item>
      <Menu.Item key="blog">
        <NavLink to="/blog" key="/" className={"p-2 fw-bolder fs-6"}>
          Blog
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
