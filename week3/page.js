import React from 'react';
import ItemList from './item-list'; // Update the import path

const Page = () => {
return (
    <main className="p-4 bg-gray-100 min-h-screen">
    <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
    <ItemList /> {/* Adjusted component name */}       
    </main>
);
};

export default Page;
