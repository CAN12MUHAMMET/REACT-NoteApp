import React from "react";
function Navbar({ noteCount }) {
  return (
    <div className="navbar">
      <h1 className="navbarh1">Note App</h1>
      <p>Toplam {noteCount} Adet Note Bulunmaktadır</p>
    </div>
  );
}

export default Navbar;
