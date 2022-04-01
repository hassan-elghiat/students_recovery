import { Form, Formik } from "formik";
import React, { useState } from "react";

const AddStudent = ({}) => {
  const [modalShow, setModalShow] = useState(false);
  const [myImage, setMyImage] = useState("");
  const [childreen, setChildreen] = useState([""]);
  const addNewChildFields = () => {
    setChildreen([...childreen, ""]);
  };
  const onClick = () => {};
  return (
    <div className="w-full h-screen flex items-center justify-evenly ">
      <img
        src="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="absolute w-full h-full object-cover "
        alt="ImageBackground"
      />
      <div className="absolute w-full h-full  backdrop-blur-md p-24 ">
        <main className="relative flex w-full flex-1 flex-col gap-8 px-12 pt-4  back rounded-2xl">
        <h1 className="w-full text-black text-md">Add New Student</h1>
          <Formik
            enableReinitialize
            initialValues={{
              fullname: "",
              address: "",
              parentID: "",
              level: "",
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
              <Form className="flex w-full items-center justify-center p-24 pt-0">
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
                        First Name
                      </label>
                    </div>
                    {/* lastName */}
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
                        Last Name
                      </label>
                    </div>
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
                        placeholder="parentID"
                        id="parentID"
                        name="parentID"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.parentID}
                        type="text"
                        className="bg-lightGray peer  h-12 w-[30vw] rounded-lg px-4 py-2 placeholder-transparent"
                      />
                      <label
                        htmlFor="parentID"
                        className="absolute left-2 bottom-14 pl-3 font-semibold capitalize text-black transition-all peer-focus:bottom-14 peer-placeholder-shown:bottom-3 "
                      >
                        Parent ID
                      </label>
                    </div>
                    {/* Level */}
                    <div className="relative mb-10">
                      <input
                        placeholder="Level"
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
                        Level
                      </label>
                    </div>
                    {/* childreen */}
                  </div>
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
                  className={`bg-gray relative grid h-full flex-[1] min-w-[50%] place-items-center rounded-2xl transition-all  hover:scale-105 `}
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
                      src={`https://img.icons8.com/ios/100/${`ffffff`}/add--v1.png`}
                      alt="addIcon"
                      className=" cursor-pointer transition-all duration-100 hover:rotate-90 hover:scale-110 drop-shadow-md"
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

export default AddStudent;
