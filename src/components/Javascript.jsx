import Footer from "./Footer";
import Title from "./Title";
import MainContent from "./mainContent";
function Javascript() {
  return (
    <>
      <Title title="JAVASCRIPT" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 gap-y-6 mt-4">
        <MainContent
          name="School Website"
          des="Website created for a school."
          image="https://static.wixstatic.com/media/2eae99_449b7f9af8c2448fba700c4e24ad6ab4~mv2.jpg/v1/fill/w_970,h_1200,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%5Bcompressed%5BNOBEL-Front-1.jpg"
          live="https://bearcin46.github.io/school-website"
          repo="https://github.com/Bearcin46/school-website"
        />
        <MainContent
          name="Admission Form"
          des="Form for admission enquiry"
          image="https://images.ctfassets.net/lzny33ho1g45/4ODoWVyzgicvbcb6J9ZZZ5/c0333ef44af8588fee18c1e6ed403fc7/Group_12549.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760"
          live="https://bearcin46.github.io/Cyberdude-Challenges/JavaScript-DOM/01-Form/dist/"
          repo="https://github.com/Bearcin46/Cyberdude-Challenges/tree/main/JavaScript-DOM/01-Form"
        />
        <MainContent
          name="The Coffee Time"
          des="Its a website for a coffee cafe"
          image="https://i.ebayimg.com/images/g/yVEAAOSw5XNh57Vk/s-l1200.jpg"
          live="https://bearcin46.github.io/Cyberdude-Challenges/JavaScript-DOM/02-CoffeeCafe/dist/"
          repo="https://github.com/Bearcin46/Cyberdude-Challenges/tree/main/JavaScript-DOM/02-CoffeeCafe"
        />
        <MainContent
          name="Restaurant Menu"
          des="Menu for hotel using JSON data"
          image="https://sandstonepointhotel.com.au/wp-content/uploads/2021/07/Sanstone-Point-Winter-Menu-210-of-331.jpg"
          live="https://bearcin46.github.io/Cyberdude-Challenges/JavaScript-DOM/03-Hotel-Menu/dist/"
          repo="https://github.com/Bearcin46/Cyberdude-Challenges/tree/main/JavaScript-DOM/03-Hotel-Menu"
        />
        <MainContent
          name="IP Address Grabber"
          des="It's an app to grab IP address"
          image="https://techcult.com/wp-content/uploads/2022/09/How-to-Find-Someones-Exact-Location-with-IP-Address.png"
          live="https://bearcin46.github.io/Cyberdude-Challenges/JavaScript-DOM/04-Ip-Address-Grabber/dist/"
          repo="https://github.com/Bearcin46/Cyberdude-Challenges/tree/main/JavaScript-DOM/04-Ip-Address-Grabber"
        />
        <MainContent
          name="YouTube thumbnail grabber"
          des="Its an app to grab youtube thumbnail"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomU8mGD5Le_LrcXwhtYUkTIlEPNp7LA1DiDUqBtbTQZH_EucUgtuFIgqA4LRFBDZW5_M&usqp=CAU"
          live="https://bearcin46.github.io/Cyberdude-Challenges/JavaScript-DOM/05-Yt-thumbnail-dwnld/dist/"
          repo="https://github.com/Bearcin46/Cyberdude-Challenges/tree/main/JavaScript-DOM/05-Yt-thumbnail-dwnld"
        />
        <MainContent
          name="Github Api"
          des="It includes the github details of CyberDude Interns"
          image="https://nordicapis.com/wp-content/uploads/Walkthrough-of-Using-GitHub-to-Host-API-Documentation-1024x576.png"
          live="https://bearcin46.github.io/Cyberdude-Challenges/JavaScript-DOM/06-github-repo-api/dist/"
          repo="https://github.com/Bearcin46/Cyberdude-Challenges/tree/main/JavaScript-DOM/06-github-repo-api"
        />
        <MainContent
          name="IP Register App"
          des="App to register IP address"
          image="https://plumpos.com/assets/images/collections/tablet-cash-register-app-4-vend-1633708268-4912-800-dd4ec7c0c.webp"
          live="https://bearcin46.github.io/Cyberdude-Challenges/JavaScript-DOM/08-IP-Register-app/dist/"
          repo="https://github.com/Bearcin46/Cyberdude-Challenges/tree/main/JavaScript-DOM/08-IP-Register-app"
        />
      </div>
      <Footer />
    </>
  );
}
export default Javascript;
