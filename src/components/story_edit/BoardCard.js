import React from "react";

const BoardCard = ({ name, image, renderItem }) => {
  function handleClick() {
    renderItem(name);
  }
  return (
    <div
      className="card text-primary-content text-center h-36 w-24 "
      onClick={handleClick}
    >
      <div
        className="card-body justify-end p-2 text-white"
        style={{
          background: `linear-gradient(180deg, hsl(0, 100%, 100%, 0), hsl(0, 0%, 0%, 0.65)),url(${image}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <div
          className="font-medium card-title"
          style={{ fontSize: "0.6rem", lineHeight: ".5rem" }}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
