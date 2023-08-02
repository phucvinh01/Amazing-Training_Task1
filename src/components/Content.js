import React from "react";
import { Select, Pagination, Row, Col } from "antd";
import Item from "./Item";

import Data from "../data/Course_data";
import img_cover_6 from "../images/WEB-01.png";

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
        <Row gutter={[32, 16]}>
          {Data.map((item) => (
            <Col span={8} xs={24} sm={24} lg={8} md={8} order={1}>
              <Item
                key={item.id}
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
            </Col>
          ))}
        </Row>
        <div className="d-flex">
          <Pagination
            responsive={true}
            defaultCurrent={1}
            total={50}
            className="m-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Content;
