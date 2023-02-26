import ItemDetail from "../ItemDetail/ItemDetail"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailtContainer = () => {
   const [itemDetail,setitemDetail] = useState({});
   const { id } = useParams()
   useEffect(()=>{
    const db = getFirestore();
    const referenciaDoc = doc(db,'item', id)
    getDoc(referenciaDoc)
    .then((result)=>{
        setitemDetail({
        id:result.id,
        ...result.data()
      })
    })
    .catch((error)=> console.log(error))
  }, [id])
   
   return(
    <div>
        <ItemDetail producto={itemDetail}/>
    </div>
   )
}

export default ItemDetailtContainer