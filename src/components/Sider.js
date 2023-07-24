import React from "react";
import { Checkbox } from "antd";
import { Input, Space, Button } from "antd";
import img_1 from "../images/icon-title-course.png";
import img_2 from "../images/icon-title-course-2.png";
import img_3 from "../images/icon-title-course-3.png";
import img_4 from "../images/icon-title-course-4.png";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const Sider = () => {
  return (
    <>
      <div className="container">
        <h5>KHOẢNG GIÁ</h5>
        <p>Giá từ</p>
        <Input className="" placeholder="0 VND"></Input>
        <p className="mt-3">Đến giá</p>
        <Input className="" placeholder="10.000.000 VND"></Input>
        <h5 className="mt-3">HÌNH THỨC HỌC</h5>
        <Checkbox onChange={onChange}>Online</Checkbox>
        <br></br>
        <Checkbox onChange={onChange}>Offline</Checkbox>

        <div>
          <h5 className="mt-3">TRÌNH ĐỘ</h5>
          <div class="d-flex align-items-center justify-content-between">
            <Checkbox>Dễ</Checkbox>
            <img src={img_1} alt="img" className="w-25"></img>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <Checkbox>Trung bình</Checkbox>
            <img src={img_2} alt="img" className="w-25"></img>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <Checkbox>Khó</Checkbox>
            <img src={img_3} alt="img" className="w-25"></img>
          </div>
          <div class="d-flex align-items-center justify-content-between">
          <Checkbox>Cực khó</Checkbox>
            <img src={img_4} alt="img" className="w-25"></img>
          </div>
        </div>
      </div>
      <div className="container">
        <h5 className="mt-3">Lĩnh vực</h5>
        <Checkbox>Back-End</Checkbox>
        <br />
        <Checkbox>Front-End</Checkbox>
        <br />

        <Checkbox>Database</Checkbox>
        <br />

        <Checkbox>Cấp tốc</Checkbox>
        <br />

        <Checkbox>Other</Checkbox>
        <br />

        <Checkbox>STEM</Checkbox>
      </div>

      <Button type="primary" danger className="w-100 mt-3">
        Tìm kiếm
      </Button>
    </>
  );
};

export default Sider;
