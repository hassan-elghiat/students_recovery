import { Form, Formik } from "formik";
import React, { useState } from "react";

const Add = ({}) => {
  const [modalShow, setModalShow] = useState(false);
  const [myImage, setMyImage] = useState("");
  const [childreen, setChildreen] = useState([
    { fullName: "", massarId: "", level: "", age: 0 },
  ]);
  const addNewChildFields = () => {
    setChildreen([
      ...childreen,
      { fullName: "", massarId: "", level: "", age: 0 },
    ]);
  };
  const onClick = () => {};
  return (
    <div className="w-full h-screen flex items-center justify-evenly ">
      <div className="absolute w-full h-full bg-blue-300 p-24">
        <main className="flex w-full flex-1 flex-col gap-8 px-12 pt-4 bg-gray-300 rounded-2xl">
          <Formik
            enableReinitialize
            initialValues={{
              fullname: "",
              address: "",
              cin: "",
              phoneNumber: "",
              childreen,
            }}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              /* and other goodies */
            }) => (
              <Form className="flex h-[90vh] w-full items-center justify-center p-24 ">
                {/* inputs collections for parent */}
                <div className="flex flex-col px-12">
                  <div className="flex flex-1 flex-col items-center justify-center  ">
                    {/* firstName */}
                    <div className="relative mb-10">
                      <input
                        placeholder="Full Name"
                        id="fullname"
                        name="fullname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullname}
                        type="text"
                        className="bg-lightGray peer  h-12 w-[30vw] rounded-lg px-4 py-2 placeholder-transparent"
                      />
                      <label
                        htmlFor="fullname"
                        className="absolute left-2 bottom-14 pl-3 font-semibold capitalize text-black transition-all peer-focus:bottom-14 peer-placeholder-shown:bottom-3 "
                      >
                        Full Name
                      </label>
                    </div>
                    {/* lastName */}
                    <div className="relative mb-10">
                      <input
                        placeholder="Address"
                        id="address"
                        name="address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address}
                        type="text"
                        className="bg-lightGray peer  h-12 w-[30vw] rounded-lg px-4 py-2 placeholder-transparent"
                      />
                      <label
                        htmlFor="address"
                        className="absolute left-2 bottom-14 pl-3 font-semibold capitalize text-black transition-all peer-focus:bottom-14 peer-placeholder-shown:bottom-3 "
                      >
                        Address
                      </label>
                    </div>
                    {/* Massar Id */}
                    <div className="relative mb-10">
                      <input
                        placeholder="CIN"
                        id="cin"
                        name="cin"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.cin}
                        type="text"
                        className="bg-lightGray peer  h-12 w-[30vw] rounded-lg px-4 py-2 placeholder-transparent"
                      />
                      <label
                        htmlFor="cin"
                        className="absolute left-2 bottom-14 pl-3 font-semibold capitalize text-black transition-all peer-focus:bottom-14 peer-placeholder-shown:bottom-3 "
                      >
                        CIN
                      </label>
                    </div>
                    {/* Level */}
                    <div className="relative mb-10">
                      <input
                        placeholder="Phone Number"
                        id="Level"
                        name="phoneNumber"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneNumber}
                        type="text"
                        className="bg-lightGray peer  h-12 w-[30vw] rounded-lg px-4 py-2 placeholder-transparent"
                      />
                      <label
                        htmlFor="phoneNumber"
                        className="absolute left-2 bottom-14 pl-3 font-semibold capitalize text-black transition-all peer-focus:bottom-14 peer-placeholder-shown:bottom-3 "
                      >
                        Phone Number
                      </label>
                    </div>
                    {/* childreen */}
                    <div className="relative  mb-10 flex  w-full flex-1 justify-end ">
                      <span
                        className="px-4 py-2 rounded-md text-black  bg-white font-semibold cursor-pointer"
                        onClick={() => {
                          addNewChildFields();
                        }}
                      >
                        Add Child
                      </span>
                    </div>
                    <div className="relative mb-10 grid grid-cols-2 w-full">
                      {values.childreen.map((child, index) => {
                        return (
                          <div className="">
                            <input
                              placeholder="Full Name"
                              id={`childreen.fullName.${index}`}
                              name="childreen.fullName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.childreen[index].fullName}
                              type="text"
                              className="bg-lightGray peer  w-full rounded-lg px-4 py-2 placeholder-transparent"
                            />
                            <label
                              htmlFor="childreen.fullName"
                              className="absolute left-2 bottom-14 pl-3 font-semibold capitalize text-black transition-all peer-focus:bottom-14 peer-placeholder-shown:bottom-3 "
                            >
                              Full Name
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/*  */}
                  {/* save button */}
                  <div className="relative  mb-10 flex  w-full flex-1 justify-end ">
                    <input
                      type="submit"
                      value="Save"
                      className="bg-primaryFG w-auto flex-[0.4] cursor-pointer rounded-xl py-2 text-xl font-semibold text-black bg-white transition-all hover:flex-1"
                    />
                  </div>
                </div>
                {/* image */}

                <div
                  className={`bg-gray relative grid h-full flex-[1] min-w-[50%] place-items-center rounded-2xl  hover:opacity-90 `}
                  style={
                    myImage
                      ? {
                          backgroundImage: `url(${myImage})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                        }
                      : undefined
                  }
                >
                  <label for="myImage">
                    <img
                      src={`https://img.icons8.com/ios/100/${
                        myImage ? `ffffff` : `000000`
                      }/add--v1.png`}
                      alt="addIcon"
                      className=" cursor-pointer transition-all duration-100 hover:rotate-90 hover:scale-110"
                    />
                  </label>
                  <input
                    type="file"
                    id="myImage"
                    accept="image/*"
                    className="hidden"
                    //   value={myImage ?? ""}
                    onChange={(e) => {
                      var reader = new FileReader();
                      reader.onloadend = () => {
                        setMyImage(reader.result);
                        console.log(reader.result);
                      };
                      if (e.target.files[0]) {
                        reader.readAsDataURL(e.target.files[0]);
                      }
                    }}
                  ></input>
                  {/* </input> */}
                </div>
              </Form>
            )}
          </Formik>
        </main>
      </div>
      <div className="w-[20%] aspect-square rounded-xl shadow-md hover:scale-105 hover:shadow-2xl hover:cursor-pointer transition-all flex items-center justify-center bg-gray-300">
        <span className="text-2xl text-ellipsis font-bold ">Parent</span>
      </div>
      <div className="w-[20%] aspect-square rounded-xl shadow-md hover:scale-105 hover:shadow-2xl hover:cursor-pointer transition-all flex items-center justify-center bg-gray-300">
        <span className="text-2xl text-ellipsis font-bold ">Student</span>
      </div>
    </div>
  );
};

export default Add;
