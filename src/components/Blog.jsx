import BlogContent from "./BlogContent";
import Footer from "./Footer";
import Recent from "./Recent";
import Title from "./Title";
function Blog() {
  return (
    <>
      <Title title="Bearcin's Blog" />
      <div className="px-6 ">
        <h1 className="mt-4 font-serif text-xl text-justify">
          Hi there! I'm thrilled to have you here at{" "}
          <span className="text-2xl text-red-600 font-cursive font-bold">
            Bearcin's Blog
          </span>
          , where you can join with the world of Bearcin. Whether you're a
          seasoned reader or just stumbled upon our corner of the internet,
          we're delighted to welcome you into our community. At{" "}
          <span className="text-2xl text-red-600 font-cursive font-bold">
            Bearcin's Blog
          </span>
          , we believe in core values and mission. This blog is more than just
          words on a screen; it's a space where readers can expect -
          inspiration, information, entertainment, etc.. Our goal is to get you
          achieve the purpose of your life. As you explore the various posts and
          pages, we hope you find inspiration, motivation, entertainment and a
          sense of community as well as connection. Feel free to engage with our
          content and leave comments or reach out to us. Your thoughts and
          perspectives are not only welcome but encouraged!
        </h1>
      </div>
      <h2 className="text-4xl font-bold text-red-600 px-6 mt-4 mb-4 underline">
        Trending Blog's
      </h2>
      <div className="flex md:flex md:flex-row flex-col gap-6 justify-evenly ">
        <div className="flex flex-col items-center gap-10">
          <BlogContent
            title="Failure to Success"
            img="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/45147/images/818a504-c0a5-6ac-8f18-c11166e253c_Failure_5.jpg"
            date="24-01-2024"
            shortNotes="Failure is not the end but a stepping stone to success. Each failure
       provides valuable lessons and insights. It's an opportunity to
       analyze, adapt, and grow. Let's see how to deal with failure."
          />
          <BlogContent
            title="Love A Little More"
            date="02-01-2024"
            img="https://www.durfdenken.be/sites/default/files/styles/banner/public/2022-08/zomerlief.jpg?h=c016dd6e&itok=a0BXdz0w"
            shortNotes="Love is not limited to special occasions.
          Make a conscious effort to express love daily. Small, consistent acts of love create a more fulfilling life.Embrace diversity and celebrate differences. Love grows when we appreciate the uniqueness in others. Learn from different perspectives and experiences."
          />
        </div>
        {/* sidecontent */}
        <div className="flex flex-col items-center">
          <div className="bg-[#5f0f40]  px-5 rounded-md py-5 max-w-[400px]">
            <div className="flex items-center justify-center">
              <img
                src="https://github.com/Bearcin46.png"
                alt=""
                className="w-[200px] h-[200px] rounded-full"
              />
            </div>
            <div>
              <h2 className="text-white text-center text-xl">
                Bearcin Sweety A
              </h2>
              <h5 className="text-gray-400 text-center">Full Stack Engineer</h5>
              <p className="mt-3 text-white text-justify">
                Bearcin Sweety is Engineering Professional who made a mark on
                Full Stack Development. Beyond the lines of code, she bring a
                dash of creativity to everything she do. She loves writing
                short-stories and blogs as well.{" "}
              </p>
            </div>
          </div>
          <h2 className="text-2xl text-red-600 mt-5 mb-3 font-bold">
            Recent Searches..
          </h2>
          <Recent
            title="Explore the Life"
            img="https://www.parents.com/thmb/GExGCp2zHxDIKxnCtx4QykPFqAs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1407570793-5f7481ec66794bdb8f67f27f1a9cf6d2.jpg"
            date="22-12-2023"
          />
          <Recent
            title="Path of Loneliness"
            img="https://experteditor.com.au/wp-content/uploads/2023/09/If-a-man-displays-these-behaviors-hes-definitely-a-lone-wolf-1.jpg"
            date="20-12-2023"
          />
          <Recent
            title="Work life Balance"
            img="https://www.4cornerresources.com/wp-content/uploads/2022/08/work-life-balance-scaled.jpeg"
            date="22-12-2023"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Blog;
