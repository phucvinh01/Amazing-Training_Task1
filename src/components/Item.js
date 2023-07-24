import React from "react";
import { Avatar, Card ,Rate, Button } from "antd";
const { Meta } = Card;
const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9}

const Item = ({img,name,mentorImg,mentorName,member,description,rate,price,day}) => {
  return (
    <>
      <Card
        cover={<img alt="example" src={img} sizes="300px" height={200}  className="position-relative"/>}
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
        <h5 className="">{name}</h5>

        <small className="text-munted mt-3">Mentor: <span className="text-danger">{mentorName}</span></small>

        <p>{member} Học viên</p>

        <p>{description}</p>

        <Rate disabled defaultValue={rate}></Rate>

        <p className="d-flex align-items-center justify-content-between">
          <strong className="text-danger">{new Intl.NumberFormat('vi-VN', config).format(price)}</strong>{" "}
          <span>{day} buổi học</span>{" "}
        </p>

        <Button className="mt-3 w-100" type="primary" danger>
          Xem chi tiết
        </Button>
      </Card>
    </>
  );
};

export default Item;
