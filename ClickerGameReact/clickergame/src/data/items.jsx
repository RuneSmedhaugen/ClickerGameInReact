import Toiletroll1 from './img/Item 1 - bronse dorull.png';
import Toiletroll2 from './img/Item 1 - silver dorull.png';
import Toiletroll3 from './img/Item 1 - gull dorull.png';
import Cup1 from './img/item 2 - bronse kopp.png';
import Cup2 from './img/item 2 - silver kopp.png';
import Cup3 from './img/item 2 - gull kopp.png';

const items = [
    {
        name: "Bronze Toilet Roll",
        image: Toiletroll1,
        cost: 20,
        goldPerTickIncrease: 0.5,
        tickSpeedIncrease: 50,
        rarity: "trash"
    },
    {
        name: "Bronze Cup",
        image: Cup1,
        cost: 50,
        goldPerTickIncrease: 1,
        tickSpeedIncrease: 100,
        rarity: "common"
    },
    {
        name: "Silver Toilet Roll",
        image: Toiletroll2,
        cost: 100,
        goldPerTickIncrease: 2,
        tickSpeedIncrease: 150,
        rarity: "uncommon"
    },
    {
        name: "Silver Cup",
        image: Cup2,
        cost: 250,
        goldPerTickIncrease: 4,
        tickSpeedIncrease: 200,
        rarity: "rare"
    },
    {
        name: "Gold Toilet Roll",
        image: Toiletroll3,
        cost: 500,
        goldPerTickIncrease: 6,
        tickSpeedIncrease: 300,
        rarity: "epic"
    },
    {
        name: "Gold Cup",
        image: Cup3,
        cost: 1000,
        goldPerTickIncrease: 10,
        tickSpeedIncrease: 500,
        rarity: "legendary"
    }
];

export default items;
