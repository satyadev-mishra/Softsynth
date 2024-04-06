const CourseCard = (props) => {
  return (
    <>
      <div className="w-[90%] sm:w-[320px] rounded-xl border shadow-xl cursor-pointer mb-12">
        <img
          src={props.src}
          alt={props.alt}
          className="h-[45%] w-full rounded-md object-cover object-center  p-4"
        />
        <div className="p-4">
          <h1 className="text-xl font-bold">{props.courseTitle}</h1>
          <p className="mt-3 text-md text-gray-600">
            <span className="text-md font-bold">Duration: </span>
            {props.courseDuration}
          </p>
          <p className="mt-3 text-md text-gray-600">{props.courseDescription}</p>

          <button
            onClick={() => props.apply()}
            type="button"
            className="w-full mt-4 rounded-md bg-black py-2 text-lg font-semibold text-white shadow-sm hover:bg-[var(--font-color)]"
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};
export default CourseCard;