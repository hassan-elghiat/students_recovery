import React from "react";
import "./QueueBar.css";

const QueueBar = ({
  firstName,
  id,
  lastName,
  image,
  cin,
  address,
  phoneNumber,
  childreen,
  index,
}) => {
  return (
    // the code of the parent bar should be Here
    <div className="w-full bg-white rounded-lg h-fit mb-2 ">
      <span>Student name : {firstName} </span>
      {childreen.map((child, i) => (
        // pour les image de l'enfant
        <div className="" key={`child-${id}-${i}`}>
          Enfant {++i} {child.firstName}
        </div>
      ))}
    </div>
  );
};

export default QueueBar;
