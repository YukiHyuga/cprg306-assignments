"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');
  const [eventCreated, setEventCreated] = useState(false);

  const handleSubmit = (event) => {
      event.preventDefault();

      const id = Math.random().toString(36).substring(7);

      const newItem = {
          id,
          name,
          quantity,
          category,
      };

      onAddItem(newItem);

      setEventCreated(true);

      setName("");
      setQuantity(1);
      setCategory("produce");

      setTimeout(() => {
          setEventCreated(false);
      }, 2000);
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
      <main>
          <div className="bg-blue-gray-100 flex" style={{ alignItems: 'flex-start' }}>
              {eventCreated && (
                  <div className="absolute top-0 mt-8 text-2xl text-yellow-400">
                      Event Created
                  </div>
              )}
              <div className="w-full max-w-md bg-grey p-8 rounded-lg shadow-md">
                  <h1 className="text-2xl text-gray-800 font-bold mb-8">
                  </h1>
                  <form onSubmit={handleSubmit}>
                      <label className="block mb-4">
                          <span className="text-black text-xl font-bold">Add New Item:</span>
                          <input
                              required
                              onChange={handleNameChange}
                              value={name}
                              placeholder="Item name"
                              className="mt-1 p-1 block w-full rounded-md text-black bg-black-100 focus:bg-white"
                          />
                      </label>
                      <label className="block mb-4">
                          <span className="text-black">Quantity:</span>
                          <input
                              type="number"
                              min="1"
                              max="99"
                              required
                              onChange={handleQuantityChange}
                              value={quantity}
                              className="mt-1 p-1 block rounded-md text-black bg-black-100 focus:bg-white"
                          />
                      </label>
                      <label className="block mb-4">
                          <span className="text-black">Category:</span>
                          <select
                              value={category}
                              onChange={handleCategoryChange}
                              className="mt-1 p-1 block rounded-md text-black bg-gray-100 focus:bg-white"
                          >
                              <option value="produce">Produce</option>
                              <option value="dairy">Dairy</option>
                              <option value="bakery">Bakery</option>
                              <option value="meat">Meat</option>
                              <option value="frozenFoods">Frozen Foods</option>
                              <option value="cannedGoods">Canned Goods</option>
                              <option value="dryGoods">Dry Goods</option>
                              <option value="beverages">Beverages</option>
                              <option value="snacks">Snacks</option>
                              <option value="household">Household</option>
                              <option value="other">Other</option>
                          </select>
                      </label>
                      <button
                          type="submit"
                          className="w-full py-2 px-4 bg-white hover:bg-pink-300 rounded-md text-black"
                      >
                          +
                      </button>
                  </form>
              </div>
          </div>
      </main>
  );
}
