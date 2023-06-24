import Banner from "@/components/Banner/Banner";
import Carousel from "@/components/Carousel/Carousel";
import FeaturedItems from "@/components/FeaturedItems/FeaturedItems";
import Footer from "@/components/Footer/Footer";
import ForYou from "@/components/ForYou/ForYou";
import NewItems from "@/components/NewItems/NewItems";
import Social from "@/components/Socials/Social";
import HeaderText from "@/components/HeaderText/HeaderText";

export default function Landing() {
  return (
    <div>
      <div className="bg-gradient-to-r mt-16 from-slate-900 to-slate-700 ">
        <HeaderText />

        <Carousel />

        <Social />

        <FeaturedItems />

        <NewItems />

        <Banner />

        <ForYou />
      </div>

      <Footer />
    </div>
  );
}
