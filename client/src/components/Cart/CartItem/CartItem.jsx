import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utils/context";

const CartItem = () => {
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);

  return (
    <div className="cart-products">
      {cartItems.map((data) => (
        <div key={data.id} className="cart-product">
          <div className="img-container">
         
            <img src={process.env.REACT_APP_STRIPE_APP_APNA_URL+data?.attributes?.img?.data?.attributes?.url} alt="" />
          </div>

          <div className="prod-details">
            <span className="name">{data.attributes.title} </span>
            <MdClose
              className="close-btn"
              onClick={() => handleRemoveFromCart(data)}
            />
            <div className="quantity-buttons">
              <span onClick={() => handleCartProductQuantity("dec", data)}>
                -
              </span>
              <span>{data.attributes.quantity}</span>
              <span onClick={() => handleCartProductQuantity("inc", data)}>
                +
              </span>
            </div>
            <div className="text">
              <span>{data.attributes.quantity}</span>
              <span>x</span>
              <span>
                &#8377;{data.attributes.price * data.attributes.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
