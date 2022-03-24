import React from "react";

const Search = ({ target }) => {
  return (
    <div className=" h-10 w-full  px-[10%] ">
      <div className="bg-lightGray flex h-full w-full justify-between rounded-3xl px-8 py-2 bg-gray-500">
        <input
          className="text-dark bg-lightGray w-full font-medium outline-none bg-gray-500 text-white"
          name="searchterm"
          placeholder={`Search with ${
            target === "parent" ? `CIN` : `Massar Number`
          }`}
        />
        <img
          className="cursor-pointer transition-all duration-150 hover:scale-110"
          src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
          alt="searchIon"
        />
      </div>
    </div>
  );
};

export default Search;
