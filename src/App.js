import { useState } from "react";
import "./App.css";
import AddNote from "./AddNote";
import Navbar from "./Navbar";

function App() {
  const [note, setNote] = useState([]);
  const addText = (text, description) => {
    setNote([
      ...note,
      {
        id:note.length ,
        title: text,
        description: description,
      },
    ]);
  };

  const deleteNote = (id) => {
    const index = note.findIndex((note) => note.id === id);
    const newNotes = [...note];
    newNotes.splice(index, 1);
    setNote(newNotes);
  };
  const deleteAllNotes = () => {
    setNote([]);
    
  };
  

  return (
    <div className="container">
      <Navbar noteCount={note.length} />
      <ul className="note-list scrool">
        {note.length === 0 ? (
          <div className="plus">
            <p className="prgrf">Henüz Not Eklemediniz...</p>
            <i className="bi bi-plus-lg"></i>
          </div>
        ) : (
          note.map((notes) => {
            return (
              <li className="li" key={notes.id}>
                <h1 className="h1">{notes.title}</h1>
                <hr className="hr" />
                <div className="buttonb">
                  <small  ><i>{notes.description}</i></small>
                  <button className="btnd" onClick={() => deleteNote(notes.id)}>
                    sil
                  </button>
                </div>
              </li>
            );
          })
        )}
      </ul>

      <AddNote deleteAllNotes={deleteAllNotes} addText={addText} />
    </div>
  );
}

export default App;
