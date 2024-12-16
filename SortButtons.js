import React from "react";

function SortButtons({ onSortByRating, onSortByYear }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        margin: "20px 0",
      }}
    >
      <button
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#007BFF",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s",
        }}
        onClick={onSortByRating}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007BFF")}
      >
        Trier par note
      </button>
      <button
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#28A745",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s",
        }}
        onClick={onSortByYear}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#1e7e34")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#28A745")}
      >
        Trier par année
      </button>
    </div>
  );
}

export default SortButtons;
