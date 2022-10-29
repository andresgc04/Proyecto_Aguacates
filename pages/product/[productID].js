import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { productID },
  } = useRouter();

  return (
    <div>
      <h1>Esta es la página del producto: {productID}</h1>
    </div>
  );
};

export default ProductItem;
