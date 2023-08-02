import React from "react";
import { Avatar, Card, Rate, Button } from "antd";
const { Meta } = Card;
const config = { style: "currency", currency: "VND", maximumFractionDigits: 9 };

const Item = ({
  img,
  name,
  mentorImg,
  mentorName,
  member,
  description,
  rate,
  price,
  day,
}) => {
  return (
    <>
      <Card
        className="card"
        cover={
          <img
            alt="example"
            src={img}
            sizes="300px"
            height={200}
            className="position-relative"
          />
        }
      >
        <Meta
          avatar={
            <Avatar
              src={mentorImg}
              shape="square"
              size={60}
              className="mb-4 avatar"
            />
          }
        />
        <h5>{name}</h5>

        <em className="text-munted mt-3">
          Mentor: <span className="text-danger ">{mentorName}</span>
        </em>

        <p>
          <i className="fa-solid fa-user"></i> <em>{member} Học viên</em>
        </p>

        <p className="overflow-text">{description}</p>

        <Rate disabled defaultValue={rate}></Rate>

        <p className="d-flex align-items-center justify-content-between">
          <strong className="text-danger fw-bolder">
            {new Intl.NumberFormat("vi-VN", config).format(price)}
          </strong>{" "}
          <span>
            <i className="fa-solid fa-calendar-days"></i> {day} buổi học
          </span>{" "}
        </p>

        <Button className="btn-main" type="ghost" block>
          Xem chi tiết
        </Button>
      </Card>
    </>
  );
};

export default Item;
