// 1a
const jedi = [];
// 1b
jedi[0] = 'Luke';

// 1c
console.log(jedi.push('Obi-Wan Kenobi'));

// 1d
console.log(jedi.unshift('Yoda'));

// 1e
// console.log(jedi.slice(1, 2));
console.log(jedi[1]);

// 1f
console.log(jedi.pop());

// 1g
console.log(jedi.shift());
console.log(jedi);

// 2a
const sithLords = ['Darth Vader', 'Darth Sidious', 'Darth Maul'];

// 2b
const imperialOfficers = ['Grand Moff Tarkin', 'Orson Krennic'];

// 2c
starWarsVillains = sithLords.concat(imperialOfficers);

console.log(starWarsVillains);

// 2d
console.log(starWarsVillains.slice(0, 2));

// 3a
const droids = {
    astromech: 'R2-D2',
    protocol: 'C-3PO',
    assassin: 'IG-88',
};

// 3b
console.log(droids['astromech']);

// 3c
console.log(droids.protocol);

// 3d
droids.assassin = 'IG-11';
droids['assassin'] = 'IG-11';
console.log(droids);

// BONUS

// B4
console.log(starWarsVillains[0][6]);

// B5
console.log(sithLords.slice(-2, -1));

// B6a
// const starWarsMovies = {
//     prequels: {
//         episodeOne: 'The Phantom Menace',
//         episodeTwo: 'Attack of the Clones',
//         episodeThree: 'Revenge of the Sith',
//     },

//     originals: {
//         episodeFour: 'A New Hope',
//         episodeFive: 'The Empire Strikes Back',
//         episodeSix: 'Return of the Jedi',
//     },
//     sequels: {
//         episodeSeven: 'The Force Awakens',
//         episodeEight: 'The Last Jedi',
//         episodeNine: 'Rise of Skywalker',
//     },
// }
const starWarsMovies = [
    {
        episodeOne: 'The Phantom Menace',
        episodeTwo: 'Attack of the Clones',
        episodeThree: 'Revenge of the Sith',
    },

    {
        episodeFour: 'A New Hope',
        episodeFive: 'The Empire Strikes Back',
        episodeSix: 'Return of the Jedi',
    },
    {
        episodeSeven: 'The Force Awakens',
        episodeEight: 'The Last Jedi',
        episodeNine: 'Rise of Skywalker',
    },
]

// B6b
starWarsMovies.splice(1, 0, 'Solo', 'Rogue One')

console.log(starWarsMovies);