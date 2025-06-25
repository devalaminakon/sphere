import { Link } from "react-router-dom";
import LeftArrow from "../../icons/LeftArrow";
import Container from "./Container";
import Button from "../Button";

const Navbar = () => {
  return (
    <Container>
      <header className="flex justify-between items-center py-12 ">
        <div className="">
          <Link to={"#"}>
            <img className="mb-2" src="./images/logo/logo.png" alt="logo" />
          </Link>
        </div>
        <ul className="text-gray font-montserrat text-sm font-semibold leading-4 uppercase flex justify-between gap-6  ">
          <li className="p-4 cursor-pointer hover:text-primary ">
            <Link to={"#"}>Home</Link>
          </li>
          <li className="p-4 cursor-pointer hover:text-primary ">
            <Link to={"#"}>Pricing</Link>
          </li>
          <li className="p-4 cursor-pointer hover:text-primary ">
            <Link to={"#"}>Events</Link>
          </li>
          <li className="p-4 cursor-pointer hover:text-primary ">
            <Link to={"#"}>Company</Link>
          </li>
        </ul>
        <div className="flex gap-6 ">
          <Link
            to={"#"}
            className="text-gray font-montserrat text-sm font-semibold leading-4 uppercase flex justify-between gap-6 p-4 hover:text-primary "
          >
            LOGIN
          </Link>
          <Button
            version={"black"}
            text={"Sign Up Now"}
            rightIcon={<LeftArrow />}
          />
        </div>
      </header>
    </Container>
  );
};

export default Navbar;
