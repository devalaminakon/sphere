import React from "react";
import Container from "./layout/Container";
import ProductLayout from "./layout/ProductLayout";

const FlashSale = () => {
  const products = [
  {
    name: "Xpad Mini 6",
    price: 89000,
    oldPrice: 150000,
    discount: "8% Off",
    rating: 5,
    reviews: 125,
    description: "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc."
  },
  {
    name: "Hypermack Air Purpler M1",
    price: 89000,
    oldPrice: 150000,
    discount: "8% Off",
    rating: 4,
    reviews: 125,
    description: "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc."
  },
  {
    name: "AR10 AC 1PK with S-Inverter",
    price: 90000,
    oldPrice: 250000,
    discount: "13% Off",
    rating: 5,
    reviews: 125,
    description: "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc."
  }
];

  return (
    <Container>
      <div className="relative mt-24 ">
        <h2>
          Flash sale for <span className="text-primary">best</span> sellers
        </h2>
        <img
          className="absolute top-2 right-[82px] "
          src="./images/leis/leis_mini.svg"
          alt="leis_mini"
        />
      </div>
      <div className="flex gap-5 mt-16 mb-26 ">
        {
          products.map((item) => (
            <ProductLayout v2={true} name={item.name} price={item.price} oldPrice={item.oldPrice} description={item.description} discount={item.discount} rating={item.rating} reviews={item.reviews} key={item.name} />
          ))
        }
      </div>
    </Container>
  );
};

export default FlashSale;
