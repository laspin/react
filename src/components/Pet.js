import { Link } from 'react-router-dom';
const Pet = ({ name, animal, breed, images, city, id }) => {
  const defImg = 'http://pets-images.dev-apis.com/pets/none.jpg';

  return (
    <Link
      to={`/details/${id}`}
      className="pet"
    >
      <div className="image-container">
        <img
          src={images || defImg}
          alt={name}
        />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${city || 'N/A'}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
