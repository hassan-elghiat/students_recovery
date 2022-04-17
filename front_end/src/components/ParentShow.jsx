import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const ParentShow = ({ firstName, lastName, photo, students }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mountTime] = useState(new Date());
  const [secondsPassed, setSecondsPassed] = useState(0);

  useEffect(() => {
    let ind = 0;
    const interval = setInterval(() => {
      if (ind + 1 > students.length - 1) {
        ind = -1;
      }
      setCurrentIndex(++ind);
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      var secondBetweenTwoDate = Math.abs(
        (new Date().getTime() - mountTime.getTime()) / 1000
      );
      setSecondsPassed(Math.floor(secondBetweenTwoDate));
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full h-full bg-white rounded-lg p-8 flex  justify-start items-center shadow-lg overflow-hidden">
      {/* green dot */}
      <div className="h-8 aspect-square rounded-lg bg-green-400 absolute top-5 left-5 animate-bounce 	grid place-items-center">
        <span className="text-white">
          {10 -
            Math.abs(
              Math.floor(Math.abs(secondsPassed) / 10) * 10 - secondsPassed - 1
            )}
        </span>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="flex flex-col justify-center items-center  flex-1 min-w-[50%] max-w-[50%]"
      >
        <img
          src={`${photo}`}
          className="w-full h-full bg-gray-400 rounded-lg aspect-square  shadow-lg"
          alt=""
        />
        <span className="font-semibold text-2xl capitalize">{`${firstName} ${lastName}`}</span>
      </motion.div>
      <div className=" grid grid-cols-1 min-w-[50%] aspect-square   ">
        {students?.map((child, childIndex) => {
          if (childIndex === currentIndex)
            return (
              <motion.div
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                key={`${child.id}`}
                className={`w-full h-full p-4  
                inset-0 aspect-square col-start-1 col-span-1 row-span-1 row-start-1 
                flex flex-col justify-center items-center min-w-[100%] 
              `}
              >
                <img
                  src={`${child.photo || child.image}`}
                  className="w-full h-full bg-gray-400 rounded-lg  shadow-lg"
                  alt=""
                />
                <span className="font-semibold text-xl capitalize">{`${child.firstName} ${lastName}`}</span>
              </motion.div>
            );
        })}
      </div>
    </div>
  );
};

export default ParentShow;
