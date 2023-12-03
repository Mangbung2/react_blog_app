import Header from "components/Header";
import Footer from "components/Footer";
import PostList from "components/PostList";
import Carousel from "components/Carousel";

export default function home() {
  return (
    <div>
      <Header />
      <Carousel />
      <PostList />
      <Footer />
    </div>
  );
}
