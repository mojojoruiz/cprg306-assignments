"use client";

import { useState } from "react";

export default function NewItem() {
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
    
    
    console.log(item);

    
    alert("Added item: " + name + ", Quantity: " + quantity + ", Category: " + category)

    
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
            <div className="min-h-screen bg-blue-gray-100 mt-10 flex items-top justify-center">               
                <div>
                
                    <form class="m-10 max-w-sm w-full"onSubmit={handleSubmit}>
                        
                        <div className="block mb-3 w-full rounded-md text-black bg-gray-100 focus:bg-white">                            
                            <input
                                type = "text"
                                placeholder = "Item name"
                                required
                                onChange = {handleNameChange}
                                value = {name}
                                className=" block p-2 w-full rounded-md text-black bg-gray-100 focus:bg-white"                                 
                            />
                        </div>

                        
                        <div className="flex justify-between">                            
                            <input
                                type = "number"
                                min = "1"
                                max = "99"                                
                                required
                                onChange = {handleQuantityChange}
                                value = {quantity}
                                className="w-20 p-2 block rounded-md text-black bg-gray-100 focus:bg-white"
                            />

                            <select className = "ml-6 p-2 block w-full rounded-md text-black bg-gray-100 focus:bg-white" style={{ fontSize: '25px' }} value={category} onChange={handleCategoryChange}>                                                      
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

                        </div>

                        
                        <button type="submit" className="mt-3 w-full py-2 px-4 bg-pink-500  rounded-md text-white font-bold">+</button>
                    

                    </form> 
                </div>
            </div>
        </div>
    );
}