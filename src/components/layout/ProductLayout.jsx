import { useState } from "react";
import CartIcon from "../../icons/CartIcon";
import HeartIcon from "../../icons/HeartIcon";
import StarDiscount from "../../icons/StarDiscount";
import StarIcon from "../../icons/StarIcon";
import Button from "../Button";

const ProductLayout = ({
  v2 = false,
  name,
  price,
  oldPrice,
  discount,
  rating,
  reviews,
  description,
}) => {

  const safeStars =
    Number.isFinite(+rating) && +rating > 0 ? Math.floor(+rating) : 0;
  const [ratingStars] = useState(new Array(safeStars).fill(1));

  return (
    <>
      {v2 || (
        <div className="flex-1">
          <div className="bg-white custom-drop-shadow custom-fill-gradient rounded-2xl ">
            <div className="relative">
              <img
                className="pt-[94px] pb-11 px-14 "
                src="./images/productImageVOne.jpg"
                alt="productImageVOne"
              />
              <div className="heart_box size-[49px] bg-black flex justify-center items-center rounded-full absolute top-7 right-7 hover:bg-white border border-transparent hover:border-black hover:text-black ">
                <HeartIcon />
              </div>
            </div>
          </div>
          <div>
            <div className="title flex justify-between pt-[38px] pb-[22px] ">
              <h3>{name}</h3>
              <p className="price">${price}</p>
            </div>
            <p className="para text-black">{description}</p>
            <div className="stars flex gap-0.5 pt-4 pb-5 ">
              {ratingStars.map((item, index) => (
                <StarIcon key={index} />
              ))}
              <p className="ml-2 ">({reviews})</p>
            </div>
            <Button
              text={"Add to Cart"}
              to={"#"}
              leftIcon={<CartIcon />}
              outLine={true}
            />
          </div>
        </div>
      )}

      {v2 && (
        <div className="flex-1">
          <div className="bg-white custom-drop-shadow rounded-2xl pt-[94px] px-14">
            <div className="relative">
              <img
                className="pb-4 "
                src="./images/productImageVOne.jpg"
                alt="productImageVOne"
              />
              <span className="absolute -top-9 -right-8">
                <StarDiscount />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-montserrat text-xl font-bold leading-[22px] w-full text-center ">
                  {discount}
                </p>
              </span>
              <div className="flex items-center justify-center pb-[30px] gap-3 ">
                <p className="text-[26px] font-montserrat font-bold leading-8 text-[#0177FC] ">
                  ${price}
                </p>
                <span className="text-[#9A9A9A] font-montserrat text-sm font-medium leading-4 line-through">
                  IDR {oldPrice}
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="title flex justify-between pt-[38px] pb-[22px] ">
              <h3>{name}</h3>
            </div>
            <p className="para text-black">{description}</p>
            <div className="stars flex gap-0.5 pt-4 pb-5 ">
              {ratingStars.map((item, index) => (
                <StarIcon key={index} />
              ))}
              <p className="ml-2 ">({reviews})</p>
            </div>
            <Button
              text={"Add to Cart"}
              to={"#"}
              leftIcon={<CartIcon />}
              outLine={true}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductLayout;
