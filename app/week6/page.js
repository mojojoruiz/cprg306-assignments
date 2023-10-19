import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./item.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
};

    
return (
    <main>
    <h1>Shopping List </h1>
    <NewItem onAddItem={handleAddItem} />
    <ItemList items={items} />
    </main>
    );
}