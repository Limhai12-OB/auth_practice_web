import { auth } from "@/auth";
import ProductCardComponent from "@/components/ProductCardComponent";
import { getAllProductService } from "@/service/product.service";
import React from "react";

export default async function page() {
  return (
    <div className="m-auto">
      {/* {products.payload.map((product) => (
        <ProductCardComponent key={product.productId} product={product} />
      ))} */}
      This is product page
    </div>
  );
}

