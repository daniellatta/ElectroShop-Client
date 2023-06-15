function getInfoCards() {
  return fetch("https://jsonplaceholder.typicode.com/photos").then((res) =>
    res.json()
  );
}

export default async function Card() {
  const info = await getInfoCards();
  return (
    <div>
      {info.slice(0, 5).map((album, i) => {
        return (
          <section key={i}>
            <article>
              {album.title}
              <img src={album.url} alt="" />
            </article>
          </section>
        );
      })}
    </div>
  );
}
