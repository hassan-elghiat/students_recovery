import axios from "axios";
import React, { useEffect, useState } from "react";
import { Parents } from "../assets";
import { QueueBar } from "../components";
import ParentShow from "./ParentShow";
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
const StudentsQueue = ({}) => {
  const [shuffled, setShuffled] = useState();
  const [parents, setParents] = useState([]);
  const [delivered, setDelivered] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const url = `http://192.168.1.47:8090/parents/all`;

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      authorization: `${token}`,
    };
    (async () => {
      const res = await axios.get(url, { headers });
      if (res.status !== 200) setShuffled(shuffle(Parents));

      setShuffled(shuffle(res.data));
    })();
  }, []);

  useEffect(() => {
    // when th queue bar should aprear
    // const interval1 = setInterval(() => {
    //   if (shuffled.length) {
    //     const random = Math.floor(Math.random() * shuffled.length);
    //     setParents([...parents, shuffled[random]]);
    //     setShuffled(shuffled.filter((e, i) => i !== random));
    //     console.log(shuffled);
    //   }
    // }, 1500);
    // when should change centered parent
    let ind = 0;
    const interval2 = setInterval(() => {
      if (ind + 1 > parents.length - 1) {
        ind = 0;
      } else {
        ind += 1;
      }
      console.log(`cuurent ${ind}`);
      setCurrentIndex(ind);
    }, 1000 * 10);

    return () => {
      // clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [shuffled, parents]);

  return (
    <div className="Main_App w-screen h-screen grid-temp ">
      {/* header */}

      <div className="flex-1 py-8 px-4 delivered">
        {delivered.length > 0 ? (
          delivered?.map((parent, i) => (
            <QueueBar
              key={`delivered-queue-${parent.parentId}`}
              {...parent}
              firstName={parent.firstName}
              lastName={parent.lastName}
              photo={parent.image || parent.photo}
              students={parent.childreen || parent.students}
              id={parent.id || parent.parentId}
              index={i}
            />
          ))
        ) : (
          <div className="flex flex-1 h-full justify-center items-center p-8 ">
            <span className="capitalize font-semibold whitespace-pre-wrap text-center">
              No parent Has Taken his childreen yet
            </span>
          </div>
        )}
      </div>
      {/* waiting List  */}
      <div className=" flex-1 py-8 px-4 queue overflow-auto">
        {parents.length ? (
          parents?.map((parent, i) => {
            return (
              <QueueBar
                key={`waitingBar-queue-${parent.id}`}
                {...parent}
                firstName={parent.firstName}
                lastName={parent.lastName}
                photo={parent.image || parent.photo}
                students={parent.childreen || parent.students}
                id={parent.id || parent.parentId}
                index={i}
                // for debug
                array={parents}
                setArray={setParents}
                wait={delivered}
                setWait={setDelivered}
              />
            );
          })
        ) : (
          <div className="flex flex-1 h-full justify-center items-center p-8 ">
            <span className="capitalize font-semibold whitespace-pre-wrap text-center">
              Everyone is Served
            </span>
          </div>
        )}
      </div>
      {/* main */}
      <div className="  bg-gray-100   main grid place-items-center p-12">
        {parents[currentIndex] !== undefined ? (
          <ParentShow
            key={`waitingParent-${parents[currentIndex]?.id}`}
            {...parents[currentIndex]}
            firstName={parents[currentIndex].firstName}
            lastName={parents[currentIndex].lastName}
            photo={parents[currentIndex].image || parents[currentIndex].photo}
            students={
              parents[currentIndex].childreen || parents[currentIndex].students
            }
            id={parents[currentIndex].parentId || parents[currentIndex].id}
            // index={currentIndex}
          />
        ) : (
          <div className="flex flex-1 h-full justify-center items-center p-8 ">
            <span className="capitalize font-semibold whitespace-pre-wrap text-center">
              No parent is Waiting
            </span>
          </div>
        )}
      </div>
      <div
        className="absolute z-50 bottom-12 right-12 h-24 aspect-square bg-red-400 rounded-full grid place-items-center cursor-pointer"
        onClick={() => {
          const random = Math.floor(Math.random() * shuffled.length);
          setParents([...parents, shuffled[random]]);
          setShuffled(shuffled.filter((e, i) => i !== random));
        }}
      >
        <span className="uppercase text-white font-bold text-lg">scan</span>
      </div>
    </div>
  );
};

export default StudentsQueue;
