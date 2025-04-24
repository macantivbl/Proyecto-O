/*
fetch('https://pokeapi.co/api/v2/pokemon')
    .then((respuestaPokemon) => {
        console.log (respuestaPokemon.json())
    })
    .then(datosPokemones => {
        datosPokemones.respuestaPokemon.forEach(element => {
            console.log(element.name)
        });
    })
    .catch(errorPokemon => console.log("no pokemon para ti"))
*/
const mostrarPokemones = async() => {
    try{
        const respuestaPokemon = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const datosPokemonesJSON = await respuestaPokemon.json()

        let nombrePokemon = datosPokemonesJSON.results.map(poke => poke.name)

        //datosPokemonesJSON.results.map.get("bulbasur")
        //datosPokemonesJSON.results.filter(poke => poke.name > '15')

        console.log(nombrePokemon)

        //return datosPokemonesJSON

    } catch(errorPokemon) {
        console.log("Error en la peticion pokemon nombres")
    }
}

mostrarPokemones()




