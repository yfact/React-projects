import { useState } from "react";
//const shoppingLists = ["Milk", "Bread", "Eggs"];
function App() {
  const [item, setItem] = useState("");
  const [shoppingLists, setShoppingLists] = useState([]);

  function handleInput(item) {
    setItem(item.target.value);
  }

  function handleAdd() {
    setShoppingLists([...shoppingLists, item]);
    setItem("");
  }
  return (
    <div className="App">
      <h1>Items to buy</h1>
      <SearchBar
        item={item}
        setItem={setItem}
        handleInput={handleInput}
        handleAdd={handleAdd}
      />
      <ShopList
        shoppingLists={shoppingLists}
        setShoppingLists={setShoppingLists}
      />
    </div>
  );
}

function SearchBar({ item, handleInput, handleAdd }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Add new item"
        value={item}
        onChange={handleInput}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

function ShopList({ shoppingLists, setShoppingLists }) {
  function clear(itemToRemove) {
    setShoppingLists(shoppingLists.filter((item) => item !== itemToRemove));
  }
  const id = crypto.randomUUID;
  return (
    <div>
      <ul>
        {shoppingLists.map((item, index) => {
          return (
            <li key={id + index}>
              {item}{" "}
              <button className="btn-cancel" onClick={() => clear(item)}>
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
