const Card = ({ name, background_image, genres }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={background_image} alt={name} />
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
