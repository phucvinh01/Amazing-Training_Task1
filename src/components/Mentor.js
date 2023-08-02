import React from "react";

const Mentor = (props) => {
  return (
    <>
      <div className="card">
        <img
          className="card-img-top hight-180px rounded-3"
          src={props.img}
          alt="Card image cap"
        ></img>
        <div className="card-body ">
          <h5 className="text-center text-orange ">{props.name}</h5>
          <p className="card-text overflow-text">{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Mentor;
