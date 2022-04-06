import React from "react";

const BoardCard = ({ title, cover }) => {
  return (
    <div className="card text-primary-content text-center h-36 w-24 ">
      <div
        className="card-body justify-end p-2 text-white"
        style={{
          background: `linear-gradient(180deg, hsl(0, 100%, 100%, 0), hsl(0, 0%, 0%, 0.65)),url(${cover}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <div
          className="font-medium card-title"
          style={{ fontSize: ".5rem", lineHeight: ".5rem" }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
