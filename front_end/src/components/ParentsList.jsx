import React, { useEffect, useState } from "react";
import ParentRow from "./ParentRow";

const ParentsList = ({ list }) => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("");
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://my.api.mockaroo.com/parents?key=ab264e30`
      );
      setData(Array.isArray(await res.json()) ? await res.json() : []);
    })();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("item", selected);
  }, [selected]);

  return (
    <div className="bg-lightGray overflow-y-scrol mx-auto flex max-h-[90vh] w-[90%] flex-col gap-2 rounded-xl p-4">
      {/* title row */}
      <div className="mb-4 flex w-full justify-between gap-1  rounded-xl bg-[#f7f7f7] px-2 py-2">
        <span className="text-dark w-[15%] flex-1  whitespace-nowrap text-center font-semibold uppercase">
          ID
        </span>
        <span className="text-dark w-[15%] flex-1  whitespace-nowrap text-center font-semibold uppercase">
          Full Name
        </span>
        <span className="text-dark w-[15%] flex-1  whitespace-nowrap text-center font-semibold uppercase">
          Address
        </span>
        <span className="text-dark w-[15%] flex-1  whitespace-nowrap text-center font-semibold uppercase">
          CIN
        </span>
        <span className="text-dark w-[15%] flex-1  whitespace-nowrap text-center font-semibold uppercase">
          phone number
        </span>
        <span className="text-dark w-[15%] flex-1  whitespace-nowrap text-center font-semibold uppercase">
          Childreen
        </span>
        <span className="text-dark max-w-[5%] flex-1  whitespace-nowrap text-center font-semibold uppercase">
          Actions
        </span>
      </div>
      {Array.isArray(list) &&
        (list.length !== 0 ? (
          list.map((item) => {
            return (
              <ParentRow
                key={`${item.id}`}
                {...item}
                selected={selected === item?.id}
                setSelected={() => {
                  setSelected(item?.id);
                }}
              />
            );
          })
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-lg">No Parents</p>
          </div>
        ))}
    </div>
  );
};

export default ParentsList;
