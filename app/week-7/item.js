export default function Item({name, quantity, category, onSelect}) {
    return(
        <div className="border border-yellow-100 bg-yellow-100 w-full max-w-xs m-4 p-2"onClick={() => onSelect(name)} style={{ cursor: 'pointer' }} >
            <li>
            <h2 className="text-lx font bold">{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Catergory: {category}</p>
        </li>
        </div>
    );
};