import React from "react";
import ChildreenImages from "./ChildreenImages";

const ParentRow = ({
  parentId,
  firstName,
  lastName,
  cin,
  address,
  phoneNumber,
  childreen,
  setSelected = () => 0,
}) => {
  const styleText = `text-dark flex w-[15%] flex-1 items-center  justify-center overflow-hidden overflow-ellipsis whitespace-nowrap text-center font-semibold`;
  return (
    <div
      className={` bg-lightGray bg-gray flex w-full  cursor-pointer  justify-between gap-1 rounded-xl px-2 py-1 `}
      onClick={setSelected}
    >
      <span className={`${styleText} pl-2 `}>{parentId}</span>
      <span className={`${styleText} `}>{firstName + " " + lastName}</span>
      <span className={`${styleText}  `}>{address}</span>
      <span className={`${styleText} `}>{cin}</span>
      <span className={`${styleText} `}>{phoneNumber}</span>
      <span className={`${styleText}  `}>
        <ChildreenImages />
      </span>
      <span className={`${styleText}  gap-4 md:max-w-[5%]`}>
        <img
          src="https://img.icons8.com/material-rounded/24/000000/edit--v1.png"
          alt="editIcon"
          className="cursor-pointer hover:scale-110"
          onClick={() => {
            alert(`edit ${parentId}`);
          }}
        />
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"
          alt="delteIcon"
          className="cursor-pointer hover:scale-110"
          onClick={() => {
            alert(`delete ${parentId}`);
          }}
        />
      </span>
    </div>
  );
};

export default ParentRow;
