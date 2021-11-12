import { useState,useEffect } from 'react';
import { add, getAll, remove, edit } from './api/product';
import './App.css';
import Router from './Routes';

function App() {

  const [products, setProducts] = useState([]);
  useEffect(() =>{
    const getProducts = async () =>{
      try{
        const {data} = await getAll();
        setProducts(data);
      }catch(error){
        console.log(error)
      }
    };
    getProducts();
  },[])

  const onHandleRemove = async(id) =>{
    try{
      const {data} = await remove(id);
      const newProducts = products.filter(item => item.id !== id);
      console.log(newProducts)
      setProducts(newProducts);
    }catch(error){
      console.log(error)
    }
  }
  
  const onHandleAdd = async (item) => {
    try {
      const { data } = await add(item);
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleEdit = async (item) => {
    console.log("app.js", item);
    try {
      const { data } = await edit(item);
      console.log(data);
      const newProducts = products.map((product) =>
        product.id == data.id ? data : product
      );
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
   <Router
      data = {products}
      onRemove={onHandleRemove}
      onAdd={onHandleAdd}
      onEdit={onHandleEdit}
   />
  );
}

export default App;
