import { useState } from "react";

function NewItem() {
    const [state, setState] = useState({
        name: '',
        quantity: 1,
        category: 'produce',
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const { name, quantity, category } = state;

        const item = { name, quantity, category };

        console.log(item);
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        // Reset the values
        setState({
            name: '',
            quantity: 1,
            category: 'produce',
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        // Update state based on the input name
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const { name, quantity, category } = state;

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="quantity"
                min="1"
                max="99"
                value={quantity}
                onChange={handleChange}
                required
            />
            <select
                name="category"
                value={category}
                onChange={handleChange}
            >
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen">Frozen Foods</option>
                <option value="canned">Canned Goods</option>
                <option value="dry">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
}

export default NewItem;
