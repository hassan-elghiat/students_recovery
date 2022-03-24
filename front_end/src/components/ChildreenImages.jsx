import React, { useEffect, useState } from "react";

const ChildreenImages = ({ ids }) => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://my.api.mockaroo.com/students?key=ab264e30`
      );
      setStudents(await res.json());
    })();
  }, []);

  return (
    <div className="flex flex-row justify-center">
      {students.slice(3, 6).map((student, index) => {
        return (
          <img
            src={`${student?.picture}`}
            alt={`${student.id}`}
            className={`border-primaryFG bg-lightGray h-12 w-12 rounded-full border-2 ${
              index !== 0 && `-ml-4`
            } z-[${index * 2}]`}
          />
        );
      })}
    </div>
  );
};

export default ChildreenImages;
