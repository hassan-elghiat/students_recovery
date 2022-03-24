import React, { useEffect, useState } from "react";
import StudentRow from "./StudentRow";

const StudentsList = ({ list }) => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("");
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://my.api.mockaroo.com/students?key=ab264e30`
      );

      setData(Array.isArray(await res.json()) ? await res.json() : []);
    })();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("item", selected);
  }, [selected]);
  return (
    <div className="bg-lightGray overflow-y-scrol mx-auto flex max-h-[90vh] w-[90%] flex-col gap-2 rounded-xl p-4 shadow-2xl bg-gray-400">
      {/* title row */}
      <div className="mb-4 flex w-full justify-between gap-1  rounded-xl bg-[#f7f7f7] px-2 py-2">
        <span className="text-dark w-[15%] flex-1  whitespace-nowrap text-center font-semibold uppercase">
          ID
        </span>
        <span className="text-dark w-[15%] flex-1  whitespace-nowrap text-center font-semibold uppercase">
          Full Name
        </span>
        <span className="text-dark w-[15%] flex-1  whitespace-nowrap text-center font-semibold uppercase">
          Massar Id
        </span>
        <span className="text-dark w-[15%] flex-1  whitespace-nowrap text-center font-semibold uppercase">
          level
        </span>
        <span className="text-dark w-[15%] flex-1  whitespace-nowrap text-center font-semibold uppercase">
          Age
        </span>
        <span className="text-dark flex-1 whitespace-nowrap  text-center font-semibold uppercase md:max-w-[5%]">
          Actions
        </span>
      </div>
      {Array.isArray(list) &&
        (list.length !== 0 ? (
          list.map((item) => {
            return (
              <StudentRow
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
            <p className="text-lg">No Students</p>
          </div>
        ))}
    </div>
  );
};

export default StudentsList;
