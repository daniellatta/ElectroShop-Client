export default function Card({ name, image, price, review }) {
  return (
    <div>
      <article>
        {name && <h3>{name}</h3>}
        {price && <h3>{price}</h3>}
        {review && <h3>{review}</h3>}
        {image && <img src={image} alt='' />}
      </article>
    </div>
  );
}
