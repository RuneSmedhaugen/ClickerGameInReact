import React from 'react';

const Notification = ({ message, isVisible }) => {
    return (
        <div className={`fixed top-4 right-4 p-4 rounded-md shadow-lg transition-transform transform ${isVisible ? 'translate-x-0' : 'translate-x-full'} bg-green-500 text-white`}>
            {message}
        </div>
    );
};

export default Notification;
