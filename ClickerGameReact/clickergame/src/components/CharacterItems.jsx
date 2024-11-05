import React from 'react';

const CharacterItems = ({ items }) => {
    return (
        <div className="flex mt-2">
            {items.map((item, index) => (
                <div key={index} className="flex items-center mr-2">
                    <img src={item.image} alt={item.name} className="w-8 h-8" />
                    <span className="ml-1">{item.count}</span>
                </div>
            ))}
        </div>
    );
};

export default CharacterItems;
