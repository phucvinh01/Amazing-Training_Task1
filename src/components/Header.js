import React, { useState } from "react";
import shoppingCart from "../images/icon-shopping-cart.jpg";
import { Button, Drawer, Input, Layout, Badge, Avatar } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import LeftMenu from "./Navbar/LeftMenu";
import RightMenu from "./Navbar/RightMenu";

const items = [
  {
    label: (
      <a href="/" rel="noopener noreferrer">
        Home
      </a>
    ),
    key: "Home",
  },
  {
    label: (
      <a href="/about" rel="noopener noreferrer">
        Abouts
      </a>
    ),
    key: "about",
  },
  {
    label: (
      <a href="/course" rel="noopener noreferrer">
        Courses
      </a>
    ),
    key: "SubMenu",
  },
  {
    label: (
      <a href="/stem" rel="noopener noreferrer">
        CourseSTEM
      </a>
    ),
    key: "alipay",
  },
  {
    label: (
      <a href="/mentor" rel="noopener noreferrer">
        Mentor
      </a>
    ),
    key: "mentor",
  },
  {
    label: (
      <a href="/blog" rel="noopener noreferrer">
        Blog
      </a>
    ),
    key: "blog",
  },
];

const Header = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  // let { pathname: location } = useLocation();
  // useEffect(() => {
  //   setVisible(false);
  // }, [location]);
  return (
    <>
      <nav className="navbar">
        <Layout>
          <Layout.Header className="nav-header">
            <div className="d-flex justify-content-between align-items-center">
              <div className="logo">
                <h3 className="">Brand Here</h3>
              </div>
              <div className="mx-auto">
                <div className="leftMenu">
                  <LeftMenu mode={"horizontal "} />
                </div>
              </div>
              <div className="">
                <div className="rightMenu">
                  <Badge count={5}>
                    <Avatar shape="square" size="large" src={shoppingCart} />
                  </Badge>
                </div>
              </div>
              <Drawer
                width={300}
                title={"Brand Here"}
                placement="right"
                closable={true}
                onClose={showDrawer}
                visible={visible}
                zIndex={999999}
              >
                <div
                  className=""
                  style={{ marginLeft: "20px", marginBottom: "10px" }}
                >
                  <Badge count={5}>
                    <Avatar shape="square" size="large" src={shoppingCart} />
                  </Badge>
                </div>
                <LeftMenu mode={"inline "} />
                <Input.Search placeholder="Search"></Input.Search>
              </Drawer>
              <Button className="menuButton" type="text" onClick={showDrawer}>
                <MenuOutlined />
              </Button>
            </div>
          </Layout.Header>
        </Layout>
      </nav>
    </>
  );
};

// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const navItem = $$(".nav-link-cus");
// console.log(navItem);
// navItem.forEach((item) => {
//   item.onclick = function (evt) {
//     this.classList.add("active");
//   };
// });

export default Header;
