function BlogContent(props) {
  return (
    <>
      <div className="flex max-w-[800px] flex-col gap-4 rounded-md  px-6 py-6 shadow-md shadow-gray-400">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl md:text-3xl font-bold font-main text-red-600">
              {props.title}
            </h2>
            <h2 className="text-sm">
              <span className=" font-semibold font-serif">Published on : </span>
              <span className="text-red-600 font-semibold">{props.date}</span>
            </h2>
          </div>
          <div className=" items-center flex gap-3 mb-3">
            <img
              src="https://github.com/Bearcin46.png"
              alt=""
              className="rounded-full w-6 h-6 "
            />
            Bearcin Sweety. A
          </div>
          <img src={props.img} alt="" className="w-full h-[400px] rounded-md" />
        </div>
        <div>
          <h2 className="text-lg text-justify">
            <span className="text-xl font-bold font-serif">
              What's Inside :{" "}
            </span>
            {props.shortNotes}
          </h2>
          <div className="mt-2">
            <button
              onClick={() => {
                alert(
                  "This Page is under construction. Thanks for your understanding 😇"
                );
              }}
              className="bg-[#5f0f40] w-full hover:bg-[#761d54] text-white px-4 py-2 rounded font-semibold"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default BlogContent;
