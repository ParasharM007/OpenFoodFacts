import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import loadingSpinner from "./loading.gif";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(14200, 14200);
    const fetchData = async () => {
      try {
        setLoading(true);
        let response = await fetch(`/api/v0/product/${id}.json`);
        response = await response.json();
        let tempdata = response.product;
        setProduct(tempdata);
        setLoading(false);
      } catch (err) {
        console.log("Failed to fetch Single Product data: " + err.message);
      }
    };
    fetchData();
  }, [id]);

  let tagsWithoutPrefix = [];
  return (
    <>
      {" "}
      {loading ? (
        <div className="loading">
          <img src={loadingSpinner} />
        </div>
      ) : (
        <div className="single-product-page">
          <div className="left">
            <img src={product.image_url} alt="" />
          </div>
          <div className="right">
            <span className="name">{product?.product_name}</span>
            <span className="detail" id="nutri">
              Nutrition Grades:- {product?.nutrition_grades}
            </span>
            <span className="detail" id="nova">
              Nova-Score:- {product?.nova_group}
            </span>
            <span className="desc">{product?.ingredients_text}</span>
            <span>
              {
                (tagsWithoutPrefix = product?.ingredients_analysis_tags?.map(
                  (tag) => tag.slice(3) + " "
                ))
              }
            </span>
            <button
              className="url"
              onClick={() => window.open(product?.url, "_blank")}
            >
              Click to explore...
            </button>

            <span className="divider" />
            <div className="info-product">
              <span className="text-bold">
                Category:
                <span> {product?.categories}</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
