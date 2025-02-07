import React, { useState } from "react";
import image from "./Image_not_available.png"
import "./Search.css"
import loadingSpinner from "./loading.gif"
import { useNavigate } from "react-router-dom";

function Search({ setShowSearch }) {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([])
  const [loading,setLoading] = useState(false)
  const navigate=useNavigate();
  const onSearch = async(e) => {
    if (e.key ==="Enter") {
         setQuery("");
      setLoading(true);
      console.log("loading...")
         await fetchSearch(query);
         setLoading(false);
         console.log("loading false")
        console.log(query);
        

    }
   
  };
  const handleCross=()=>{
      setShowSearch(false);
      navigate("/");
      
  }
  const fetchSearch = async(query) =>{
   try

   { 
    
    const response=await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&json=true`)
    const searchdata=await response.json();
    const tempdata= searchdata.products;
    setSearchData(tempdata);
    console.log(tempdata);
  }
  catch(e){ console.error("Searched Data couldn't be fetched"+e) }
    
  }
  return (
    <> 
      <div className="search">
       <div className="search-bar">
         <input
        type="text"
        placeholder="Search food here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={onSearch}
        />
      <i
        className="fa-sharp-duotone fa-solid fa-xmark custom-icon"
        // onClick={() => setShowSearch(false)}
        onClick={handleCross}
        ></i>
        </div>
        <hr />
        {loading ? (
        <div className="loading-spinner">
          <img src={loadingSpinner} alt="Loading..." />
        </div>
      ) : (
        <div className="product-field" >
            {searchData.map((item)=>(
          <div className="product" key={item.id} onClick={()=>{navigate(`/product/${item.id}`)
          }}>
                <img src={item.image_url||image} alt="image" />
                <div className="product-details">
                    <div className="product-name">
            {item.product_name}
                    </div>
                    <div className="details">
                    {item?.ciqual_food_name_tags?.length > 0 && item?.ciqual_food_name_tags[0]!== "unknown" ? item?.ciqual_food_name_tags[0]: item?.product_name}

                    </div>
                    
                </div>
            </div>

            ))
            }
        </div>)}
        </div>
    </>
  );
}

export default Search;
