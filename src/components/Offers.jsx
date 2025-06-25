import React from "react";
import Container from "./layout/Container";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <Container>
      <div className="flex flex-wrap justify-between gap-y-[22px] ">
        <Link to={"#"}>
          {" "}
          <img src="./images/offersImage/Group 541.png" alt="" />
        </Link>
        <Link to={"#"}>
          {" "}
          <img src="./images/offersImage/Group 542.png" alt="" />
        </Link>
        <Link to={"#"}>
          {" "}
          <img src="./images/offersImage/Group 543.png" alt="" />
        </Link>
        <Link to={"#"}>
          {" "}
          <img src="./images/offersImage/Group 544.png" alt="" />
        </Link>
      </div>
    </Container>
  );
};

export default Offers;
