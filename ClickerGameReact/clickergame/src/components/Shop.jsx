import React from 'react';
import items from '../data/items';

const Shop= ({ character, onPurchase }) => {
    return (
        <div className="mt-4 p-4 bg-gray-700 rounded">
            <h3 className="text-lg mb-2">Shop</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                            <img src={item.image} alt={item.name} className="w-12 h-12 mr-2" />
                            <div>
                                <p className="text-sm">{item.name}</p>
                                <p className="text-xs">Cost: {item.cost} gold</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => onPurchase(item, character)} 
                            className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
                        >
                            Buy
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Shop;
