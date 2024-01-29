import Footer from "./Footer";
import Title from "./Title";
import MainContent from "./mainContent";
function Bootstrap() {
  return (
    <div className="">
      <Title title="BOOTSTRAP" />
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
        <MainContent
          name="Personal Website"
          des="Its a personal website built using bootstrap"
          image="https://www.iwantclarity.com/wp-content/uploads/2018/10/Website-Redesign-More-Than-Just-Aesthetics@2x-100.jpg"
          live="https://bearcin46.github.io/Personal-webpage"
          repo="https://github.com/Bearcin46/Personal-webpage"
        />
        <MainContent
          name="Chocoberry"
          des="Its a landing page for a chocolate industry"
          image="https://www.cadbury.com.au/media/wysiwyg/MONDOM3771---Cadbury-Easter-2022-Website-Home-Page-Header-Easter-Generic-mobile_1_.jpg"
          live="https://bearcin46.github.io/bootstrap-practice/"
          repo="https://github.com/Bearcin46/bootstrap-practice"
        />
        <MainContent
          name="Books Store"
          des="Its a website designed for a book store for all age"
          image="https://images.adsttc.com/media/images/573c/90c0/e58e/ce1e/1600/0007/large_jpg/Here_is_a_theater_to_unfold_an_outstanding_drama__and_the_characters_are_book_lovers_sitting_on_the_soft_couch_or_standing_beside_the_bookshelves._0004.jpg?1463587001"
          live="https://bearcin46.github.io/bootstrap-books-website/"
          repo="https://github.com/Bearcin46/bootstrap-books-website"
        />
        <MainContent
          name="Books Store"
          des="Its a website designed for a book store for all age"
          image="https://images.adsttc.com/media/images/573c/90c0/e58e/ce1e/1600/0007/large_jpg/Here_is_a_theater_to_unfold_an_outstanding_drama__and_the_characters_are_book_lovers_sitting_on_the_soft_couch_or_standing_beside_the_bookshelves._0004.jpg?1463587001"
          live="https://bearcin46.github.io/bootstrap-books-website/"
          repo="https://github.com/Bearcin46/bootstrap-books-website"
        />
      </div>
      <Footer />
    </div>
  );
}
export default Bootstrap;
