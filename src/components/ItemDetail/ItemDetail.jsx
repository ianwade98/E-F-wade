import { useContext } from "react";
import "./ItemDetail.scss"
import { CartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
    const { addItem } = useContext(CartContext);
    const handlerAddCount = (count) => {
        addItem(producto, count);
      }

    return(
        <div className="Item-detail--area">
            <div>
                <h1>{producto.name}</h1>
            </div>
            <div className="item-detail-subArea">
                <div className="item-detail-left">
                    <img src={producto.img} height={400}/>
                </div>
                <div className="item-detail-right">
                    <div>{producto.description}</div>
                    <p>{`Precio U$D ${producto.price}`}</p>
                    <ItemCount onChangeCount={(e) => handlerAddCount(e)} />
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;