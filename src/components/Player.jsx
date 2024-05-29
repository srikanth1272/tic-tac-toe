import { useState } from "react";

export default function Player({name,symbol,isActive,onChangeName}){
    const [isEditing,setIsEditing] = useState(false);
    const [newName,setNewName] = useState(name);

    function handleEditClick(){
        setIsEditing(isEditing => !isEditing);
        if(isEditing){
            onChangeName(symbol,newName);
        }
    }
    function handleChange(event){
        setNewName(event.target.value);
    }

    let playerName =  <span className="player-name">{newName}</span>;
    
    if(isEditing) {
        playerName = <input type="text" required value={newName} onChange={handleChange}></input>
    }

    return(
        <li className={isActive?'active':undefined}> 
        <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{!isEditing?"Edit":"Save"}</button>
      </li>
    );

}