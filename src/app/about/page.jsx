import AboutUs from '@/components/AboutUs/AboutUs';

export default function about() {
  return (
    <div className="flex mt-16 h-screen items-center flex-col bg-[url('https://static.vecteezy.com/system/resources/previews/000/676/628/original/blue-blur-backdrop.jpg')] bg-cover h-full">
      <h1 className='mt-4 text-black text-2xl tracking-wide font-extrabold uppercase'>
        who we are:
      </h1>
      <AboutUs />
    </div>
  );
}
