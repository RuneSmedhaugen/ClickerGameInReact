import React, { useState } from 'react';

const Character = ({ character, goldLevel, speedLevel, onGoldUpgrade, onSpeedUpgrade, goldUpgradeCost, speedUpgradeCost, items, onPurchase }) => {
    const [isShopOpen, setIsShopOpen] = useState(false);

    const toggleShop = () => {
        setIsShopOpen(!isShopOpen);
    };

    return (
        <div 
            className="flex flex-col items-center m-2 p-2 bg-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in" // Adjusted scale-up and added fade-in animation
            onMouseEnter={() => setIsShopOpen(true)}
            onMouseLeave={() => setIsShopOpen(false)}
        >
            <img src={character.image} alt={character.name} className="w-16 h-16 mb-2" />
            <h2 className="text-lg">{character.name}</h2>
            <p className="text-md">Gold: {goldLevel}</p>
            <p className="text-md">Speed: {speedLevel}</p>
            <p className="text-md">Gold Per Tick: {character.goldPerTick}</p>
            <p className="text-md">Tick Speed: {(character.tickSpeed / 1000).toFixed(1)}s</p>
            <button 
                onClick={onGoldUpgrade} 
                className="bg-green-500 text-white py-1 px-2 rounded mt-2 hover:bg-green-600"
            >
                Upgrade Gold (+1): {goldUpgradeCost} gold
            </button>
            <button 
                onClick={onSpeedUpgrade} 
                className="bg-blue-500 text-white py-1 px-2 rounded mt-2 hover:bg-blue-600"
            >
                Upgrade Speed: {speedUpgradeCost} gold
            </button>
            <button 
                onClick={toggleShop} 
                className="bg-purple-500 text-white py-1 px-2 rounded mt-2 hover:bg-purple-600"
            >
                {isShopOpen ? 'Close Shop' : 'Open Shop'}
            </button>

            {isShopOpen && (
                <div className="mt-2 bg-gray-800 p-2 rounded animate-fade-in">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center justify-between mb-2">
                            <img src={item.image} alt={item.name} className="w-10 h-10 mr-2" />
                            <div className="flex-1">
                                <h3 className="text-md">{item.name}</h3>
                                <p className="text-sm">Cost: {item.cost} gold</p>
                                <p className="text-sm">Gold per Tick: +{item.goldPerTickIncrease}</p>
                                <p className="text-sm">Speed: -{item.tickSpeedIncrease} ms</p>
                            </div>
                            <button 
                                onClick={() => onPurchase(item, character)} 
                                className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
                            >
                                Buy
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Character;
