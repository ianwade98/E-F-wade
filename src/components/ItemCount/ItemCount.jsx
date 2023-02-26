import { useState } from "react"
import './ItemCount.scss'

const ItemCount =({onChangeCount})=>{
    const [value,setValue] = useState(0)

    const handlerAddCount = () =>{
        if(value<5){
        setValue(value + 1)
        }
    }
    const handlerSubtractionCount = () =>{
        if(value>=1){
        setValue(value - 1)
        }
        
    }
    return(
        <div className="container-add-item">
            <h5>Agregar item</h5>
            <div>
                <button className="boton-redondo" onClick={()=>handlerSubtractionCount()}>-</button>
                <button className="boton-redondo" onClick={()=>handlerAddCount()}>+</button>
            </div>
            <div className="container-vale-buttons">
                <div>
                    <h4>{value}</h4>
                </div>
                <button className="boton" onClick={()=>onChangeCount(value)}>Agregar carrito</button>
            </div>
        </div>
    )
}
export default ItemCount