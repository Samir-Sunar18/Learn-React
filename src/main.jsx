import { useState } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)


function Notes (){
    let [notes, setNotes] = useState([]) 
    return (
        <ul>{notes.map (note = (
        <li>{note.title}</li>
            ))}
        </ul>
    )
}