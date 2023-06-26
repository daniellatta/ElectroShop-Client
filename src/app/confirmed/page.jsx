import Link from "next/link";
import thanksImage from '../../images/thanks.jpg'
import Image from "next/image";

const Confirmed = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-700 text-white">
      <h2 className="text-4xl  mb-8">Your purchase has been successfully completed.</h2>
      <Image src={thanksImage} className='pb-10'/>
      <Link href="/">
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 transition-colors duration-300 rounded-lg">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default Confirmed;