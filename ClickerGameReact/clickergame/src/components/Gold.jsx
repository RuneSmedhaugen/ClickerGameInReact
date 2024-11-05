import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

const Gold = ({ currentGold }) => {
    return (
        <div className="flex items-center">
            <FontAwesomeIcon icon={faCoins} className="text-yellow-500 mr-2" />
            <span className="text-xl">{currentGold}</span>
        </div>
    );
};

export default Gold;
