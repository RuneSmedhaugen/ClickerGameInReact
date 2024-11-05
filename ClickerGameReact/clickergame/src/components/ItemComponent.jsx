import React from 'react';


const ItemComponent = ({ items }) => {
    return (
        <div className="flex space-x-2 mt-2">
            {items.map((item, index) => (
                <img
                    key={index}
                    src={item.image}
                    alt={item.name}
                    className="w-8 h-8"
                    title={item.name}
                />
            ))}
        </div>
    );
};

export default ItemComponent;
