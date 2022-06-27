const Pet = ({ name, animal, breed, images, city, id }) => {
  const defImg = 'http://pets-images.dev-apis.com/pets/none.jpg';

  return (
    <a
      href={`/details/${id}`}
      className="pet"
    >
      <div className="image-container">
        <img
          src={images ? images : defImg}
          alt={name}
        />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${city || 'N/A'}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
