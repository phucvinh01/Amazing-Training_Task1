import React from "react";
import banner2 from "../images/banner-2.jpg";
import banner3 from "../images/banner-3.jpg";
import banner4 from "../images/banner-4.jpg";
import courseData from "../data/Home_data";
import Item from "../components/Item";
import Slider from "react-slick";
import Mentor from "../components/Mentor";
import { Button, Space, Row, Col, Carousel } from "antd";

const coursesList = courseData.courses;
const mentorList = courseData.mentors;
const advantagesList = courseData.advantages;
const advantages2List = courseData.advantages2;
const about = courseData.about;
const logos = courseData.logos;
const banner = courseData.banner;

const coursesSpeed = coursesList.find(
  (course) => course.title == "Khoá học cấp tốc"
);
const coursesSpecial = coursesList.find(
  (course) => course.title == "Khoá học tiêu biểu"
);
const arrCoursesSpecial = coursesSpecial.items;
const arrCoursesSpeed = coursesSpeed.items;
const arrMentor = mentorList.items;
const arrAdvantages = advantagesList.items;
const arrLogos = logos.items;

var settings = {
  arrows: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,

  appendDots: (dots) => (
    <div style={{ bottom: "-40px", marginBottom: "20px" }}>
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  responsive: [
    {
      breakpoint: 2024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 750,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};
var settingsAuto = {
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  appendDots: (dots) => (
    <div style={{ bottom: "-40px" }}>
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 2024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 750,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        {/* Session-1 Courses */}
        <div className="home-banner text-center p-4">
          <div className="container">
            <p className="text-orange mt-5">{banner.title}</p>
            <h1>{banner.caption}T</h1>
            <small className="text-white mt-4">{banner.description}</small>
            <br></br>
            <a className="mt-4 btn-main btn" href="/course">
              Xem Khóa Học
            </a>
          </div>
        </div>
        {/* Session-2 About us*/}
        <div className="p-4 home-banner-about mb-4">
          <h2 className="text-center">{about.title}</h2>
          <div className="row mt-4">
            <div className="col-2"></div>
            <div className="col-12 col-sm-12 col-md-4	col-lg-4 col-xl-4 justify-content-end mb-4">
              <p className="text-justify fs-6">{about.description}</p>
              <div className="d-flex align-items-center justify-content-center mx-auto">
                <Space wrap={true}>
                  <Button type="ghost" href="/course" className="btn-main">
                    XEM KHÓA HỌC
                  </Button>
                  <Button type="ghost" href={about.linkFb} className="btn-main">
                    HỖ TRỢ TƯ VẤN
                  </Button>
                </Space>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4	col-lg-4 col-xl-4">
              <img
                src={banner2}
                alt="banner"
                className="rounded w-100 shadow"
              ></img>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        {/* Session-3 Advantages 1*/}
        <div className="container p-3 mb-4">
          <h2 className="text-center fw-bolder mb-4">{advantagesList.title}</h2>
          <Row gutter={[32, 16]}>
            {arrAdvantages.map((item) => (
              <Col span={8} xs={24} sm={24} lg={8} md={8} order={1}>
                <h6 className="text-orange fw-bolder">{item.title}</h6>
                <p className="text-justify">{item.content}</p>
              </Col>
            ))}
          </Row>
        </div>

        {/* Session-4  Clip-path*/}
        <div className="mb-4">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 p-0 position-relative ">
              <img
                src={banner3}
                alt="banner-3"
                className="w-100 rounded-3 mix-blend banner-left"
              ></img>
              <div className="banner-text">
                <h3 className="text-white fw-bolder">TRÁI NGÀNH</h3>
                <small>From zero to hero</small>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 p-0 position-relative ">
              <img
                src={banner4}
                alt="banner-4"
                className="w-100 rounded-3 mix-blend banner-right"
              ></img>
              <div className="banner-text">
                <h3 className="text-white fw-bolder">ĐÃ BIẾT LẬP TRÌNH</h3>
                <small>Đã có kiến thức tư duy lập trình và OOP</small>
              </div>
            </div>
          </div>
        </div>
        {/* Session-5  Specail*/}
        <div className="container mb-4 mt-4 ">
          <h2 className="text-center">{coursesSpecial.title}</h2>
          <div className="d-gird justify-content-center">
            <Carousel {...settings}>
              {arrCoursesSpecial.map((item) => (
                <div className="p-2 media-sm">
                  <Item
                    img={item.banner}
                    name={item.name}
                    mentorImg={item.mentorAvatar}
                    mentorName={item.mentor}
                    member={item.students}
                    description={item.description}
                    rate={item.star}
                    price={item.price}
                    day={item.lessons}
                  ></Item>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        {/* Session-6 Speed*/}
        <div className="container mb-4 mt-4">
          <h2 className="text-center">{coursesSpeed.title}</h2>
          <Carousel {...settings}>
            {arrCoursesSpeed.map((item) => (
              <div className="p-2 media-sm ">
                <Item
                  img={item.banner}
                  name={item.name}
                  mentorImg={item.mentorAvatar}
                  mentorName={item.mentor}
                  member={item.students}
                  description={item.description}
                  rate={item.star}
                  price={item.price}
                  day={item.lessons}
                ></Item>
              </div>
            ))}
          </Carousel>
        </div>
        {/* Session-7 Mentor*/}
        <div className="container mb-4 mt-4">
          <h2 className="text-center">{mentorList.title}</h2>
          <Carousel {...settings}>
            {arrMentor.map((item) => (
              <div className="p-2 media-sm">
                <Mentor
                  key={item.link}
                  img={item.mentorAvatar}
                  name={item.mentor}
                  description={item.description}
                ></Mentor>
              </div>
            ))}
          </Carousel>
        </div>
        {/* Session-8 Advantages 2*/}
        <div className="h-300px bg-light mb-4 text-center mx-auto d-flex align-items-center justify-content-center">
          <div>
            <p>{advantages2List.title}</p>
            <h4>{advantages2List.caption}</h4>
            <div>
              <Space wrap align="baseline">
                <Button
                  style={{ width: "200px" }}
                  type="ghost"
                  title="DANH SÁCH KHÓA HỌC"
                  href={advantages2List.linkCourse}
                  className="btn-main"
                >
                  DANH SÁCH KHÓA HỌC
                </Button>
                <Button
                  style={{ width: "200px" }}
                  type="ghost"
                  title="TƯ VẤN LỘ TRÌNH"
                  href={advantages2List.linkFb}
                  className="btn-main"
                >
                  TƯ VẤN LỘ TRÌNH
                </Button>
              </Space>
            </div>
          </div>
        </div>

        {/* Session-9 Logo*/}
        <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="w-50 mb-4">
            <h4 className="text-center">{logos.title}</h4>
            <Carousel {...settingsAuto}>
              {arrLogos.map((item) => (
                <div className="shadow">
                  <img src={item} alt={item} className="logo"></img>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
