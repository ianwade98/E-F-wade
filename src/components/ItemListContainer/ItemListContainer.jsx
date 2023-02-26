
import { useState } from "react";
import {collection,getDocs,getFirestore, query, where} from 'firebase/firestore'
import Item from "../Item/Item"
import "./styles/ItemListContainer.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


const ItemListContainer = ({}) => {
    const [item, setItem] = useState([]);
    const { id } = useParams();
    useEffect(() => {
      const db = getFirestore();
      const itemCollection = id ? query(collection(db, "item"), where("category", "==", parseInt(id)))  :collection(db, "item");
      getDocs(itemCollection).then((result) => {
        setItem(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }, [id]);
    console.log(item)
    return (
      <div className="ItemListContainer">
        {item &&
          item.map((producto) => {
            return <Item key={producto.id} producto={producto} />;
          })}
      </div>
    );
  };
  
  export default ItemListContainer;