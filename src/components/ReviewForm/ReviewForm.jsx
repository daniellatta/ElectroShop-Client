'use client';

import { postReview } from '@/redux/features/review';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import StarsRating from './StarsRating';

export default function ReviewForm({ id }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const [review, setReview] = useState({
    rating: 0,
    review: '',
    userId: JSON.parse(localStorage.getItem('id')),
    productId: id,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postReview(review, token));
    setReview({ rating: 0, review: '', userId: 0, productId: 0 });
  };
  return (
    <div className='shadow rounded-lg p-20 bg-slate-900'>
      <form
        className='flex flex-col items-center gap-5'
        onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor='rating'
            className='text-[#a9a9a9] flex justify-center'>
            Rate 1 to 5
          </label>
          <StarsRating
            starValue={review.rating}
            setStarValue={(value) => setReview({ ...review, rating: value })}
          />
        </div>
        <div>
          <textarea
            placeholder='Write you review here...'
            name='review'
            value={review.review}
            onChange={handleChange}
            className='border-[1px] border-[#a9a9a9] rounded-lg p-[10px] my-[20px] min-h-[200px] w-[400px] resize-none'
          />
        </div>
        <button
          type='submit'
          className='border-[1px] border-[#a9a9a9] rounded-lg wx-[40px] px-[15px] py-[3px] text-[#a9a9a9]'>
          Submit
        </button>
      </form>
    </div>
  );
}
