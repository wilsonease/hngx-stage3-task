import React from "react";
import "./ImageGrid.css";
import Skeleton from "react-loading-skeleton";

const GridSkeleton = () => {
  return (
    <Skeleton
      containerClassName="skeleton-grid-container"
      className="skeleton-grid"
      count={4}
    />
  );
};

export default GridSkeleton;
