import Image from "next/image"
import loadImage from '../../images/loadingCard.jpg';



export default function LoadingCard() {
  return (
    <section className='h-[300px] w-[300px]'>
      <h3>Wait a moment</h3>
      <h3>$000.0</h3>
      <Image src={loadImage} alt="asd"/>
    </section>
  );
}