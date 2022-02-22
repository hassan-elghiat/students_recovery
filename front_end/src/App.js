import { useEffect, useState } from "react";
import "./App.css";
import { Parents } from "./assets";
import { QueueBar } from "./components";
import ParentShow from "./components/ParentShow";

function App() {
  const [parents] = useState(Parents);
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
    <div className="Main_App w-screen h-screen grid-temp ">
      {/* header */}
      <div className=" bg-blue-500  header "></div>
      {/* waiting List  */}
      <div className=" bg-red-400  sidebar flex flex-col p-8  max-h-screen overflow-y-auto scrollbar">
        {Parents.map((parent, i) => (
          <QueueBar
            key={`waitingBar-queue-${parent.id}`}
            {...parent}
            index={i}
          />
        ))}
      </div>
      {/* main */}
      <div className="  bg-yellow-500  main grid place-items-center p-12">
        {parents[currentIndex] !== undefined && (
          <ParentShow
            key={`waitingParent-${parents[currentIndex]?.id}`}
            {...parents[currentIndex]}
            // index={currentIndex}
          />
        )}
      </div>
    </div>
  );
}

export default App;
