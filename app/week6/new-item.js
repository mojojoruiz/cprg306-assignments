import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState("category");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name,
            quantity,
            category,
        };

        onAddItem(item);

        setName("");
        setQuantity(0);
        setCategory("category");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type = "text"
                    fontSize= "16 px"
                    placeholder = "Item name"
                    required
                    onChange = {handleNameChange}
                    value = {name}
                />

                <input
                    type = "number"
                    min = "1"
                    max = "99"                                
                    required
                    onChange = {handleQuantityChange}
                    value = {quantity}
                />

                <select value={category} onChange={handleCategoryChange}>
                    fontSize= "16 px"
                    <option value = "produce">Produce</option>
                    <option value = "dairy">Dairy</option>
                    <option value = "bakery">Bakery</option>
                    <option value = "meat">Meat</option>
                    <option value = "frozen foods">Frozen Foods</option>
                    <option value = "canned goods">Canned Goods</option>
                    <option value = "dry goods">Dry Goods</option>
                    <option value = "beverages">Beverages</option>
                    <option value = "snacks">Snacks</option>
                    <option value = "household">Household</option>
                    <option value = "other">Other</option>
                </select>
                <br></br>
                <button type="submit" style={{
                    backgroundColor: '#4CAF50', 
                    border: 'none',
                    color: 'white',
                    padding: '15px 32px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '16px',
                    margin: '4px 2px',
                    cursor: 'pointer'
                }}>Add</button>
            </form>
        </div>
    );
}
