import ReviewForm from '@/components/ReviewForm/ReviewForm';

export default function review({ params }) {
  return (
    <div className='flex justify-center items-center h-screen bg-slate-800'>
      <ReviewForm id={params.id} />
    </div>
  );
}
