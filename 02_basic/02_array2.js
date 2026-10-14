const marvel_heros = ["Ironman", "Hulk", "Thor", "Spiderman"]
const DC_Heros = ["Superman", "Flash", "Batman"]

//marvel_heros.push(DC_Heros)

// console.log(marvel_heros);
// console.log(marvel_heros[4]);

// const all_heros = marvel_heros.concat(DC_Heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...DC_Heros]        // spread method
console.log(all_new_heros);
