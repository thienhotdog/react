import { useState } from 'react';

const AddProduct = (props) =>{
    const [valueInput, setValueInput] = useState("");
    // const [todos, setTodos] = useState([]);
    const onHandleChange = (e) => {
        // setValue(e.target.value);
        const { name, value } = e.target;
        console.log("name", name);
        console.log("value", value);
        setValueInput({
        ...valueInput,
        [name]: value
        });
      };
    const onHandleSubmit = (e) => {
        e.preventDefault();
        const newValueInput ={
            ...valueInput
        };
        console.log(newValueInput);
        props.onAdd(newValueInput);
        // setTodos([...todos, newValueInput])
      };
    
    return(
        <div className="App">
            {JSON.stringify(valueInput)}
            <form onSubmit={onHandleSubmit}>
                <input
                name="name"
                type="text"
                onChange={onHandleChange}
                placeholder="Product Name"
                />
                <input
                name="price"
                type="number"
                onChange={onHandleChange}
                placeholder="price"
                />
                <input
                name="img"
                type="text"
                onChange={onHandleChange}
                placeholder="price"
                />
                <button type="submit">Add</button>
            </form>
        </div>     
    )
}

export default AddProduct;