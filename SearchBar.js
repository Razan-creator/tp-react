import React from "react";
// kaydi la fonction "onSearch" mn props bach n'update la recherche
function SearchBar({ onSearch }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0",
      }}
    >
      <input
        type="text"
        placeholder="Rechercher un film..."
        style={{
          width: "50%",
          maxWidth: "500px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          fontSize: "16px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
