import Image from "next/image";
import loadImage from '../../images/loadingCard.jpg';

const LoadingCard = () => {
  return (
    <article className='bg-slate-800 border-transparent rounded-lg p-2.5'>
      <div className='flex justify-center items-center mx-0'>
        <Image
          src={loadImage}
          width={300}
          height={300}
          alt="Loading"
          priority
          className='border-transparent rounded-lg w-full h-full'
        />
      </div>
      <h3 className='text-white'>Wait a moment</h3>
      <h3 className='text-white'>$000.0</h3>
    </article>
  );
};

export default LoadingCard;