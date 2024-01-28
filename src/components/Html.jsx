import Title from "./Title";
import MainContent from "./mainContent";

function Html() {
  return (
    <>
      <Title title="HTML & CSS" />
      <div className="grid grid-cols-3 gap-2 mt-4">
        <MainContent
          name="Tacco Shop Website"
          des="Its designed to display about tacco shop"
          image="https://media-cdn.tripadvisor.com/media/photo-s/16/04/e2/ab/getlstd-property-photo.jpg"
          live="https://bearcin46.github.io/Taco-Shop-website-using-html-and-css/"
          repo="https://github.com/Bearcin46/Taco-Shop-website-using-html-and-css"
        />
        <MainContent
          name="Resume"
          des="Digital Resume created using CSS"
          image="https://www.theforage.com/blog/wp-content/uploads/2022/09/Depositphotos_95377176_L.jpg"
          live="https://bearcin46.github.io/Digital-resume/"
          repo="https://github.com/Bearcin46/Digital-resume"
        />
        <MainContent
          name="Sample Portfolio"
          des="A sample portfolio designed using CSS"
          image="https://media.www.kent.ac.uk/se/20823/portfolio-banner_1920w.jpg"
          live="https://bearcin46.github.io/new-portfolio/"
          repo="https://github.com/Bearcin46/new-portfolio"
        />
        <MainContent
          name="Landing Page"
          des="Its a landing page build using Html and css"
          image="https://sasanadigital.com/wp-content/uploads/2022/12/Landing-Page_.webp"
          live="https://bearcin46.github.io/Landing-page-design"
          repo="https://github.com/Bearcin46/Landing-page-design"
        />
      </div>
    </>
  );
}
export default Html;
