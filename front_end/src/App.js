import "./App.css";
import { Parents } from "./assets";
import { QueueBar } from "./components";

function App() {
  return (
    <div className="Main_App w-screen h-screen grid-temp ">
      {/* header */}
      <div className=" bg-blue-500  header "></div>
      {/* waiting List  */}
      <div className=" bg-red-400  sidebar flex flex-col p-8  max-h-screen overflow-scroll">
        {Parents.map((parent, i) => (
          <QueueBar key={`waitingBar-${parent.id}`} {...parent} index={i} />
        ))}
      </div>
      {/* main */}
      <div className="  bg-yellow-500  main"></div>
    </div>
  );
}

export default App;
