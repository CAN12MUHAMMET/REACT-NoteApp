import React, { useState } from "react";

const AddNote = ({ addText ,deleteAllNotes }) => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");

  const handleText = (e) => {
    e.preventDefault();
    if (text && description) {
      addText(text, description);
      setDescription((e.target.value = ""));
      setText((e.target.value = ""));
    } else {
      alert("Boş görev girdiniz.");
    }
  };
  

  return (
    <div className="" >
      <form className="form">
        <input
          placeholder="   Not Başlığı Giriniz"
          className="input"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input
          placeholder="   Açıklama Giriniz"
          className="input btnn"
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </form>
     <div className="allButton" >
     <button onClick={handleText} className="btn ">
        gönder
      </button>
      <button onClick={deleteAllNotes} className="btns ">
        Temizle
      </button>
     </div>

      
    </div>
  );
};

export default AddNote;
