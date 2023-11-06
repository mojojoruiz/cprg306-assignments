export default function Item({name, quantity, category, id, onSelect}) {
    return (
        <ul className="border border-pink-500 bg-pink-500 w-96 m-4 p-2 rounded-xl" onClick={onSelect}>
            <li key={id}><h3 className= "text-xl font-bold"> {name} </h3></li>
            <li>Buy {quantity} in {category}</li>            
        </ul>
    );
}
