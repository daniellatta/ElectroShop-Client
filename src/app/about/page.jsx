
import AboutUs from "@/components/AboutUs/AboutUs";

export default function about() {
  return (
    <div className="flex items-center flex-col bg-[url('https://static.vecteezy.com/system/resources/previews/000/676/628/original/blue-blur-backdrop.jpg')] h-screen bg-cover bg-center">
      <h1 className="my-4 text-blue-500 text-5xl tracking-wide font-extrabold uppercase">Who We Are</h1>
      <AboutUs />
    </div>
  )
}
