import React, { useEffect, useState } from "react";
import "./Products.css";
import loadingSpinner from "./loading.gif";
import Product from "./Product";

function Products({ category, pageSize, page }) {
  const [loading, setLoading] = useState(false);
  const [homedata, setHomeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let response;
        {
          category === "/"
            ? (response = await fetch(
                `https://world.openfoodfacts.org/cgi/search.pl?search_terms={name}&json=true&page=${page}&page_size=${pageSize}`
              ))
            : (response = await fetch(
                `/cgi/search.pl?search_terms=${category}&json=true&page=${page}&page_size=${pageSize}`
              ));
        }
        const data = await response.json();
        const tempdata = data.products;

        setHomeData(...homedata, tempdata);
        setLoading(false);
        console.log(tempdata);
      } catch (e) {
        console.error("Searched Data couldn't be fetched" + e);
      }
    };

    fetchData(page);
  }, []);

  const capcategory = category.toUpperCase();

  return (
    <>
      <div className="title">
        {
          (document.title =
            capcategory !== "/"
              ? capcategory + " for Foodies"
              : " Welcome Foodies")
        }
      </div>
      <div className="main-container">
        {loading ? (
          <img src={loadingSpinner} />
        ) : (
          <Product homedata={homedata} />
        )}
      </div>
    </>
  );
}

export default Products;
