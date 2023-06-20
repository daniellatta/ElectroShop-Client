import Banner from "@/components/Banner/Banner";
import Carousel from "@/components/Carousel/Carousel";
import FeaturedItems from "@/components/FeaturedItems/FeaturedItems";
import Footer from "@/components/Footer/Footer";
import ForYou from "@/components/ForYou/ForYou";
import NewItems from "@/components/NewItems/NewItems";
import Image from "next/image";
import logo from "../images/logoimage.png";

export default function Landing() {
  return (
    <div>
      <section className="bg-black text-white py-20">
        <div className="flex justify-around">
          <h1 className="text-4xl font-bold">Mi Landing Page</h1>
          <Image src={logo} alt="asd" height={50} width={50} />
        </div>
      </section>

      <div className="bg-slate-700">
        <Carousel />

        <FeaturedItems />

        <NewItems />

        <Banner />

        <ForYou />
      </div>

      <Footer />
    </div>
  );
}
