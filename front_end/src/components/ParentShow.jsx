import React, { useEffect, useState } from "react";

const ParentShow = ({ firstName, lastName, image, childreen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mountTime] = useState(new Date());
  const [secondsPassed, setSecondsPassed] = useState(0);

  useEffect(() => {
    let ind = 0;
    const interval = setInterval(() => {
      if (ind + 1 > childreen.length - 1) {
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
    <div className="relative w-full h-full bg-white rounded-lg p-8 flex  justify-start items-center shadow-lg">
      {/* green dot */}
      <div className="h-8 aspect-square rounded-full bg-green-400 absolute top-5 left-5 animate-bounce 	grid place-items-center">
        <span className="text-white">{10 - secondsPassed}</span>
      </div>
      <div className="flex flex-col justify-center items-center  flex-1 min-w-[50%] max-w-[50%]">
        <img
          src={`${image}`}
          className="w-full h-full bg-pink-300 rounded-lg aspect-square  shadow-lg"
          alt=""
        />
        <span className="font-medium capitalize">{`${firstName} ${lastName}`}</span>
      </div>
      <div className=" grid grid-cols-1 min-w-[50%] aspect-square ">
        {childreen.map((child, childIndex) => {
          return (
            <div
              key={`${child.id}`}
              className={`w-full h-full p-4  
                inset-0 aspect-square col-start-1 col-span-1 row-span-1 row-start-1 
                flex flex-col justify-center items-center min-w-[100%] 
              ${childIndex === currentIndex ? `opacity-100` : `opacity-0`}`}
            >
              <img
                src={`${child.image}`}
                className="w-full h-full bg-pink-300 rounded-lg  shadow-lg"
                alt=""
              />
              <span className="font-medium capitalize">{`${child.firstName} ${lastName}`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ParentShow;
