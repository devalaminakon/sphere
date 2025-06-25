import { useRef } from "react";
import Slider from "react-slick";
import ArrowNext from "../icons/ArrowNext";
import ArrowPrev from "../icons/ArrowPrev";
import Container from "./layout/Container";
import ProductLayout from "./layout/ProductLayout";

const Category = () => {
  const products = [
    {
      name: "Xiphone 14 Pro Maxe",
      price: 175.0,
      rating: 5,
      reviews: 121,
      description:
        "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc.",
    },
    {
      name: "Xiphone 13",
      price: 100.0,
      rating: 3,
      reviews: 89,
      description:
        "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc.",
    },

  ];

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <Container>
      <div className=" pt-[106px] py-21 ">
        <div className="flex justify-between ">
          <h2 className="text-black ">
            New <span className="text-primary">arrival</span> for you
          </h2>
          <div className="flex gap-6 ">
            <div
              className="size-[55px] border-[1px] border-black rounded-full flex items-center justify-center bg-transparent hover:bg-tia hover:border-transparent transition-all duration-150 "
              onClick={previous}
            >
              <ArrowPrev />
            </div>
            <div
              className="size-[55px] border-[1px] border-black rounded-full flex items-center justify-center bg-transparent hover:bg-tia hover:border-transparent transition-all duration-150 "
              onClick={next}
            >
              <ArrowNext />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-[46px]  ">
          <div className="side_bar mt-8 w-[260px] ">
            <ul className="flex flex-col gap-[16px] relative capitalize ">
              <span className="absolute h-full w-0.5 bg-offWhite "></span>
              <li className="flex gap-[18px] items-center group para text-ash cursor-pointer ">
                <span className="h-11 w-0.5 bg-offWhite group-hover:bg-primary z-50 transition-all duration-150  "></span>
                Computer & Laptop
                <span className="rounded-lg w-10 h-8 flex justify-center items-center text-base font-montserrat font-bold leading-5 text-center bg-black text-white ">
                  15
                </span>
              </li>
              <li className="flex gap-[18px] items-center group para text-ash cursor-pointer ">
                <span className="h-11 w-0.5 bg-offWhite group-hover:bg-primary z-50 transition-all duration-150  "></span>
                Mobile & Phone
                <span className="rounded-lg w-10 h-8 flex justify-center items-center text-base font-montserrat font-bold leading-5 text-center bg-tia text-black ">
                  35
                </span>
              </li>
              <li className="flex gap-[18px] items-center group para text-ash cursor-pointer ">
                <span className="h-11 w-0.5 bg-offWhite group-hover:bg-primary z-50 transition-all duration-150  "></span>
                Camera Imaging
                <span className="rounded-lg w-10 h-8 flex justify-center items-center text-base font-montserrat font-bold leading-5 text-center bg-primary text-white">
                  10
                </span>
              </li>
              <li className="flex gap-[18px] items-center group para text-ash cursor-pointer ">
                <span className="h-11 w-0.5 bg-offWhite group-hover:bg-primary z-50 transition-all duration-150  "></span>
                TV & Smart Box
                <span className="rounded-lg w-10 h-8 flex justify-center items-center text-base font-montserrat font-bold leading-5 text-center bg-offWhite text-black">
                  8
                </span>
              </li>
              <li className="flex gap-[18px] items-center group para text-ash cursor-pointer ">
                <span className="h-11 w-0.5 bg-offWhite group-hover:bg-primary z-50 transition-all duration-150  "></span>
                Home Appliance
                <span className="rounded-lg w-10 h-8 flex justify-center items-center text-base font-montserrat font-bold leading-5 text-center bg-[#FFE921] text-black">
                  2
                </span>
              </li>
            </ul>
          </div>
          <div className="w-[940px] slider-container overflow-hidden ">
            <Slider
              className="category_slider"
              {...settings}
              ref={(slider) => {
                sliderRef = slider;
              }}
            >
              {products.map((item) => (
                <ProductLayout
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  rating={item.rating}
                  reviews={item.reviews}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Category;
