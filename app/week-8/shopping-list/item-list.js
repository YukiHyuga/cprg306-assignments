"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect}) {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    const groupByCategory = () => {
        const groupedItems = sortedItems.reduce((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
        }, {});

        const sortedCategories = Object.keys(groupedItems).sort();
        return sortedCategories.map(category => ({
            category,
            items: groupedItems[category].sort((a, b) => a.name.localeCompare(b.name))
        }));
    };

    const renderGroupedItems = () => {
        const groupedItems = groupByCategory();
        return groupedItems.map(group => (
            <div key={group.category}>
                <h2 className="text-lg font-semibold capitalize">{group.category}</h2>
                <ul>
                    {group.items.map(item => (
                        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect} />
                    ))}
                </ul>
            </div>
        ));
    };

    return (
        <>
            <h1 className="text-m font-bold text-black-300">Sort by:</h1>
            <div className="flex">
                <button
                    onClick={() => setSortBy('name')}
                    style={{ backgroundColor: sortBy === 'name' ? 'pink' : 'white' }}
                    className="w-1200 h-16 mr-2 border border-gray-400 rounded-md flex items-center justify-center"
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy('category')}
                    style={{ backgroundColor: sortBy === 'category' ? 'pink' : 'white' }}
                    className="w-1200 h-16 mr-2 border border-gray-400 rounded-md flex items-center justify-center"
                >
                    Sort by Category
                </button>
                <button
                    onClick={() => setSortBy('group')}
                    style={{ backgroundColor: sortBy === 'group' ? 'pink' : 'white' }}
                    className="w-1200 h-16 mr-2 border border-gray-400 rounded-md flex items-center justify-center"
                >
                    Group by Category
                </button>
            </div>
            {sortBy === 'group' ? renderGroupedItems() : (
                <ul>
                    {sortedItems.map(item => (
                        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect} />
                    ))}
                </ul>
            )}
        </>
    );
}
