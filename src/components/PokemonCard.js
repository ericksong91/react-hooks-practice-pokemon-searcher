import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ id, name, hp, sprites }) {
  const [side, setSide] = useState(true)
  const { back, front } = sprites;

  function handleClick(){
    setSide(!side)
  }

  return (
    <Card>
      <div>
        <div className="image" id={id}>
          <img onClick={handleClick} alt={name} src={
            side ? front : back
          } />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
