import React from "react";
import "./ImageCard.css";

export const ImageCard = ({
  image,
  index,
  handleDragStart,
  handleDragOver,
  handleDrop,
}) => {
  return (
    <div
      className="image-card"
      draggable
      onDragStart={(e) => handleDragStart(e, index)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e, index)}
    >
      <img src={image} alt={`grid item ${index}`} />
    </div>
  );
};
