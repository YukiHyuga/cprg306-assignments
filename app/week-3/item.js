
export default function Item({name, quantity, category}){
    return (
        <div className="border border-yellow-100 bg-yellow-100 w-full max-w-xs m-4 p-2">
            <h2 className="text-lx font bold">{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Catergory: {category}</p>
        </div>
    );
}