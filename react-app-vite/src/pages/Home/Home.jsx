import { useEffect, useState } from "react";

const Home = () => {
    const [characterList, setCharacterList] = useState([]) //traemos un const para traer el personaje, traemos la lista de personajes y la funcion que nos permitira actualizarlo/ tambien un useState con un array vacio para manejar la informacion

    useEffect(() => {
        const list = fetch('https://rickandmortyapi.com/api/character/?page=1') //usamos una promesa, en la que traemos peticiones, traemos la api que vamos a consumir
            .then((response) => response.json()) //el then hace que reciba una funcion que reciba la respuesta de json
            .then((data) => setCharacterList(data.results))
            .catch(console.error);

    }, []); //trae una funcion en la que llamamos otra funcion, puede o no tener dependecias, pero en nuestro casi, si las tiene []
    return (
        <main>

            <h1 className="title">Este es el taller de React</h1>
            <p className="text">
                Para este taller vamos a usar el api de Rick and Morty
            </p>

            <section className="container___list">
                <ul className="list">
                    {characterList.map((character) => (
                        <li
                            key={character.id} //llave unica
                            onClick={() => handleSelectedCard(character)}
                        >
                            <Card character={character} />
                        </li>
                    ))}
                </ul>
            </section>


        </main>
    );
};

export default Home;