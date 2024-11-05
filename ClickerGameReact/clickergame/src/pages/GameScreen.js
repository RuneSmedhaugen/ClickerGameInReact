import React, { useEffect, useState } from 'react';
import charactersData from '../data/characters';
import Character from '../components/Character';
import Gold from '../components/Gold';
import items from '../data/items';

const GameScreen = () => {
    const [characters, setCharacters] = useState(charactersData);
    const [currentGold, setCurrentGold] = useState(1000000);
    const [levels, setLevels] = useState(characters.map(() => ({ gold: 0, speed: 0 })));

    useEffect(() => {
        const intervals = characters.map((character, index) => 
            setInterval(() => {
                if (character.unlocked) {
                    setCurrentGold((prevGold) => prevGold + character.goldPerTick);
                }
            }, character.tickSpeed)
        );

        return () => intervals.forEach(clearInterval);
    }, [characters]);

    const handleGoldUpgrade = (index) => {
        const character = characters[index];
        const cost = character.baseGoldUpgradeCost + levels[index].gold * 5;

        if (currentGold >= cost) {
            const updatedCharacters = [...characters];
            updatedCharacters[index] = {
                ...character,
                goldPerTick: character.goldPerTick + 1,
            };

            setCharacters(updatedCharacters);
            setCurrentGold(currentGold - cost);
            setLevels((prevLevels) => {
                const newLevels = [...prevLevels];
                newLevels[index].gold += 1;
                return newLevels;
            });

            unlockNextCharacter(index, updatedCharacters);
        }
    };

    const handleSpeedUpgrade = (index) => {
        const character = characters[index];
        const cost = character.baseSpeedUpgradeCost + levels[index].speed * 10;
        const newTickSpeed = Math.max(character.tickSpeed - 100, 500);

        if (currentGold >= cost && character.tickSpeed > 500) {
            const updatedCharacters = [...characters];
            updatedCharacters[index] = {
                ...character,
                tickSpeed: newTickSpeed,
            };

            setCharacters(updatedCharacters);
            setCurrentGold(currentGold - cost);
            setLevels((prevLevels) => {
                const newLevels = [...prevLevels];
                newLevels[index].speed += 1;
                return newLevels;
            });
        }
    };

    const handlePurchase = (item, character) => {
        if (currentGold >= item.cost) {
            const updatedCharacters = characters.map((char) => {
                if (char.name === character.name) {
                    return {
                        ...char,
                        goldPerTick: char.goldPerTick + item.goldPerTickIncrease,
                        tickSpeed: Math.max(char.tickSpeed - item.tickSpeedIncrease, 500),
                        items: [...(char.items || []), item],
                    };
                }
                return char;
            });

            setCharacters(updatedCharacters);
            setCurrentGold(currentGold - item.cost);
        } else {
            alert("Not enough gold!");
        }
    };

    const unlockNextCharacter = (index, updatedCharacters) => {
        if (levels[index].gold >= 100 && index < updatedCharacters.length - 1 && !updatedCharacters[index + 1].unlocked) {
            alert(`You have unlocked ${updatedCharacters[index + 1].name}!`);
            updatedCharacters[index + 1].unlocked = true;
            setCharacters(updatedCharacters);
        }
    };

    return (
        <div className="pp-4 bg-gray-800 min-h-screen text-white dark:bg-gray-900">
            <Gold currentGold={currentGold} />
            <div className="grid grid-cols-4 gap-4">
                {characters.map((character, index) => (
                    character.unlocked && (
                        <Character
                            key={index}
                            character={character}
                            goldLevel={levels[index].gold}
                            speedLevel={levels[index].speed}
                            onGoldUpgrade={() => handleGoldUpgrade(index)}
                            onSpeedUpgrade={() => handleSpeedUpgrade(index)}
                            goldUpgradeCost={character.baseGoldUpgradeCost + levels[index].gold * 5}
                            speedUpgradeCost={character.baseSpeedUpgradeCost + levels[index].speed * 10}
                            onPurchase={handlePurchase}
                            items={items}
                        />
                    )
                ))}
            </div>
        </div>
    );    
};

export default GameScreen;
