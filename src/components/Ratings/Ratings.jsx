'use client';
import Link from 'next/link';
import { FaRegStar } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

export default function Ratings({ product }) {
  const { review, reviews, id } = product;

  const renderStars = (review) => {
    const starComponents = [];
    const filledStars = Math.floor(review);
    for (let i = 0; i < 5; i++) {
      starComponents.push(<FaRegStar key={i} />);
    }
    for (let i = 0; i < filledStars; i++) {
      starComponents[i] = <FaStar key={i} />;
    }

    return starComponents;
  };

  return (
    <div className='flex flex-col items-center w-[500px] border border-gray-600 rounded-lg p-8 gap-10'>
      <div className='flex w-full'>
        <section className='flex flex-col w-1/2'>
          <h2>Customer reviews</h2>
          <span className='flex'>{renderStars(review)}</span>
          <span>{`${review} of 5`}</span>
        </section>

        <div className='flex flex-col mt-20 gap-5 p-8 border border-gray-600 rounded-lg w-1/2'>
          {reviews &&
            reviews.map((e) => {
              return (
                <article
                  key={e.id}
                  className='flex flex-col h-200 w-200 bg-white-300'>
                  <h3 className='flex'>{renderStars(e.rating)}</h3>
                  <h3>{e.review}</h3>
                  <h3>{e.user.name}</h3>
                </article>
              );
            })}
        </div>
      </div>
      <Link
        href={`/review/${id}`}
        className='py-[5px] px-3 border border-gray-600 rounded-lg'>
        Write a Review
      </Link>
    </div>
  );
}
