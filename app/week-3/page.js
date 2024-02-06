import ItemList from "./item-list";
import Link from "next/link";

export default function Page(){
    return (
        <main>
            <h1 className="text-4xl font-bold m-6 text-black-300">Shopping List</h1>
            <ItemList>
            </ItemList>
        </main>
    );
};