import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem]= useState('')


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleFilter(event){
    setSearchItem(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  }).filter((item)=>{
    return item.name.toLowerCase().includes(searchItem.toLowerCase())
  })




  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addNewItem}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleFilter} search={searchItem}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category}/>
        ))}
        </ul>
    </div>
  );
}

export default ShoppingList;
