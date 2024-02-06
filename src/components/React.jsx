import Footer from "./Footer";
import Title from "./Title";
import MainContent from "./mainContent";
const Reactpage = () => {
  return (
    <>
      <Title title="REACT JS" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 gap-y-6 mt-4">
        <MainContent
          name="Personal webpage"
          des="Website created by using JSON data"
          image="https://matomo.org/wp-content/uploads/2023/09/GDPR-personal-data.png"
          live="https://bearcin-sweety-resume.netlify.app/"
          repo="https://github.com/Bearcin46/Cyberdude-Challenges/tree/main/Reactjs/Bearcin-Sweety"
        />
        <MainContent
          name="Posts of Bearcin"
          des="Fetching data from Api and posting it"
          image="https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png"
          live="https://posts-of-bearcin.netlify.app/"
          repo="https://github.com/Bearcin46/Cyberdude-Challenges/tree/main/Reactjs/Blogs"
        />
        <MainContent
          name="Whatsapp Chat Application"
          des="Web app for chats using states of React"
          image="https://web-assets.esetstatic.com/wls/2023/03/whatsapp-scams-avoid.jpg"
          live="https://bearcin-sweety-resume.netlify.app/"
          repo="https://github.com/Bearcin46/Cyberdude-Challenges/tree/main/Reactjs/Bearcin-Sweety"
        />
        <MainContent
          name="Loading..."
          des="Work on Progress, will update soon.."
          image="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1260.gif"
          // live=""
          // repo=""
        />
        {/* <img
          src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1260.gif"
          className="h-[400px]"
          alt=""
        /> */}
      </div>
      <Footer />
    </>
  );
};
export default Reactpage;
