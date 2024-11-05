import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import characters from '../data/characters';
import '../style/StartPage.css';

const StartPage = () => {
    const navigate = useNavigate(); 
    const [positions, setPositions] = useState([]);

    
    const getRandomPosition = () => {
        const x = Math.random() * 100; 
        const y = Math.random() * 100;
        return { x, y };
    };

   
    const isOverlapping = (newPos) => {
        for (const pos of positions) {
            const distance = Math.sqrt(
                Math.pow(newPos.x - pos.x, 2) + Math.pow(newPos.y - pos.y, 2)
            );
           
            if (distance < 15) {
                return true;
            }
        }
        return false;
    };

    
    const generateUniquePositions = () => {
        const newPositions = [];
        while (newPositions.length < characters.length) {
            const pos = getRandomPosition();
            if (!isOverlapping(pos)) {
                newPositions.push(pos);
            }
        }
        setPositions(newPositions);
    };

   
    useEffect(() => {
        generateUniquePositions();
    }, []);

    
    const handleStartClick = () => {
        const audio = new Audio('/path/to/click-sound.mp3');
        audio.play();
        navigate('/game');
    };

    return (
       
        <div className="relative h-screen overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient">
            {characters.map((character, index) => {
                const { x, y } = positions[index] || { x: 0, y: 0 }; 

                
                const bounceDuration = 1 + Math.random() * 2;
                const bounceDelay = Math.random() * 2;

                return (
                    <img
                        key={index}
                        src={character.image}
                        alt={character.name}
                        className="absolute"
                        style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            width: '10%',
                            transform: 'translate(-50%, -50%)',
                            opacity: 0.8, 
                            animation: `bounce ${bounceDuration}s infinite ${bounceDelay}s`
                        }}
                    />
                );
            })}

            <div className="flex items-center justify-center h-full">
                <button
                    onClick={handleStartClick}
                    className="bg-yellow-400 text-black text-3xl py-4 px-8 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-200 ease-in-out transform hover:scale-110 animate-pulse"
                >
                    Start
                </button>
            </div>
        </div>
    );
};

export default StartPage;
