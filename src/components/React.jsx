import Footer from "./Footer";
import Title from "./Title";
import MainContent from "./mainContent";
const Reactpage = () => {
  return (
    <>
      <Title title="REACT JS" />
      <div className="flex items-center justify-center">
        <img
          src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1260.gif"
          className="h-[400px]"
          alt=""
        />
      </div>
      <Footer />
    </>
  );
};
export default Reactpage;
