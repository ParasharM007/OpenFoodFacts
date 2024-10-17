import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

function Product({ homedata }) {
  const navigate = useNavigate();
  return (
    <>
      {homedata &&
        homedata.length !== 0 &&
        homedata.map((item) => (
          <div
            className="container"
            key={item.id}
            onClick={() => navigate(`/product/` + item.id)}
          >
            <img src={item?.image_small_url} alt="" />
            <div className="product-details">
              <div className="name">{item?.product_name || "Product name"}</div>
              <div className="ingredients">
                {item?.ingredients_text?.slice(0, 40)}...
              </div>
              <div className="nutri">
                <div className="nutrition-grade">
                  Nutrition-grade
                  <span id="nutrition">{item?.nutrition_grades || "N/A"}</span>
                </div>
                <div className="nova-score">
                  Nova-score
                  <span id="nova">{item?.nova_group || "N/A"}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Product;
