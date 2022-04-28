import React from "react";
import "./barcss.css";
import "./QueueBar.css";
import "./utsframe.css";

// const QueueBar = ({
//   firstName,
//   id,
//   lastName,
//   image,
//   cin,
//   address,
//   phoneNumber,
//   childreen,
//   index,
// }) => {
//   return (
//     <section class=" u-section-1" id="sec-4fba">
//       <div class="u-container-style u-group u-radius-17 u-shape-round u-white u-group-1">
//         <div class="u-container-layout u-container-layout-1">
//           <img
//             class=" u-border-palette-2-light-2 u-image u-image-circle u-image-1"
//             src="assets/images/ImageHolder_3.png"
//             alt=""
//             data-image-width="400"
//             data-image-height="265"
//           ></img>
//           <img
//             class=" u-border-palette-2-light-2 u-image u-image-circle u-image-2"
//             src="assets/images/ImageHolder_2.png"
//             alt=""
//             data-image-width="400"
//             data-image-height="265"
//           ></img>
//           <img
//             class="u-border-palette-2-light-2 u-image u-image-circle u-image-3"
//             src="assets/images/ImageHolder_1.png"
//             alt=""
//             data-image-width="400"
//             data-image-height="265"
//           ></img>
//           <img
//             class=" u-border-palette-2-light-2 u-image u-image-circle u-image-4"
//             src="assets/images/ImageHolder.png"
//             alt=""
//             data-image-width="400"
//             data-image-height="265"
//           ></img>
//           <h3 class="u-text u-text-1">{firstName}</h3>
//         </div>

//         {/* {childreen.map((child, i) => (

//             // pour les image de l'enfant
//         <div className="" key={`child-${id}-${i}`}>
//           Enfant  {++i} {child.firstName}

//         </div>
//       ))} */}
//       </div>
//     </section>
//   );
// };

const QueueBar = ({
  firstName,
  id,
  lastName,
  photo,
  cin,
  address,
  phoneNumber,
  students,
  index,
  array,
  setArray,
  wait,
  setWait,
}) => {
  const imageSize = 16;
  return (
    // the code of the parent bar should be Here
    <div
      className={`w-full shadow-lg max flex flex-row items-center justify-between px-4 py-2  ${
        setArray ? `bg-red-100` : `bg-green-100`
      } mb-4 rounded-2xl  `}
      key={`quebarContainr-${id}-${firstName}`}
      onClick={() => {
        if (setArray) {
          setWait([...wait, ...array.filter((e) => e.parentId === id)]);
          console.log(wait);
          setArray(array.filter((e) => e.parentId !== id));
        }
      }}
    >
      <div className="grid place-items-center  rounded-full border-2  shadow-xl border-white  h-24 aspect-square overflow-hidden ">
        <img src={photo} alt="parentImage" className="w-full aspect-square " />
      </div>
      <div className=" flex-1 px-[5%] ">
        <span className="font-semibold capitalize text-lg">{`${firstName} ${lastName}`}</span>
      </div>
      <div
        className="flex flex-row justify-start  "
        style={{ width: `${(imageSize * 3) / 4}rem` }}
      >
        {students?.map((child, i) => (
          // pour les image de l'enfant
          <div
            className={`grid place-items-center max-h-24 rounded-full  shadow-xl border-2  border-white aspect-square bg-white overflow-hidden
          ${i !== 0 && "-ml-4"} `}
            key={`childImage-${child.id}-${i}`}
          >
            <img
              src={child.photo || child.image}
              alt="parentImage"
              className="object-cover w-full  aspect-square"
              style={{ height: `${imageSize / 4}rem` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QueueBar;
