import React from "react";

const StudentRow = ({
  id,
  firstName,
  lastName,
  picture,
  parentId,
  massarId,
  level,
  age,
  gendre,
}) => {
  const styleText = `text-dark flex w-[15%] flex-1 items-center  justify-center overflow-hidden overflow-ellipsis whitespace-nowrap text-center font-semibold`;

  return (
    <div
      className={` bg-lightGray bg-gray flex w-full  cursor-pointer  justify-between gap-1 rounded-xl px-2 py-1 `}
    >
      <span className={`${styleText} pl-2 `}>{id}</span>
      <span className={`${styleText} `}>{firstName + " " + lastName}</span>
      <span className={`${styleText}  `}>{massarId}</span>
      <span className={`${styleText} `}>{level}</span>
      <span className={`${styleText} `}>{age}</span>
      {/* <span className={`${styleText}  `}>
        <ChildreenImages />
      </span> */}
      <span className={`${styleText}  max-w-[5%] gap-4`}>
        <img
          src="https://img.icons8.com/material-rounded/24/000000/edit--v1.png"
          alt="editIcon"
          className="cursor-pointer hover:scale-110"
          onClick={() => {
            alert(`edit ${id}`);
          }}
        />
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"
          alt="delteIcon"
          className="cursor-pointer hover:scale-110"
          onClick={() => {
            alert(`delete ${id}`);
          }}
        />
      </span>
    </div>
  );
};

export default StudentRow;
