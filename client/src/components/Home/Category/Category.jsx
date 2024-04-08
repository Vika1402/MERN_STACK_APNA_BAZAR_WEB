import React from "react";
import "./Category.scss";
import { useNavigate } from "react-router-dom";

function Category({ categories }) {
  const navigate = useNavigate();
  // Check if categories or categories.data is undefined before accessing it
  if (!categories || !categories.data) {
    return <div>No categories available</div>;
  }

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories.data.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            {item.attributes &&
              item.attributes.img &&
              item.attributes.img.data && (
                <img
                  onClick={() => navigate("/category/")}
                  src={
                    process.env.REACT_APP_STRIPE_APP_APNA_URL +
                    item.attributes.img.data.attributes.url
                  }
                  alt=""
                />
              )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;