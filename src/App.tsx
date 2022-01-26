import useStore from "./custom-store/useStore";
import ItemList from "./components/ItemList";
import Counter from "./components/Counter";
import React, { FormEvent, useRef } from "react";
import "./App.css";

function App() {

  const { store, dispatch } = useStore();
  const items = store.items;
  const counter = store.counter;
  const newItemRef = useRef<HTMLInputElement>(null);

  const handleRemoveItem = (id: string) => {
    dispatch("REMOVE_ITEM", {id:id});
  }

  const handleAddItem = (e: FormEvent) => {
    e.preventDefault();
    const newItemName = newItemRef.current!.value;
    if (newItemName.length === 0) {
      alert("Please write a name");
      return;
    }
    const newItem = {
      id: Math.random().toString(),
      name: newItemName
    }
    dispatch("ADD_ITEM", {item:newItem});
    newItemRef.current!.value = "";
  }

  const handleIncreaseCounter = () => {
    dispatch("INCREASE_COUNTER");
  }

  const handleDecreaseCounter = () => {
    dispatch("DECREASE_COUNTER");
  }

  return (
    <React.Fragment>
    <div>
      <p>*** click at any item to delete ***</p>
      <ItemList onRemove={handleRemoveItem} items={items} />
      <br />
      <form onSubmit={handleAddItem}>
        <label htmlFor="new-item">New Item</label>
        <br />
        <input name="new-item" type="text" ref={newItemRef} />
        <br /><br />
        <button type="submit">Add New Item</button>
      </form>
      <br/>
    </div>
    <hr/>
    <div>
      <Counter counter={counter} onIncrease={handleIncreaseCounter} onDecrease={handleDecreaseCounter} />
    </div>
    </React.Fragment>
  );
}

export default App;
