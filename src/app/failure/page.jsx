import Link from 'next/link';

export default function failure() {
  return (
    <div className='flex justify-center items-center h-screen bg-slate-900'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='text-[50px] text-white'>Something went wrong?</h1>
        <Link
          href={'/products'}
          className='border-2 border-slate-800 p-2 rounded-lg text-white hover:border-slate-600 transition'>
          Go Back
        </Link>
      </div>
    </div>
  );
}
