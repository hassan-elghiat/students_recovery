import { useEffect, useState } from "react";

import { Parents } from "../assets";
import QueueBar from "./QueueBar";
import ParentShow from "./ParentShow";

const Main = () => {
  const [parents] = useState(Parents);
  const [delivered, setDelivered] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let ind = 0;
    const interval = setInterval(() => {
      if (ind + 1 > parents.length - 1) {
        ind = -1;
      }
      setCurrentIndex(++ind);
    }, 1000 * 10);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div className="Main_App w-screen h-auto grid-temp max-h-screen bg-gray-100 ">
        <div className="delivered ">
          {delivered.length > 0 ? (
            delivered
              .reverse()
              .map((parent, i) => (
                <QueueBar
                  key={`delivered-queue-${parent.id}`}
                  {...parent}
                  index={i}
                />
              ))
          ) : (
            <div classNa me="flex  h-full justify-center items-center p-8">
              <span className="capitalize font-semibold whitespace-pre-wrap text-center">
                No parent Has Taken his childreen yet
              </span>
            </div>
          )}
        </div>
        {/* waiting List  */}
        <div className="queue flex flex-col p-8  max-h-screen overflow-y-auto scrollbar">
          {Parents.reverse().map((parent, i) => (
            <QueueBar
              key={`waitingBar-queue-${parent.id}`}
              {...parent}
              index={i}
            />
          ))}
        </div>
        {/* main */}
        <div className="main grid place-items-center p-12">
          {parents[currentIndex] !== undefined && (
            <ParentShow
              key={`waitingParent-${parents[currentIndex]?.id}`}
              {...parents[currentIndex]}
              // index={currentIndex}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Main;
