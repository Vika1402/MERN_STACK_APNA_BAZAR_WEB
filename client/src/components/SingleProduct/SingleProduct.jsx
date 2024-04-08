import "./SingleProduct.scss";
import { useContext, useState } from "react";
import RelatedProduct from "./RelatedProducts/RelatedProducts";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaShoppingCart,
  FaTwitter,
} from "react-icons/fa";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const [quantity,setQuantity]=useState(1);
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { handleAddToCart}=useContext(Context)
 const increment=()=>{
  setQuantity((prevState)=>prevState+1);
 }
 const decrement=()=>{
  setQuantity((prevState)=>{
    if(prevState===1) return 1;
    return prevState-1;
  });
 
 }
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data || !data.data || data.data.length === 0) {
    return <div>Error: Unable to fetch product data.</div>;
  }

  const product = data.data[0].attributes;
  const image = process.env.REACT_APP_STRIPE_APP_APNA_URL + product.img.data.attributes.url ;
  


  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={image} alt="" />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">{product.price}</span>
            <span className="desc">{product.desc}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button className="add-to-cart-button" onClick={()=>{
                handleAddToCart(data.data[0],quantity)
                setQuantity(1);
              }}>
                <FaShoppingCart size={20} />
                Add to Cart
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category: <span>{product.categories.data[0].attributes.title} </span>
              </span>

              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebook size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedin size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProduct productId={id} categoryId={product.categories.data[0].id}/>
      </div>
    </div>
  );
};

export default SingleProduct;
