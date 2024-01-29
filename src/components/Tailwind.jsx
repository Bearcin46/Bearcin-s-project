import Footer from "./Footer";
import Title from "./Title";
import MainContent from "./mainContent";
function Tailwind() {
  return (
    <>
      <Title title="TAILWIND CSS" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
        <MainContent
          name="WhatsApp"
          des="It's a UI representation of Whatsapp app"
          image="https://apicms.thestar.com.my/uploads/images/2023/02/09/1933656.jpg"
          live="https://bearcin46.github.io/wechat-ui-tailwindcss/"
          repo="https://github.com/Bearcin46/wechat-ui-tailwindcss"
        />
        <MainContent
          name="Instagram"
          des="Instagram UI was built using tailwindcss"
          image="https://conversation24.com/wp-content/uploads/2021/06/Instagram-Direct-Message.jpg"
          live="https://bearcin46.github.io/instagram-ui-tailwindcss/"
          repo="https://github.com/Bearcin46/instagram-ui-tailwindcss"
        />
        <MainContent
          name="Gpay"
          des="UI for Gpay was built using tailwindcss"
          image="https://imageio.forbes.com/specials-images/imageserve/1182145240/Google-Pay/960x0.jpg?format=jpg&width=960"
          live="https://bearcin46.github.io/gpay-ui-tailwindcss/"
          repo="https://github.com/Bearcin46/gpay-ui-tailwindcss"
        />
        <MainContent
          name="Home Rent"
          des="An website designed to search,sell and buy house."
          image="https://studycafe.in/cdn-cgi/image/fit=contain,format=webp,gravity=auto,metadata=none,quality=80,width=1200,height=730/wp-content/uploads/2017/03/House-Rent-Exemption-Under-Section-1013A.jpg"
          live="https://bearcin46.github.io/houserent-using-tailwindcss/"
          repo="https://github.com/Bearcin46/houserent-using-tailwindcss"
        />
      </div>
      <Footer />
    </>
  );
}
export default Tailwind;
