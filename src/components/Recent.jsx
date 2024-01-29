function Recent(props) {
  return (
    <>
      <div className="flex items-center gap-4 bg-[#5f0f40] text-white mt-5 rounded-md justify-between pe-3 ps-3 py-2">
        <div>
          <img
            src={props.img}
            alt=""
            className="w-[70px] h-[70px] rounded-full"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">{props.title}</h2>
          <span>Published On : </span>
          <span>{props.date}</span>
        </div>
        <div>
          <button className="bg-white text-[#5f0f40] font-semibold hover:bg-gray-100 rounded-md px-3 py-1">
            Read..
          </button>
        </div>
      </div>
    </>
  );
}
export default Recent;
