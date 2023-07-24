import React, { useState } from "react";
import shoppingCart from "../images/icon-shopping-cart.jpg";
import { Avatar, Badge, Button, Drawer, Menu, Input } from "antd";
import { MenuOutlined, CloseOutlined, SearchOutlined } from "@ant-design/icons";
const { Search } = Input;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Trang chủ", "1"),
  getItem("Về chúng tôi", "2"),
  getItem("Khóa học STEM", "3"),
  getItem("Khóa học", "4", null, [getItem("....", "5"), getItem(".....", "6")]),
  getItem("Mentor", "7"),
  getItem("Blog", "8"),
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <nav className="navbar navbar-expand-md p-5">
        <div className="container-fluid">
          <a className="" href="#!">
            Logo
          </a>
          <Button onClick={showDrawer} className="navbar-toggler">
            <MenuOutlined />
          </Button>
          <Drawer
            closeIcon={null}
            width={400}
            onClose={onClose}
            open={open}
            className="container"
          >
            <div className="container d-flex align-items-center justify-content-between">
              <img src={shoppingCart} alt="??" className="w-25"></img>

              <Button onClick={onClose} className="border-0">
                <CloseOutlined
                  style={{ fontSize: "24px", fontWeight: "bolder" }}
                ></CloseOutlined>
              </Button>
            </div>
            <div className="container mt-4 mb-4">
              <Badge count={5} offset={[3, 10]}>
                <Avatar shape="circle" size={"large"} src={shoppingCart} />
              </Badge>
            </div>
            <div>
              <Menu
                className="h-100 p-1 fs-5 fw-bolder"
                defaultOpenKeys={["sub1"]}
                mode="inline"
                items={items}
              />
            </div>
            <div>
              <Input
                suffix={
                  <Button
                    icon={
                      <SearchOutlined
                        style={{
                          fontSize: "24px",
                          fontWeight: "bolder",
                          color: "black",
                        }}
                      />
                    }
                    type="link"
                    size="large"
                    className="p-1"
                  />
                }
                className="w-100"
                size="large"
                placeholder="input search text"
              />
            </div>
          </Drawer>

          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#!">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Về chúng tôi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"> Khóa học STEM</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Khóa học
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Mentor
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="d-shoppingCart">
            <Badge count={5} offset={[3, 10]}>
              <Avatar shape="circle" size={"large"} src={shoppingCart} />
            </Badge>
          </div>
        </div>
      </nav>
      <header class="container-fluid header-banner text-center d-flex">
        <div class="m-auto">
          <h2 class="header-banner-heading mt-5">Danh Sách Khóa Học</h2>
          <p class="header-banner-sub-heading mt-3">Trang chủ - Khóa học</p>
        </div>
      </header>
    </>
  );
};

export default Header;
