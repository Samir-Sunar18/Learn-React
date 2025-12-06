import { useState } from "react";

function Notes (){
    let [notes, setNotes]= useState([])
    return (
      <ul>
        {notes.map=(note=(
        <li>{notes.title}</li>
        ))}
      </ul>
    );
}