
const ChildreenImages = ({ students }) => {

  return (
    <div className="flex flex-row justify-center">
      {students.slice(0, 3).map((student, index) => {
        return (
          <img
            key={index}
            src={`${student.photo}`}
            alt={`${student.firstName}`}
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
