import { Link } from "react-router-dom";
import './styles/Item.scss'

const Item =({producto})=>{

    return(
            <div className="ItemInterior">
                <img src={producto.img} width={100} height={100} />
                <Link to={`/item/${producto.id}`}><p>{producto.name}</p></Link>
            </div>
    )
}
export default Item;