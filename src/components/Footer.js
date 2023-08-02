import React from "react";
import location from "../images/icon-location.png";
import mail from "../images/icon-gmail.png";
import phone from "../images/icon-phone.png";
import Layout from "antd/es/layout/layout";
import { Col, Row } from "antd";
const Footer = () => {
  return (
    <Layout.Footer className="container-fluid footer-color text-white text-start">
      <div className="container p-4">
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col className="mb-2" span={6} xs={24} sm={24} md={6} lg={6}>
            <h5 className="text-uppercase">Footer Logo</h5>

            <p className="text-justify">
              Chúng tôi cung cấp các khoá học chất lượng cao để cải thiện các kỷ
              năng lập trình của các bạn. Tất cả các mentor của chúng tôi đều có
              rất nhiều kinh nghiệm trong thực tế và giảng day.
            </p>
            <p className="mt-3 fw-bolder text-orange">Theo dõi chúng tôi tại</p>
            <i className="fa-brands fa-facebook p-2 fs-4"></i>
            <i className="fa-brands fa-linkedin p-2 fs-4"></i>
            <i className="fa-brands fa-youtube  p-2 fs-4"></i>
          </Col>
          <Col className="mb-2" span={6} xs={24} sm={24} md={6} lg={6}>
            <h5 className="text-uppercase text-orange">Menu</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Nền tảng LMS
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Khóa học STEM
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Khóa học
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Mentor
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Blog
                </a>
              </li>
            </ul>
          </Col>
          <Col className="mb-2" span={6} xs={24} sm={24} md={6} lg={6}>
            <h5 className="text-uppercase text-orange">Điều khoản</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Điều khoản dịch vụ
                </a>
              </li>
            </ul>

            <h5 className="text-uppercase mt-3 text-orange">Cộng tác viên</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">
                  Đăng ký Cộng tác viên
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Đăng ký Mentor
                </a>
              </li>
            </ul>
          </Col>
          <Col className="mb-2" span={6} xs={24} sm={24} md={6} lg={6}>
            <h5 className="text-uppercase mb-0 text-orange">
              Liên hệ với chúng tôi
            </h5>

            <ul className="list-unstyled mt-3">
              <li className="mt-3">
                <a href="#!" className="text-white d-flex">
                  <img src={location} className="footer-icon" alt="img1"></img>
                  <p className=" my-0">Tây Thanh, Tân Phú, Hồ Chí Minh</p>
                </a>
              </li>
              <li className="mt-3">
                <a href="#!" className="text-white d-flex">
                  <img src={mail} className="footer-icon" alt="img1"></img>
                  <p className="  my-0">nguyenphucvinh1920@gmail.com</p>
                </a>
              </li>
              <li className="mt-3">
                <a href="#!" className="text-white d-flex">
                  <img src={phone} className="footer-icon" alt="img1"></img>
                  <p className="  my-0">+84 485 465 25</p>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="text-center p-3">
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          Vinh - hand - some
        </a>
      </div>
    </Layout.Footer>
  );
};

export default Footer;
