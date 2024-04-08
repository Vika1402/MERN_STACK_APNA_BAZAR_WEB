import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
    const navigate = useNavigate();

    // Use optional chaining and nullish coalescing to access nested properties safely
    const imageUrl = data?.image?.data?.[0]?.attributes?.url ?? '';
    const title = data?.title ?? '';
    const price = data?.price ?? '';

    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                {/* Use a placeholder image if imageUrl is empty */}
                <img src={process.env.REACT_APP_STRIPE_APP_APNA_URL + data.img.data.attributes.url} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">{title}</span>
                <span className="price">&#8377;{price}</span>
            </div>
        </div>
    );
};

export default Product;
