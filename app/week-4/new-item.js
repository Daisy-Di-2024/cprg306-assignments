"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <div className="flex items-center justify-center gap-3 p-3 shadow rounded-md border border-gray-300">

            <p className="text-xl font-semibold w-6 text-center">{quantity}</p>
            <button
                onClick={decrement}
                disabled={quantity === 1}
                className={`px-4 py-1 rounded text-white font-bold 
            ${quantity === 1 ? 'bg-gray-400' : 'bg-blue-400 hover:bg-blue-600'}`}
            >
                -
            </button>

            <button
                onClick={increment}
                disabled={quantity === 20}
                className={`px-4 py-1 rounded text-white font-bold
                ${quantity === 20 ? 'bg-gray-400' : 'bg-blue-400 hover:bg-blue-600'}`}
            >+</button>
        </div>
    );
}