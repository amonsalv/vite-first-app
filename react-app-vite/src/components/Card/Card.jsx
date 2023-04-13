import React from "react";

import "./Card.style.css";

const Card = ({ character }) => { ///hacemos destructuring para extraer el objeto
    return (
        <div className="card">
            <picture className="card___image">
                <img src={character.image} alt={character.name} />
            </picture>
            <h3 className="card__title ">{character.name}</h3>
            <p className="card__text">
                species: <span>{character.species}</span>
            </p>
        </div>
    );
};

export default Card;