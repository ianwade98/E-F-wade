import React from "react";
import { useContext } from "react";
import "./styles/CartWidget.scss"
import cart from "../../images/cart.svg"
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
    const {getQuantity} = useContext(CartContext);

    return (
        <div className="sectionCarrito">
            <div className="contadorCarrito">
                <p>{getQuantity()}</p>
            </div>
            <Link to="/Cart">
                <img src={cart} alt="carrito de compras" className="logoCarrito"/>
            </Link>
        </div>
    )
}

export default Cart