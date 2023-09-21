import React, { useState } from "react";
import { ImageCard } from "../ImageCard/ImageCard";
import { useAuth0 } from "@auth0/auth0-react";

import "./ImageGrid.css";
import Login from "../Auth/Login/Login";

export const ImageGrid = ({ initialImages }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [images, setImages] = useState(initialImages);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, toIndex) => {
    e.preventDefault();
    const fromIndex = e.dataTransfer.getData("index");

    //rearrange the images in the array
    const updatedImages = [...images];
    const [draggedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, draggedImage);
    setImages(updatedImages);
  };

  console.log("user", user);

  return (
    <div className="image-grid-container">
      {isAuthenticated ? (
        <>
          <h1 className="welcome">
            <span className="welcome">Welcome, </span>
            {user?.given_name ?? user.nickname} 👋
          </h1>

          <div className="image-grid">
            {images.map((image, index) => (
              <ImageCard
                key={index}
                index={index}
                image={image}
                handleDragStart={handleDragStart}
                handleDragOver={handleDragOver}
                handleDrop={handleDrop}
              />
            ))}
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};
