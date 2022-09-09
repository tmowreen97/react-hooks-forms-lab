import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [input, setInput]= useState('')
  const [itemFormCategory, setItemFormCategory]= useState('Produce')
  const [newItem, setNewItem]= useState({
    id: uuid(),
    name: input,
    category: itemFormCategory
  })

  function handleInput(event){
    setInput(event.target.value)
    setNewItem({...newItem, name:event.target.value})
  }

  function handleCategory(event){
    setItemFormCategory(event.target.value)
    setNewItem({...newItem, category:event.target.value})
  }


  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      onItemFormSubmit({...newItem, id:uuid()})
    }}
    className="New Item"
    >
      <label>
        Name:
        <input type="text" name="name" onChange={handleInput} value={input}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
