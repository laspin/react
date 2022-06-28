/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';

const URL = 'http://pets-v2.dev-apis.com/pets?id=';

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const doFetchDetails = async () => {
      let res = await fetch(`${URL}${id}`);
      let data = await res.json();
      setDetails(data.pets[0]);
      setLoading(false);
    };
    doFetchDetails();
    return () => doFetchDetails;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleImageClick = event => setActive(+event.target.dataset.index); //typeof number

  return (
    <>
      {loading ? (
        <h2 id="loading">Loading...</h2>
      ) : (
        <>
          <div className="details">
            <div className="details-info">
              <h1>{details.name}</h1>
              <h2>
                {details.animal} — {details.breed} — {details.city}
              </h2>
              <button>Adopt {details.name}</button>
              <p>{details.description}</p>
            </div>
          </div>

          <div className="carousel">
            <img
              src={details.images[active]}
              alt="animal"
            />
            <div className="carousel-smaller">
              {details?.images.map((photo, index) => (
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                <figure
                  className="image-container"
                  onClick={handleImageClick}
                  key={index}
                >
                  <img
                    key={index}
                    src={photo}
                    data-index={index}
                    className={index === active ? 'active' : ''}
                    alt={photo}
                  />
                </figure>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

const WrappedDetails = () => {
  const params = useParams();
  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
