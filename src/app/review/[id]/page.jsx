'use client';
import ReviewForm from '@/components/ReviewForm/ReviewForm';
import useAuthenticate from '@/hook/Authenticated';
import { useEffect } from 'react';

export default function Review({ params }) {
  const { secureRouteUser } = useAuthenticate();

  useEffect(() => {
    secureRouteUser();
  }, []);
  return (
    <div className='flex justify-center items-center h-screen bg-slate-800'>
      <ReviewForm id={params.id} />
    </div>
  );
}
