import React from "react";
import { Select,Pagination } from "antd";
import Item from './Item'
import img_mentor_1 from "../images/avatar-mentor-1.jpg";
import img_mentor_2 from "../images/avatar-mentor-2.jpg";
import img_mentor_3 from "../images/avatar-mentor-3.jpg";
import img_cover_1 from "../images/net-api-course.jpg";
import img_cover_2 from "../images/CÁ NHÂN HÓA CHO TỪNG HỌC VIÊN.jpg";
import img_cover_3 from "../images/LỘ TRÌNH PHÁT TRIỂN-01.png";
import img_cover_4 from "../images/code-html.png";
import img_cover_5 from "../images/devops-course-banner.png";
import img_cover_6 from "../images/WEB-01.png";




const Data = [
  {
    id: 1,
    img: img_cover_1,
    mentor_img: img_mentor_3,
    name: ".NET Core API",
    mentor_name: "Trần Tuấn Hiệp",
    member: 104,
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eaque nemo laudantium, voluptatibus omnis rem optio amet deleniti veniam similique nisi suscipit natus quisquam veritatis ipsa explicabo. Praesentium, minima aut.",
    vote: 5,
    price: 30000000,
    day: 15,
  },
  {
    id: 2,
    img: img_cover_2,
    mentor_img: img_mentor_1,
    name: ".NET Core API",
    mentor_name: "Trần Tuấn Hiệp",
    member: 104,
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eaque nemo laudantium, voluptatibus omnis rem optio amet deleniti veniam similique nisi suscipit natus quisquam veritatis ipsa explicabo. Praesentium, minima aut.",
    vote: 4,
    price: 30000000,
    day: 15,
  },
  {
    id: 3,
    img: img_cover_3,
    mentor_img: img_mentor_2,
    name: ".NET Core API",
    mentor_name: "Trần Tuấn Hiệp",
    member: 104,
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eaque nemo laudantium, voluptatibus omnis rem optio amet deleniti veniam similique nisi suscipit natus quisquam veritatis ipsa explicabo. Praesentium, minima aut.",
    vote: 5,
    price: 30000000,
    day: 15,
  },
  {
    id: 4,
    img: img_cover_4,
    mentor_img: img_mentor_3,
    name: ".NET Core API",
    mentor_name: "Trần Tuấn Hiệp",
    member: 104,
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eaque nemo laudantium, voluptatibus omnis rem optio amet deleniti veniam similique nisi suscipit natus quisquam veritatis ipsa explicabo. Praesentium, minima aut.",
    vote: 0,
    price: 30000000,
    day: 15,
  },
  {
    id: 5,
    img: img_cover_5,
    mentor_img: img_mentor_1,
    name: ".NET Core API",
    mentor_name: "Trần Tuấn Hiệp",
    member: 104,
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eaque nemo laudantium, voluptatibus omnis rem optio amet deleniti veniam similique nisi suscipit natus quisquam veritatis ipsa explicabo. Praesentium, minima aut.",
    vote: 1,
    price: 30000000,
    day: 15,
  },
  {
    id: 6,
    img: img_cover_6,
    mentor_img: img_mentor_1,
    name: ".NET Core API",
    mentor_name: "Trần Tuấn Hiệp",
    member: 104,
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eaque nemo laudantium, voluptatibus omnis rem optio amet deleniti veniam similique nisi suscipit natus quisquam veritatis ipsa explicabo. Praesentium, minima aut.",
    vote: 3,
    price: 30000000,
    day: 15,
  },
];

const Content = () => {
  return (
    <>
      <div className="d-flex  justify-content-between">
        <h5>{Data.length} Khóa học</h5>
        <Select
          defaultValue="Sắp xếp khoá học...."
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "Yiminghe",
              label: "yiminghe",
            },
            {
              value: "Sắp xếp khoá học....",
              label: "Sắp xếp khoá học....",
            },
          ]}
        />
      </div>
      <div className="container mt-4">
        <div className="row">
          {Data.map((item) => (
            <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
              <Item
                img = {item.img}
                name = {item.name}
                mentorImg = {item.mentor_img}
                mentorName= {item.mentor_name}
                member = {item.member}
                description= {item.description}
                rate= {item.vote}
                price= {item.price}
                day =  {item.day}
              ></Item>
            </div>
            
          ))}
        </div>
        <div className="d-flex">
          <Pagination responsive = {true} defaultCurrent={1} total={50} className="m-auto"/>
        </div>
      </div>
    </>
  );
};

export default Content;
